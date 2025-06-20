import { useForm } from "react-hook-form";
import { ISetModalPage } from "./LoginModal";
import styled from "styled-components";

const Form = styled.form`
  margin: 20px 0;
  padding: 0 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  div:last-child {
    margin-top: 24px;
  }
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  & > label {
    width: 100px;
    text-align: center;
    font-weight: 600;
  }
  & > input {
    padding: 0 8px 2px;
    width: 250px;
    border-bottom: 1px solid #ccc;
    font-size: 1rem;
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const LinkDiv = styled.div`
  margin: 0 auto;
  font-size: 1rem;
  color: #666;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
const ErrorMessage = styled.div`
  font-size: 0.9rem;
  margin-left: 80px;
  color: #dd2b2b;
`;
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

interface IData {
  email: string;
  password: string;
}

export default function LoginPage({ setModalPage }: ISetModalPage) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>();

  function success(data: IData) {
    console.log(data);
  }
  return (
    <>
      <Form onSubmit={handleSubmit(success)}>
        <InputContainer>
          <label htmlFor="id">Email : </label>
          <input
            {...register("email", {
              required: "email을 입력하세요",
              pattern: {
                value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                message: "올바른 email 형식이 아닙니다.",
              },
            })}
            type="email"
            placeholder="email을 입력하세요"
            id="id"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="pw">P/W : </label>
          <input
            {...register("password", {
              required: "password를 입력하세요",
              maxLength: { value: 16, message: "id는 16자 이하입니다." },
            })}
            type="password"
            placeholder="8자 ~ 16자"
            id="pw"
          />
        </InputContainer>
        {errors ? <ErrorMessage>{errors.email?.message || errors.password?.message}</ErrorMessage> : null}
        <Btns>
          <Btn type="submit">로그인 하기</Btn>
        </Btns>
      </Form>
      <Links>
        <LinkDiv
          onClick={() => {
            setModalPage(3);
          }}
        >
          회원가입
        </LinkDiv>
        <LinkDiv
          onClick={() => {
            setModalPage(1);
          }}
        >
          다른 방법으로 로그인 하기
        </LinkDiv>
      </Links>
    </>
  );
}
