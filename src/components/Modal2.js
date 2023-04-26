import React, { useRef } from "react";
import styled from "styled-components";

const Stlayout = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  background-color: rgba(221, 221, 221, 0.8);
`;

const Stmodal = styled.div`
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: white;
  width: 500px;
  height: 300px;
  position: absolute;
  top: 50%;
  opacity: 1;
  left: 50%;
  transform: translate(-50%, -50%);
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

const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  gap: 10px;
  margin-bottom: 10px;
`;

const Modal = ({ open, close, header }) => {
  const modalRef = useRef(); // Dom 요소 접근

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      // modalRef.current : 현재 참조하고 있는 Dom, modalRef.current.contains(e.target): 외부 클릭 true, 내부 클릭시 false
      close();
    }
  };

  return (
    <div onClick={handleOutsideClick}>
      {open ? (
        <Stlayout>
          <Stmodal ref={modalRef}>
            <header>{header}</header>
            <StHeader>
              <Stbtn
                background="rgb(214, 48, 49)"
                bordercolor="rgb(214, 48, 49)"
                width="100px"
                height="40px"
                className="close"
                onClick={close}
              >
                닫기
              </Stbtn>
            </StHeader>
          </Stmodal>
        </Stlayout>
      ) : null}
    </div>
  );
};

export default Modal;
