import styled from "styled-components"
import Header from "../components/Header"
import Menu from "../components/Menu"

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  position: relative;
`
const Contents = styled.div`
  margin: 80px auto 0;
  height: 100%;
  width: 1200px;
`
const Content = styled.div``
function Home() {
  return (
    <>
      <Header />
      <Container>
        <Contents>
          <Menu />
          <Content />
        </Contents>
      </Container>
    </>
  )
}

export default Home