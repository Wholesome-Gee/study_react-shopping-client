import styled from "styled-components";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TbMessageCircleFilled } from "react-icons/tb";
import LoginPage from "./LoginPage";
import JoinPage from "./JoinPage";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.1);
`;
const LoginModalContainer = styled.div`
  width: 420px;
  min-height: 350px;
  border-radius: 16px;
  background-color: #fff;
`;
const Top = styled.div`
  padding: 24px 24px 12px;
  height: 60px;
  font-size: 20px;
  color: #888;
  text-align: right;
`;
const Bottom = styled.div`
  padding: 0px 24px 24px;
  height: auto;
  min-height: 330px;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div:first-child {
    // 딸깍Store로고 부분
    height: 40px;
  }
  & > div:nth-child(2) {
    // text부분
    line-height: 28px;
    font-weight: 600;
  }
`;
const Logo = styled.div<{ img: string; display: string }>`
  width: 100px;
  background: url(${(props) => props.img}) no-repeat;
  background-size: contain;
  background-position: center center;
  cursor: pointer;
`;
const Text = styled.div``;
const Btns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Btn = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0aaefa;
  cursor: pointer;
  &:nth-child(2) {
    background-color: #fada0a;
  }
`;

interface IProps {
  display: string;
  toggleLoginModal: () => void;
}

export interface ISetModalPage {
  setModalPage: (args: number) => void;
}

function LoginModal({ display, toggleLoginModal }: IProps) {
  const [modalPage, setModalPage] = useState(1);

  return (
    <Overlay onClick={toggleLoginModal}>
      <LoginModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Top>
          <IoMdClose onClick={toggleLoginModal} />
        </Top>
        <Bottom>
          <Logo display={display} img={process.env.PUBLIC_URL + "./images/logo/logo1.png"} />
          {modalPage === 1 ? (
            <FirstPage setModalPage={setModalPage} />
          ) : modalPage === 2 ? (
            <LoginPage setModalPage={setModalPage} toggleLoginModal={toggleLoginModal} />
          ) : modalPage === 3 ? (
            <JoinPage setModalPage={setModalPage} />
          ) : null}
        </Bottom>
      </LoginModalContainer>
    </Overlay>
  );
}

/*       로그인 방식 선택하는 페이지         */
function FirstPage({ setModalPage }: ISetModalPage) {
  return (
    <>
      <Text>
        <p>
          '딸깍' 한번으로 <br />
          쇼핑을 더욱 쉽게, 빠르게
        </p>
      </Text>
      <Btns>
        <Btn
          onClick={() => {
            setModalPage(2);
          }}
        >
          ID/PW로 시작하기
        </Btn>
        <Btn>
          <TbMessageCircleFilled />
          카카오로 시작하기
        </Btn>
      </Btns>
    </>
  );
}

export default LoginModal;
