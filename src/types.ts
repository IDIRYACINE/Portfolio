
export interface PortfolioProps{
    projects: Project[];
}


export type Project = {
    name: string;
    previewImage: string;
    previewDescription: string[];
    description: string[];
    tags: string[];
    images: string[];
    actions: {
      name: string;
      icon: string;
      link: string;
    }[];
  };
  