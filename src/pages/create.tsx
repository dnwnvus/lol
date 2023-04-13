import ChampionList from "@/components/championList";
import ChampionSelect from "@/components/championSelect";
import Search from "@/components/search";

const Create = () => {
  return (
  <div>
    <Search />
    <ChampionSelect/>
    <ChampionList />
  </div>
  )
}

export default Create;