import { useRouter } from "next/router";
import styled from "styled-components";

interface nav_item_type {
  name: string;
  path: string;
}

const nav_item: nav_item_type[] = [
  {
    name: 'main',
    path: '/'
  },
  {
    name: '조합 생성',
    path: '/create'
  }
]

const NavMenu = styled.nav`
  height: 35px;
  padding: 1rem;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: #5383e8;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #4171d6;
  color: #b3cdff;
  z-index: 9999;
`;

const NavUl = styled.ul`
  list-style: none;
`

const NavLi = styled.li`
  display: inline-block;
  margin-right: 30px;
  :hover {
    cursor: pointer;
  }
`

const Nav = (props: any) => {
  const router = useRouter();

  return (
    <NavMenu>
      <NavUl>
        {nav_item.map(item => {
          return (
            <NavLi
            className="nav-menu-item"
            key={item.name} 
            onClick={() => router.push(item.path)}
            >
              {item.name}
            </NavLi>
          )
        })}
      </NavUl>
    </NavMenu>
  )
}

export default Nav;