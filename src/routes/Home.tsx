import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";

// 🔻styled-components🔻
const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  position: relative;
`;
const Contents = styled.div`
  margin: 80px auto 0;
  height: 100%;
  width: 1200px;
  display: flex;
`;
const Content = styled.div`
  width: 100%;
`;

// 🔻Component🔻
export default function Home() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  // mount시
  useEffect(() => {
    axios
      .get("/session")
      .then((res) => {
        setLogin(res.data.loggedIn);
      })
      .catch((err) => console.log("Home.tsx에서 세션 오류 발생: ", err));
    navigate("/productList");
  }, []);
  return (
    <>
      <Header login={login} />
      <Container>
        <Contents>
          <Menu />
          <Content>
            <Outlet />
          </Content>
        </Contents>
      </Container>
    </>
  );
}
