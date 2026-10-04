export interface ProjectTab {
  id: string;
  label: string;
  content: string;
}

export interface ProjectContentItem {
  image: string;
  layout: "single" | "grid";
}

export interface Project {
  slug: string;
  title: string;
  subTitle: string;
  year: string;
  image: string;
  mobileImage?: string;
  category: string[];
  visibleInHome?: boolean;
  pos?: string;
  size?: string;
  tabs?: ProjectTab[];
  buttonText?: string;
  buttonUrl?: string;
  content?: ProjectContentItem[];
}
