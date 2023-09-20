import type {  GetStaticProps } from 'next'

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { Project } from '@/types';


async function getProjects(){
    const res = await fetch(`${process.env.HOST}/data/projects.json`)
    const json = await res.json() 
    const projects:Project[] =  json.projects

    return projects
}

export default async function Home() {

  const projects = await getProjects()


  return (

    <main className="flex flex-col items-center justify-center">
        <Hero />
        <About />
        <Projects projects={projects}/>
    </main>
  )
}

