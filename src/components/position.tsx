import Image from "next/image";
import { positionDataType } from "./data/position_data";

type PositionPropsType = {
  position: positionDataType;
}

const Position = ({ position }: PositionPropsType) => {
  return (
    <Image
      src={`/positions/${position.src}`}
      alt={position.name}
      key={position.id}
      width={25}
      height={25}
      priority={true}
      style={{ cursor: 'pointer' }}
    />
  )
}

export default Position;