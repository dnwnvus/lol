import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { search } from "atom";

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  height: 35px;
  margin: 5px;
`

const InputText = styled.input`
  display: flex;
  padding: .5rem;
  border: 1px solid #4171d6;
  border-radius: 8px;
  outline: none;
  position: absolute;
  right: 0;
`

const Search = () => {
  const setSearch = useSetRecoilState(search);

  const onChange = (e: any) => {
    setSearch(e.target.value);
  }

  return (
    <SearchContainer>
      <InputText 
        type="text"
        placeholder="챔피언 이름 검색"
        maxLength={10}
        onChange={onChange}
      />
    </SearchContainer>
  )
}

export default Search;