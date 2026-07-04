export interface RoadmapTopic {
  id: string;
  title: string;
  enabled: boolean;
  slug?: string;
  group?: string;
}

export interface RoadmapPhase {
  id: string;
  title: string;
  description?: string;
  topics: RoadmapTopic[];
}
