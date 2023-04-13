import { useState, useEffect } from "react";
import styled from "styled-components";
import Champion from "./champion";
import { data } from "./data/champion_data";
import { useRecoilState, useRecoilValue } from "recoil";
import { championDatas, search } from "atom";

const ChampionStyle = styled.ul`
  flex-wrap: wrap;
  display: flex;
  text-align: center;
  overflow-y: auto;
  height: 600px;
  &::-webkit-scrollbar {
    display: none;
  }
  border: 1px solid #4171d6;
  border-radius: 8px;
  background: #ffffff;
` 

const ChampionList = () => {
  const searchChampion = useRecoilValue(search);
  const [championData, setChampionData] = useRecoilState(championDatas);

  const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value)
      }, delay);

      return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue
  }

  const debounceSearch = useDebounce(searchChampion, 500)

  useEffect(() => {
    const filteredData = data.filter((champion: any) => 
      champion.name.replace(/(\s*)/g,"").includes(debounceSearch))
    return setChampionData(filteredData.length >= 1 ? filteredData : data)
  }, [debounceSearch, setChampionData])

  return (
    <ChampionStyle>
      {championData && championData.map((champion: any) => {
        return (
          <Champion champion={champion} key={champion.id}/>
        )
      })}
    </ChampionStyle>
  )
}

export default ChampionList;