import PositionList from "./positionList";
import { positionData } from "./data/position_data";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { selectedChampion, championStatus, championTags, spellCommand } from "atom";
import { championInfo } from "./data/champion_data";
import ChampionSpell from "./championSpell";

const SelectContainer = styled.div`
  border: 1px solid #4171d6;
  border-radius: 8px;
  height: 500px;
  margin-bottom: 15px;
  background: #ffffff;
  padding: 3rem;
  display: grid;
  grid-template-columns: 300px 600px 300px;
  position: relative;
  font-size: 18px;
`

const ChampionFigure = styled.figure`
  width: 100%;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 0px;
`

const ChampionName = styled.h3`
  margin: 10px;
`

const ChampionRole = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`

const TagList = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
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

const ChampionSpellList = styled.div`
  margin-top: 50px;
  height: 75px;
  display: flex;
`

const ChampionSelect = () => {
  const [positions, setPositions] = useState(positionData);
  const select = useRecoilValue(selectedChampion);
  const status = useRecoilValue(championStatus)
  const tags = useRecoilValue(championTags)
  const command = useRecoilValue(spellCommand)
  const info: any = championInfo.find(champ => champ.name === select?.name)
  const cc: any = []
  
  const onToggle = (id: any) => {
    setPositions(positions.map((position: any) => 
    position.id === id ? {...positions, active: !position.active} : position))
  }
  
  return (
    <SelectContainer>
      {select ?
        <ChampionFigure>
          <Image 
            src={`/loading/${select.id}_0.jpg`}
            alt={select.id}
            key={select.key}
            width={250}
            height={400}
          />
          <ChampionName>
            {select.name}
          </ChampionName>
          <ChampionRole>
            {select.tags.map((tag: string, index: number) => {
              return (
                <TagList key={index}>
                  <Image 
                    src={`/tags/${tag}.webp`}
                    alt={tag}
                    width={50}
                    height={50}
                  />
                  {tags && tags.map((v: any, index: number) => {
                    return (
                      <div key={index} style={{ color: `${v[2]}`}}>
                        {v.includes(tag) && v[1]}
                      </div>
                    )
                  })}
                </TagList>
              )
            })}
          </ChampionRole>
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
          <ChampionSpellList>
            <ChampionSpell 
              spell={select.passive} 
              command={'P'} 
              type={'passive'}
            />
            {select.spells.map((spell: any, index: number) => {
              return (
                <ChampionSpell 
                  key={spell.id} 
                  spell={spell} 
                  type={'spells'} 
                  command={command[index]}
                />
              )
            })}
          </ChampionSpellList>
          {/* <div>
            {info && info.spells.map((spell: any, index: number) => {
              cc.concat(spell)
              return (
                <span key={index}>
                  #{spell}
                </span>
              )
            })}
          </div> */}
        </ChampionInfo>
      }
    </SelectContainer>
  )
}

export default ChampionSelect;