
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
  

  export type  Profile = {
    name: string;
    email: string;
    secondaryEmail: string;
    phone: string;
    facebook: string;
    github: string;
    biography: string[];
  }


  export type Mindset = {
    title: string;
    summary: string;
  }