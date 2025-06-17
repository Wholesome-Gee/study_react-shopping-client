import { useMatch } from "react-router-dom"
import styled from "styled-components"
import { FaGifts } from "react-icons/fa";
import { RiMegaphoneFill } from "react-icons/ri";
import { FaRegClipboard } from "react-icons/fa6";

const Container = styled.div`
  width: 210px;
  height: 100%;
  padding: 40px 36px 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #ddd;
`
const Top = styled.div``
const MenuBox = styled.div < { match: string } > `
  width: 170px;
  height: 50px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: ${props => props.match ? "#0961CE" : "#222"};
  background-color: ${props => props.match ? "#F2F8FF" : "#fff"};
  span {
    margin-left: 8px;
  }
`
const Bottom = styled.div``
const Banner = styled.div`
  width: 170px;
  height: 200px;
  border: 1px solid #888;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Menu() {
  const matchHome = useMatch('/')
  const matchNotice = useMatch('/notice')
  const matchBoard = useMatch('/board')
  if (matchHome) {

  }

  return (
    <Container>
      <Top>
        <MenuBox match={matchHome?.pathname || ''} ><FaGifts /><span>상품 보기</span></MenuBox>
        <MenuBox match={matchNotice?.pathname || ''} ><RiMegaphoneFill /><span>공지 사항</span></MenuBox>
        <MenuBox match={matchBoard?.pathname || ''} ><FaRegClipboard /><span>고객 게시판</span></MenuBox>
      </Top>
      <Bottom>
        <Banner>
          <p style={{ lineHeight: '40px' }}>배너 광고 문의</p>
          <p>010-1234-5678</p>
        </Banner>
      </Bottom>
    </Container>
  )
}

export default Menu
