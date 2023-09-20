import { Profile } from "@/types";
import { LinkOutlined } from "./Buttons";


export default function Contacts({profile}:{profile:Profile}) {

    return (
        <div className="w-screen h-screen p-24 flex flex-col gap-4">
            <p className="text-4xl text-black font-bold">Get in touch</p>
            <p className="text-black text-3xl">
                I&apos;m always on look for new and challenging opportunities, my inbox is always open. Whether
                you have a question or just want to say hi.
            </p>
            <LinkOutlined href={`mailto:${profile.email}`} >
                Contact Me
            </LinkOutlined>
        </div>
    )
}