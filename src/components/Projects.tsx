'use client'

import { Project } from "@/types";
import Image from 'next/image'
import { GithubLink, PrimaryButtonOutlined } from "./commons/Buttons";
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { useScrollProject } from "@/hooks/useScroll";
import { useRef } from 'react'
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

export default function Projects({ projects }: { projects: Project[] }) {

    const divRef = useRef<HTMLDivElement>(null)

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
        <div id="Projects" className="w-screen h-full bg-alternative p-12 md:p-24 ">
            <p className="text-white text-3xl md:text-4xl mb-8">Projects</p>

            <div className="flex flex-col gap-8 mb-8" ref={divRef}>
                {projects.map((project, index) => {
                    return <FeaturedProjectCard key={`project-${index}`} project={project} previousProject={previousProject} nextProject={nextProject} />
                })
                }
            </div>

            <PrimaryButtonOutlined className="w-full md:w-96">See all</PrimaryButtonOutlined>

        </div>
    )
}


interface FeatureProjectCardProps {
    project: Project
    nextProject: () => void
    previousProject: () => void
}
function FeaturedProjectCard({ project, nextProject, previousProject }: FeatureProjectCardProps) {
    const { ref, inView, entry } = useInView()

    const imageClassName = clsx([
        "backdrop-brightness-50  ",
        inView ? "fade-in-and-move-up " : null
    ])

    const cardConatinterClassName = clsx([
        "w-full md:w-1/2 h-full z-10  flex justify-center items-center ",
        inView ? "fade-in-and-move-left " : null
    ])

    return (
        <div ref={ref} className="relative flex flex-row w-full h-96 " >
            <div className="">
                <Image className={imageClassName} fill={true} src={project.previewImage} alt={project.name} />
            </div>

            <div className={cardConatinterClassName}>
                <div className="card relative w-full h-full md:w-96 md:h-96 flex flex-col justify-evenly items-start p-8 shadow-lg bg-white/75 md:bg-white  ">
                    <p className="font-extrabold text-left text-black text-2xl md:text-3xl">{project.name}</p>
                    <p className="text-left text-black text-lg md:text-xl">{project.previewDescription.join()}</p>
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