
import { Mindset } from "@/types";
import AboutHexagon from "./commons/AboutHexagon";
import LightbulbIcon from '@mui/icons-material/Lightbulb';

interface AboutProps {
    mindsets: Mindset[]
}
export default function About({mindsets}: AboutProps)  {
    return (
        <div id="About" className="w-screen h-full p-24 flex flex-col justify-center items-center">
            <p className="text-purple-800 text-3xl md:text-4xl mb-4 text-center">
                About me
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-full justify-start items-start">

                {
                    mindsets.map((mindset, index) => {
                        return (
                            <AboutHexagon mindset={mindset} Icon={LightbulbIcon} key={index}/>
                        )
                    })
                }

            </div>
        </div>
    )
}