import PositionList from "./positionList";
import { positionData } from "./data/position_data";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { selectedChampion, championStatus, championTags } from "atom";
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

const ChampionInfo = styled.ul`
  list-style: none;
  height: 50%; 
  width: 40%;
`

const ChampionStatus = styled.li`
  display: flex;
  align-items: center;
`

const ChampionSpells = styled.div`
  margin-top: 50px;
  height: 75px;
  display: flex;
`

const ChampionSelect = () => {
  const [positions, setPositions] = useState(positionData);
  const select = useRecoilValue(selectedChampion);
  const status = useRecoilValue(championStatus)
  const tags = useRecoilValue(championTags)
  const info: any = championInfo.find(champ => champ.name === select?.name)

  console.log(select?.spells)
  const onToggle = (id: any) => {
    setPositions(positions.map((position: any) => 
    position.id === id ? {...positions, active: !position.active} : position))
  }
  
  return (
    <SelectContainer>
      {select ?
        <ChampionFigure>
          <Image 
            src={`/championImages/${select.image.full}`}
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
                      src={`/tags/${tag}.webp`}
                      alt={tag}
                      width={50}
                      height={50}
                    />
                    {tags && tags.map((v: any) => {
                      return (
                        v.includes(tag) && <div key={v}>{v[1]}</div>
                      )
                    })}
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
        <ChampionInfo>
          {status && status.map((stat, index) => {
            return (
              <ChampionStatus key={index}>
                <Image 
                  src={`/status/${stat[0]}.webp`}
                  alt={stat[1]}
                  width={30}
                  height={30}
                  style={{ marginRight: '5px' }}
                />
                {stat[1]}
                <Image 
                  src={`/graph/graph_${info.status[stat[0]]}.webp`}
                  alt={info.status.attack}
                  width={130}
                  height={6}
                  style={{ margin: '5px' }}
                />
            </ChampionStatus>
            )
          })}
          <ChampionSpells>
            <Image 
              src={`/passive/${select.passive.image.full}`}
              alt={select.passive.name}
              width={50}
              height={50}
              style={{ marginRight: '20px' }}
            />
            {select.spells.map((spell: any) => {
              return (
                <div key={spell.id} style={{ 
                  width: '100%',
                  height: 'fit-content',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: '10px' }}>
                  <Image 
                    src={`/spells/${spell.image.full}`}
                    alt={spell.name}
                    width={50}
                    height={50}
                    key={spell.id}
                  />
                  <p style={{ margin: '0' }}>q</p>
                </div>
              )
            })}
          </ChampionSpells>
        </ChampionInfo>
      }
    </SelectContainer>
  )
}

export default ChampionSelect;