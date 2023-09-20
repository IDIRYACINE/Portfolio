import AboutHexagon from "./commons/AboutHexagon";


export default function Experience() {
    const data = 'sge hello grroswwe'
    return (
        <div id="About" className="w-screen h-screen p-24 flex flex-col justify-start items-center">
            <p className="text-purple-800 text-4xl mb-4">
                About me
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-full">
                <AboutHexagon data={data}/>
                <AboutHexagon data={data}/>
                <AboutHexagon data={data}/>
                <AboutHexagon data={data}/>
                <AboutHexagon data={data}/>

            </div>
        </div>
    )
}