import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Btn from "./components/Btn";
import Input from "./components/Input";
import Select from "./components/Select";
import Modal from "./components/Modal";
import Modal2 from "./components/Modal2";

const Stlayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
`;

const Stbtn = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: 3px solid ${(props) => props.bordercolor};
  background-color: ${(props) => props.background};
  font-weight: 600;
  &:active {
    opacity: 0.5;
  }
`;

const Stseldiv = styled.div`
  display: flex;
  gap: 200px;
`;

function App() {
  const option = ["리액트", "자바", "스프링", "리액트 네이티브"];
  const option2 = ["리액트", "자바"];
  // 모달 1
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    // 모달 열기
    setModalOpen(true);
  };
  const closeModal = () => {
    // 모달 닫기
    setModalOpen(false);
  };

  const [modalon, setModalOn] = useState("on");

  const handleOnchange = () => {
    // on 늘리기
    console.log(modalon);
    setModalOn("on");
  };

  // 모달 2

  const [modalOpen2, setModalOpen2] = useState(false);

  const openModal2 = () => {
    // 모달2 열기
    setModalOpen2(true);
  };
  const closeModal2 = () => {
    // 모달2 닫기
    setModalOpen2(false);
  };

  return (
    <Stlayout>
      <Btn />
      <Input />

      <h1>Modal</h1>
      <StHeader>
        <Stbtn
          background="rgb(85, 239, 196)"
          bordercolor="rgb(85, 239, 196)"
          width="100px"
          height="40px"
          onClick={openModal}
        >
          open modal
        </Stbtn>

        <div>
          <Stbtn
            bordercolor="rgb(214, 48, 49)"
            background="white"
            width="200px"
            height="50px"
            onClick={openModal2}
          >
            open modal
          </Stbtn>
        </div>
      </StHeader>
      <h1>Select</h1>
      <Stseldiv>
        <Select option={option} />
        <Select option={option2} />
      </Stseldiv>
      <Modal
        open={modalOpen}
        close={closeModal}
        header="닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요"
        on={handleOnchange}
      ></Modal>
      <Modal2
        open={modalOpen2}
        close={closeModal2}
        header="닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요"
      ></Modal2>
    </Stlayout>
  );
}
export default App;
