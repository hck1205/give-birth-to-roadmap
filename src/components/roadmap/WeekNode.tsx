import styled from "@emotion/styled";
import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import Tag from "../common/Tag";
import { formatWeekLabel } from "../PregnancyRoadmap.utils";
import { WeekInfo } from "../../utils/common/pregnancyRoadmap";

type WeekNodeData = {
  week: WeekInfo;
  isActive: boolean;
  onSelect: (week: WeekInfo) => void;
};

const Card = styled.button<{ $active: boolean }>`
  width: 220px;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: ${({ $active }) =>
    $active ? "rgba(79, 70, 229, 0.25)" : "#0b1220"};
  color: inherit;
  display: grid;
  gap: 8px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #6366f1;
    transform: translateY(-2px);
    box-shadow: 0 12px 26px rgba(15, 23, 42, 0.35);
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 15px;
  color: #f8fafc;
`;

const Summary = styled.p`
  margin: 0;
  color: #94a3b8;
  line-height: 1.4;
  font-size: 13px;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

function WeekNode({ data }: NodeProps<WeekNodeData>) {
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <Card
        type="button"
        $active={data.isActive}
        onClick={() => data.onSelect(data.week)}
      >
        <Title>{data.week.title}</Title>
        <TagRow>
          <Tag>{formatWeekLabel(data.week)}</Tag>
        </TagRow>
        <Summary>{data.week.summary}</Summary>
      </Card>
      <Handle type="source" position={Position.Right} />
    </>
  );
}

export default memo(WeekNode);
