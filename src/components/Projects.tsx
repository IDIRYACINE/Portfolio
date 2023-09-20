'use client'

import { Project } from "@/types";
import Image from 'next/image'
import { GithubLink, PrimaryButtonOutlined } from "./commons/Buttons";
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { useScrollProject } from "@/hooks/useScroll";
import { useRef } from 'react'
import { useInView } from "react-intersection-observer";

export default function Projects({ projects }: { projects: Project[] }) {
    const divRef = useRef<HTMLDivElement>(null) //useScrollProject()

    const scrollProject = (next: boolean) => {
        const htmlFontSize = getComputedStyle(document.documentElement).fontSize
        let scrollAmount = 24 * parseFloat(htmlFontSize)

        scrollAmount = next ? scrollAmount : -scrollAmount

        divRef.current?.scrollBy({
            top: scrollAmount,
        })
    }


    const nextProject = () => {
        scrollProject(true)
    }

    const previousProject = () => {
        scrollProject(false)
    }

    return (
        <div id="Projects" className="w-screen h-full bg-alternative p-24 ">
            <p className="text-white text-4xl mb-8">Projects</p>

            <div className="flex flex-col gap-8 mb-8" ref={divRef}>
                {projects.map((project, index) => {
                    return <FeaturedProjectCard key={`project-${index}`} project={project} previousProject={previousProject} nextProject={nextProject} />
                })
                }
            </div>

            <PrimaryButtonOutlined className="w-96">See all</PrimaryButtonOutlined>

        </div>
    )
}


interface FeatureProjectCardProps {
    project: Project
    nextProject: () => void
    previousProject: () => void
}
function FeaturedProjectCard({ project, nextProject, previousProject }: FeatureProjectCardProps) {


    return (
        <div className="relative flex flex-row w-full h-96 " >
            <Image className="object-cover backdrop-brightness-50 fade-in-and-move-up" fill={true} src={project.previewImage} alt={project.name} />

            <div className="w-1/2 h-full flex justify-center items-center fade-in-and-move-left ">
                <div className="card w-96 h-96 flex flex-col justify-evenly items-start p-8 shadow-lg bg-white relative z-10 ">
                    <p className="font-extrabold text-left text-black text-3xl">{project.name}</p>
                    <p className="text-left text-black text-xl">{project.previewDescription.join()}</p>
                    <GithubLink className="text-4xl" href="#" />
                </div>


            </div>
            {/* 
            <div className="w-1/2 h-full flex justify-evenly items-center">
                <button className="z-10" onClick={nextProject}>
                    <ArrowCircleDownOutlinedIcon className=" text-9xl fill-purple-500" />

                </button>
                <button className="z-10"  onClick={previousProject}>
                    <ArrowCircleUpOutlinedIcon className="text-9xl fill-purple-500" />

                </button>
            </div> */}

        </div>
    )
}