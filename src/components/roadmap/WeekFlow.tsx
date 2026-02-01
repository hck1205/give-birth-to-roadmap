import { useMemo } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import ReactFlow, { Background, Controls, Edge, Node } from "reactflow";
import {
  filteredWeeksAtom,
  selectedWeekAtom,
  weekDrawerOpenAtom,
} from "../../atom/roadmapAtom";
import WeekNode from "./WeekNode";
import { FlowContainer } from "../roadmapLayout";

const nodeTypes = { weekNode: WeekNode };

export default function WeekFlow() {
  const weeks = useAtomValue(filteredWeeksAtom);
  const selectedWeek = useAtomValue(selectedWeekAtom);
  const setSelectedWeek = useSetAtom(selectedWeekAtom);
  const setDrawerOpen = useSetAtom(weekDrawerOpenAtom);

  const { nodes, edges } = useMemo(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    const perRow = 4;
    const xGap = 280;
    const yGap = 180;

    weeks.forEach((week, index) => {
      const row = Math.floor(index / perRow);
      const col = index % perRow;

      nodes.push({
        id: `week-${week.week}`,
        type: "weekNode",
        position: { x: col * xGap, y: row * yGap },
        data: {
          week,
          isActive: selectedWeek === week.week,
          onSelect: (selected) => {
            setSelectedWeek(selected.week);
            setDrawerOpen(true);
          },
        },
      });

      if (index > 0) {
        edges.push({
          id: `edge-${weeks[index - 1].week}-${week.week}`,
          source: `week-${weeks[index - 1].week}`,
          target: `week-${week.week}`,
          animated: false,
          style: { stroke: "#475569" },
        });
      }
    });

    return { nodes, edges };
  }, [setDrawerOpen, setSelectedWeek, selectedWeek, weeks]);

  return (
    <FlowContainer>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag
      >
        <Background color="#1e293b" gap={28} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </FlowContainer>
  );
}
