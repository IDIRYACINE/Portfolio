import type {  GetStaticProps } from 'next'

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { Project } from '@/types';
import Contacts from '@/components/Contacts';


async function getProjects(){
    const res = await fetch(`${process.env.HOST}/data/projects.json`)
    const json = await res.json() 
    const projects:Project[] =  json.projects

    return projects
}

async function getProfile(){
    const res = await fetch(`${process.env.HOST}/data/profile.json`)
    const json = await res.json() 
    const profile =  json.profile

    return profile
}

export default async function Home() {

  const projects = await getProjects()
  const profile = await getProfile()

  return (

    <main className="flex flex-col items-center justify-center">
        <Hero />
        <About />
        <Projects projects={projects}/>
        <Contacts profile={profile}/>
    </main>
  )
}

