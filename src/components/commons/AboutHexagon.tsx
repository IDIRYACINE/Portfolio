import HexagonIcon from '@mui/icons-material/Hexagon';

interface AboutHexagonProps {
    data : string
}
export default function AboutHexagon({data}:AboutHexagonProps){

    return (
        <div className=" flex flex-col justify-center items-center">
            <HexagonIcon className="text-9xl fill-purple-500" />
            <p className="text-black text-lg">{data}</p>
        </div>
    )
}
