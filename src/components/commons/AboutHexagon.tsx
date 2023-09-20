import { Mindset } from '@/types';
import HexagonIcon from '@mui/icons-material/Hexagon';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface AboutHexagonProps {
    mindset : Mindset,
    Icon : OverridableComponent<SvgIconTypeMap> & { muiName: string }
}
export default function AboutHexagon({mindset,Icon}:AboutHexagonProps){

    return (
        <div className=" flex flex-col justify-center items-center">
            <div className="w-fit relative">
                <HexagonIcon className="text-9xl fill-purple-500 " />
                <Icon className="text-6xl fill-white absolute left-1/4 top-1/4" />
            </div>
            <p className="text-purple-500 text-lg font-bold text-center">{mindset.title}</p>
            <p className="text-slate-500 text-sm text-center">{mindset.summary}</p>
        </div>
    )
}
