import { LinkOutlined } from "./commons/Buttons";

export default function Hero() {

    return (
        <div id="Home" className="w-screen h-screen flex flex-col justify-center items-center ">
            <div id="pt" className="canvas bg-alternative"></div>
            <div className="flex h-full flex-col justify-evenly">

                <div className="flex flex-col gap-4">
                    <div >
                        <p className="text-4xl md:text-5xl text-white inline">Hello I&apos;m </p>
                        <p className="text-4xl md:text-5xl text-purple-800 inline">Idir Yacine </p>
                    </div>

                    <div>
                        <p className="text-2xl md:text-3xl text-white block">I&apos;m an Archmage developer</p>
                        <p className="text-2xl md:text-3xl text-white block">Frontend Backend UI/UX </p>
                        <p className="text-2xl md:text-3xl text-white block"> Databases System Deisgn </p>
                    </div>

                    <div>

                        <p className="text-4xl md:text-5xl text-white inline">Nothing escapes my </p>
                        <p className="text-4xl md:text-5xl text-purple-500 inline">claws</p>
                    </div>

                </div>

                <LinkOutlined href="#About">My Work</LinkOutlined>
            </div>
        </div>
    )
}