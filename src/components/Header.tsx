import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { displayState, IDisplay } from "../atoms";
import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";

import LoginModal from "./LoginModal";

const Container = styled.div<IDisplay>`
  width: 100%;
  height: ${(props) => (props.display === "mobile" ? "64px" : "80px")};
  border-bottom: ${(props) => (props.display === "desktop" ? "1px solid #ddd" : "none")};
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: #fff;
`;
const Inner = styled.div<IDisplay>`
  margin: 0 auto;
  width: ${(props) => (props.display === "desktop" ? "1200px" : "100%")};
  height: ${(props) => (props.display === "mobile" ? "64px" : "80px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div<{ img: string; display: string }>`
  width: 100px;
  height: 80px;
  background: url(${(props) => props.img}) no-repeat;
  background-size: contain;
  background-position: center center;
  cursor: pointer;
`;
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
  div,
  button {
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
`;
const LoginBtn = styled.button<IDisplay>`
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
`;

function Header() {
  const display = useRecoilValue(displayState);
  const [value, setValue] = useState("");
  const [loginModal, setLoginModal] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  function onChange(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }
  function onClickCloseBtn() {
    setValue("");
    if (ref.current) {
      ref.current.focus();
    }
  }
  function toggleJoinModal() {
    setLoginModal((prev) => !prev);
  }

  return (
    <Container display={display}>
      <Inner display={display}>
        <Logo
          display={display}
          img={
            display === "mobile"
              ? process.env.PUBLIC_URL + "./images/logo/logo2.png"
              : process.env.PUBLIC_URL + "./images/logo/logo1.png"
          }
        />
        <Search display={display} onSubmit={onSubmit}>
          <input type="text" name="검색어" value={value} onChange={onChange} ref={ref} />
          <div>
            <CiSearch />
          </div>
          {value === "" ? null : (
            <button onClick={onClickCloseBtn}>
              <IoIosCloseCircle />
            </button>
          )}
        </Search>
        <LoginBtn display={display} onClick={toggleJoinModal}>
          로그인 또는 가입하기
        </LoginBtn>
      </Inner>
      {loginModal ? <LoginModal display={display} toggleJoinModal={toggleJoinModal} /> : null}
    </Container>
  );
}

export default Header;
