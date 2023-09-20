import { Profile } from "@/types";
import { GithubLink, LinkOutlined } from "./commons/Buttons";

export default function Contacts({ profile }: { profile: Profile }) {

    return (
        <div id="Contacts" className="w-screen h-screen p-24 flex flex-col justify-evenly items-center">
            <div className="flex flex-col gap-4 w-full">
                <p className="text-4xl text-black font-bold">Get in touch</p>
                <p className="text-black text-3xl">
                    I&apos;m always on look for new and challenging opportunities, my inbox is always open. Whether
                    you have a question or just want to say hi.
                </p>
                <LinkOutlined href={`mailto:${profile.email}`} >
                    Contact Me
                </LinkOutlined>
            </div>

            <div className="flex flex-row gap-4">
                <GithubLink className="text-9xl" href={profile.github} />
            </div>
        </div>
    )
}
