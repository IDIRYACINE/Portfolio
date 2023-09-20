import { Project } from "@/types";
import Image from 'next/image'

export default function Projects({ projects }: { projects: Project[] }) {

    return (
        <div className="w-screen h-screen bg-alternative p-24 overflow-y-scroll">
            <p className="text-white text-4xl mb-2">Projects</p>

            <div className="flex flex-col gap-4">
                {projects.map((project, index) => {
                        return <FeaturedProjectCard key={`project-${index}`} project={project} />
                    })
                }
            </div>

        </div>
    )
}


function FeaturedProjectCard({ project }: { project: Project }) {
    return (
        <div className="relative w-96 h-96" >
            <Image className="object-cover" src={project.previewImage} alt={project.name} />
            <div className="card flex flex-col gap-1 bg-white">
                <p className="font-bold text-black text-2xl">{project.name}</p>
            </div>    
        </div>
    )
}