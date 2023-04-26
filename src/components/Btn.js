import React from "react";
import styled from "styled-components";

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

function Btn() {
  return (
    <div>
      <h1>Button</h1>
      <StHeader>
        <Stbtn
          bordercolor="rgb(85, 239, 196)"
          background="white"
          width="200px"
          height="50px"
          onClick={() => {
            alert("버튼을 만들어보세요");
          }}
        >
          Large Primary Button 〉
        </Stbtn>
        <Stbtn
          background="rgb(85, 239, 196)"
          bordercolor="rgb(85, 239, 196)"
          width="130px"
          height="45px"
        >
          Medium
        </Stbtn>
        <Stbtn
          background="rgb(85, 239, 196)"
          bordercolor="rgb(85, 239, 196)"
          width="100px"
          height="40px"
        >
          small
        </Stbtn>
      </StHeader>
      <StHeader>
        <Stbtn
          bordercolor="rgb(214, 48, 49)"
          background="white"
          width="200px"
          height="50px"
          onClick={() => {
            prompt("어렵나요?");
          }}
        >
          Large Primary Button 🔔
        </Stbtn>
        <Stbtn
          bordercolor="rgb(214, 48, 49)"
          background="rgb(214, 48, 49)"
          width="130px"
          height="45px"
        >
          Medium
        </Stbtn>
        <Stbtn
          bordercolor="rgb(214, 48, 49)"
          background="rgb(214, 48, 49)"
          width="100px"
          height="40px"
        >
          small
        </Stbtn>
      </StHeader>
    </div>
  );
}

export default Btn;
