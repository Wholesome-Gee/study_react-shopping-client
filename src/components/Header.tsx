import { useRecoilValue } from "recoil"
import styled from "styled-components"
import { displayState, IDisplay } from "../atoms"
import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircle, IoMdClose } from "react-icons/io";
import { TbMessageCircleFilled } from "react-icons/tb";

const Container = styled.div<IDisplay>`
  width: 100%;
  height: ${props => props.display === 'mobile' ? '64px' : '80px'};
  border-bottom: ${props => props.display === 'desktop' ? '1px solid #ddd' : 'none'};
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: #fff;

`
const Inner = styled.div<IDisplay>`
  margin:0 auto;
  width: ${props => props.display === 'desktop' ? '1200px' : '100%'};
  height: ${props => props.display === 'mobile' ? '64px' : '80px'};
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const Logo = styled.div<{ img: string, display: string }>`
  width: 100px;
  height: 80px;
  background: url(${props => props.img}) no-repeat;
  background-size: contain;
  background-position: center center;
  cursor: pointer;
`
const Search = styled.form<IDisplay>`
  position: relative;
  input {
    padding: 0 40px;
    width: 420px;
    height: 48px;
    border-radius: 8px;
    background-color: #f0f0f0;
    &:focus {
      border: 0.5px solid black;
      background-color: #fff;
    }
  }
  div,button {
    // 돋보기, 닫기버튼
    width: 40px;
    height: 48px;
    font-size: 22px;
    color: #888;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    background-color: transparent;
  } 
  button {
    left: auto;
    right: 0;
  }
`
const Join = styled.button<IDisplay>`
  padding: 10px 0;
  width: 150px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #888;
  background-color: transparent;
  &:hover {
    background-color: #eee;
  }
`
const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  background-color: rgba(0,0,0,0.1);
`
const JoinModal = styled.div`
  width: 420px;
  height: 280px;
  border-radius: 16px;
  background-color: #fff;
`
const Top = styled.div`
  padding: 24px 24px 12px;
  height: 60px;
  font-size: 20px;
  color: #888;
  text-align: right;
`
const Bottom = styled.div`
  padding: 0px 24px 24px;
  height: 220px;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div:first-child {
    height: 30px;
  }
  div:nth-child(2) {
    line-height: 28px;
    font-weight: 600;
  }
`
const Text = styled.div``
const Btns = styled.div`
  div:first-child{
    width: 100%;
    height: 52px;
    border-radius: 8px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FADA0A;
    cursor: pointer;
  }
`
function Header() {
  const display = useRecoilValue(displayState)
  const [value, setValue] = useState('')
  const [joinModal, setJoinModal] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  function onChange(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value)
  }
  function onClickCloseBtn() {
    setValue('')
    if (ref.current) {
      ref.current.focus();
    }
  }
  function toggleJoinModal() {
    setJoinModal(prev => !prev)
  }

  return (
    <Container display={display}>
      <Inner display={display}>
        <Logo display={display} img={display === 'mobile' ? process.env.PUBLIC_URL + './images/logo/logo2.png' : process.env.PUBLIC_URL + './images/logo/logo1.png'} />
        <Search display={display} onSubmit={onSubmit}>
          <input type="text" name="검색어" value={value} onChange={onChange} ref={ref} />
          <div><CiSearch /></div>
          {value === '' ? null : <button onClick={onClickCloseBtn}><IoIosCloseCircle /></button>}
        </Search>
        <Join display={display} onClick={toggleJoinModal}>로그인 또는 가입하기</Join>
      </Inner>
      {
        joinModal ?
          <Overlay onClick={toggleJoinModal}>
            <JoinModal onClick={(e) => { e.stopPropagation() }}>
              <Top>
                <IoMdClose onClick={toggleJoinModal} />
              </Top>
              <Bottom>
                <Logo display={display} img={process.env.PUBLIC_URL + './images/logo/logo1.png'} />
                <Text>
                  <p>'딸깍' 한번으로 <br />
                    쇼핑을 더욱 쉽게, 빠르게</p>
                </Text>
                <Btns>
                  <div><TbMessageCircleFilled />카카오로 시작하기</div>
                </Btns>
              </Bottom>
            </JoinModal>
          </Overlay>
          : null
      }
    </Container>
  )
}

export default Header