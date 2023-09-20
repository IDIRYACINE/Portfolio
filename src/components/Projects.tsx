import { Project } from "@/types";
import Image from 'next/image'
import { PrimaryButtonOutlined } from "./commons/Buttons";

export default function Projects({ projects }: { projects: Project[] }) {

    return (
        <div className="w-screen h-full bg-alternative p-24 ">
            <p className="text-white text-4xl mb-8">Projects</p>

            <div className="flex flex-col gap-8 h-screen overflow-y-scroll mb-8">
                {projects.map((project, index) => {
                    return <FeaturedProjectCard key={`project-${index}`} project={project} />
                })
                }
            </div>

            <PrimaryButtonOutlined>See all</PrimaryButtonOutlined>

        </div>
    )
}


function FeaturedProjectCard({ project }: { project: Project }) {
    return (
        <div className="relative w-96 h-96 md:w-full md:h-screen " >
            <Image className="object-cover" fill={true} src={project.previewImage} alt={project.name} />

            <div className="w-1/2 h-full flex justify-center items-center">
                <div className="card w-96 h-96 flex flex-col justify-evenly items-start p-8 shadow-lg bg-white relative z-10 ">
                    <p className="font-extrabold text-left text-black text-3xl">{project.name}</p>
                    <p className="text-left text-black text-xl">{project.previewDescription.join()}</p>
                    <PrimaryButtonOutlined>Action</PrimaryButtonOutlined>
                </div>
            </div>

        </div>
    )
}