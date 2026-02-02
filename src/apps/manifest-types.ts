export type AppManifestItem = {
  slug: string;
  name: string;
  description: string;
  status: "live" | "beta" | "new";
  tags: string[];
};
