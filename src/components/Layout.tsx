import styled from "styled-components";
import Nav from "./nav";

const Container = styled.main`
  display: grid;
  grid-template-rows: auto 100px auto;
  grid-template-columns: auto 1200px auto;
`

const Layout = ({ children }: any) => {
  return (
    <div style={{ background: '#5383e8' }}>
      <Container>
        <div>
          <Nav />
        </div>
        <div style={{ paddingTop: '70px'}}>
          {children}
        </div>
        <div>
          
        </div>
      </Container>
    </div>
  )
}

export default Layout;