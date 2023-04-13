import styled from "styled-components";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { selectedChampion } from "atom/index";

const ChampionImage = styled.li`
  margin: 5px;
  list-style: none;
`

const ChampionName = styled.div`
  font-size: 12px;
`

type ChampionProps = {
  champion: any;
}

const Champion = ({ champion }: ChampionProps) => {
  const setSelect = useSetRecoilState(selectedChampion);

  const onClick = () => {
    setSelect(champion);
    window.scroll({ top: 0, behavior: 'smooth'})
  }

  return (
    <ChampionImage key={champion.id}>
      <Image
        src={`/${champion.image.full}`}
        alt={champion.id}
        key={champion.key}
        width={100}
        height={100}
        priority={true}
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      />
      <ChampionName key={champion.id}>
        {champion.name}
      </ChampionName>
    </ChampionImage>
  )
}

export default Champion;