
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { Project } from '@/types';
import Contacts from '@/components/Contacts';
import Experience from '@/components/Experience';


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

async function getAbout(){
    const res = await fetch(`${process.env.HOST}/data/about.json`,{ cache: 'no-store' })
    const json = await res.json() 

    return json
}

export default async function Home() {

  const projects = await getProjects()
  const profile = await getProfile()
  const about = await getAbout()

  return (

    <main className="flex flex-col items-center justify-center">
        <Hero />
        <About mindsets={about.mindsets}/>
        <Experience skills={about.skills}/>
        <Projects projects={projects}/>
        <Contacts profile={profile}/>
    </main>
  )
}

