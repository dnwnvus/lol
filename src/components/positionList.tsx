import styled from "styled-components";
import Position from "./position";

const PositionContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

type positionListProps = {
  positionData?: any;
  onToggle?: any;
} 

const PositionList = ({ positionData }: positionListProps) => {
  return (
    <PositionContainer>
      {positionData && positionData.map((position: any) => {
        return (
          <Position 
            position={position}
            key={position.id}
          />
        )
      })}
    </PositionContainer>
  )
}

export default PositionList;