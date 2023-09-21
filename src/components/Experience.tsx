import { Skills } from "@/types";
import SkillHexagon from "./commons/SkillHexagon";
import DatabaseIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Code';
import { SvgIconTypeMap } from '@mui/material';
import FrameworkIcon from '@mui/icons-material/BusinessCenter';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface ExperienceProps {
    skills: Skills
}
export default function Experience({ skills }: ExperienceProps) {


    const languagesLayerProps = {
        title: "Languages",
        Icon: LanguageIcon,
        skills: skills.languages
    }

    const frameworksLayerProps = {
        title: "Frameworks",
        Icon: FrameworkIcon,
        skills: skills.frameworks
    }

    const databasesLayerProps = {
        title: "Databases",
        Icon: DatabaseIcon,
        skills: skills.databases
    }

    return (
        <div id="Experience" className="w-screen min-h-screen relative p-12 md:p-24 bg-alternative">
            <p className="text-purple-500 text-3xl md:text-4xl mb-8">Experience</p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-full" >
                <SkillLayer {...languagesLayerProps}/>
                <SkillLayer {...frameworksLayerProps}/>
                <SkillLayer {...databasesLayerProps}/>
            </div>
        </div>
    )

}

interface SkillLayersProps {
    title: string;
    Icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
    skills: string[];
}
function SkillLayer({ title, skills, Icon }: SkillLayersProps) {

    return (
        <div className="flex flex-col p-4 justify-start items-center ">
            <SkillHexagon title={title} Icon={Icon} className="mb-4"/>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 w-full">
                {
                    skills.map((skill, index) => {
                        return (
                            <p className="text-white text-base text-bold text-center bg-purple-500" key={index}>{skill}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}