
interface ProjectLibrary {
    projects : Project[];
    featured : number[];
}


interface Project{
    name: string;
    previewImage: string;
    previewDescription: string;
    images: string[];
    description: string;
    tags: string[];
    actions : ProjectAction[];
}

interface ProjectAction{
    name: string;
    link: string;
}