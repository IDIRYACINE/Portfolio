import HexagonIcon from '@mui/icons-material/Hexagon';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import clsx from 'clsx';

interface SkillHexagonProps {
    title : string,
    Icon : OverridableComponent<SvgIconTypeMap> & { muiName: string };
    className?: string
}
export default function SkillHexagon({title,Icon,className}:SkillHexagonProps){
    const compClassName = clsx([
        "flex flex-col justify-center items-center",
        className
    ])

    return (
        <div className={compClassName}>
            <div className="w-fit relative">
                <HexagonIcon className="text-9xl fill-purple-500 " />
                <Icon className="text-6xl fill-white absolute left-1/4 top-1/4" />
            </div>
            <p className="text-purple-500 text-lg font-bold text-center">{title}</p>
        </div>
    )
}


