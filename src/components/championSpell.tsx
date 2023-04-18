import Image from "next/image";
import styled from "styled-components";

const CommandName = styled.p`
  margin: 0;
`

const ChampionSpell = ({ spell, command, type }: any) => {
  const SpellContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    margin-right: ${spell.image.group === 'passive' && '20px'}
  `
  return (
    <SpellContainer>
      <Image 
        src={`/${type}/${spell.image.full}`}
        alt={spell.name}
        width={50}
        height={50}
      />
      <CommandName>{command}</CommandName>
    </SpellContainer> 
  )
}

export default ChampionSpell