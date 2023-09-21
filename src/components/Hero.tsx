import { LinkOutlined } from "./commons/Buttons";

export default function Hero() {

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-alternative">
            <div id="pt" className="canvas"></div>
            <div className="flex h-full flex-col justify-evenly">
                <div>
                    <p className="text-4xl md:text-5xl text-white inline">Hello I&apos;m </p>
                    <p className="text-4xl md:text-5xl text-purple-800 inline">Idir Yacine </p>
                    <p className="text-3xl md:text-4xl text-white block">I&apos;m a fullstack developer</p>

                </div>

                <div>
                    <p className="text-3xl md:text-4xl text-white block">Android Iot Web Desktop</p>
                    <p className="text-4xl md:text-5xl text-white inline">Nothing escapes my </p>
                    <p className="text-4xl md:text-5xl text-purple-500 inline">claws</p>
                </div>

                <LinkOutlined href="#About">My Work</LinkOutlined>
            </div>
        </div>
    )
}