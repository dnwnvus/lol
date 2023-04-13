import PositionList from "./positionList";
import { positionData } from "./data/position_data";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { selectedChampion, championStatus } from "atom";
import { championInfo } from "./data/champion_data";

const SelectContainer = styled.div`
  border: 1px solid #4171d6;
  border-radius: 8px;
  height: 500px;
  margin-bottom: 15px;
  background: #ffffff;
  padding: 3rem;
  display: grid;
  grid-template-columns: 300px 800px;
  position: relative;
  font-size: 18px;
`

const ChampionFigure = styled.figure`
  height: 200px;
  text-align: center;
`

const ChampionRole = styled.div`
  margin-top: 15px;
`

const MainPosition = styled.div`
  margin-bottom: 15px;
  color: green;
`

const SubPosition = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  padding-top: 15px;
  color: blue;
`

const PositionListContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 100px;
`

const ChampionStatusList = styled.ul`
  list-style: none;
  height: 50%; 
  width: 40%;
`

const ChampionStatus = styled.li`
  display: flex;
  align-items: center;
`

const ChampionSelect = () => {
  const [positions, setPositions] = useState(positionData);
  const select = useRecoilValue(selectedChampion);
  const status = useRecoilValue(championStatus)
  const info: any = championInfo.find(champ => champ.name === select?.name)

  const onToggle = (id: any) => {
    setPositions(positions.map((position: any) => 
    position.id === id ? {...positions, active: !position.active} : position))
  }
  
  return (
    <SelectContainer>
      {select ?
        <ChampionFigure>
          <Image 
            src={`/${select.image.full}`}
            alt={select.id}
            key={select.key}
            width={125}
            height={125}
          />
          <div>
            <h3>
              {select.name}
            </h3>
            <ChampionRole>
              {select.tags.map((tag, index) => {
                return (
                  <div key={index}>
                    {index === 0
                      ? <MainPosition>주 역할군</MainPosition>
                      : <SubPosition>부 역할군</SubPosition>
                    }
                    <Image 
                      src={`/${tag}.webp`}
                      alt={tag}
                      width={50}
                      height={50}
                    />
                    <div>
                      {tag}
                    </div>
                  </div>
                )
              })}
            </ChampionRole>
          </div>
          <PositionListContainer>
            <PositionList positionData={positions}/>
          </PositionListContainer>
        </ChampionFigure>
        :
        <div>챔피언이 선택되지 않았습니다.</div>
      }
      {select && 
        <ChampionStatusList>
          {status && status.map((stat, index) => {
            return (
              <ChampionStatus key={index}>
                <Image 
                  src={`/${stat[0]}.webp`}
                  alt={stat[1]}
                  width={30}
                  height={30}
                  style={{ marginRight: '5px' }}
                />
                {stat[1]}
                <Image 
                  src={`/graph_${info.status[stat[0]]}.webp`}
                  alt={info.status.attack}
                  width={130}
                  height={6}
                  style={{ margin: '5px' }}
                />
            </ChampionStatus>
            )
          })} 
        </ChampionStatusList>
      }
    </SelectContainer>
  )
}

export default ChampionSelect;