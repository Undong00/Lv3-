import React from "react";
import { useState } from "react";
import styled from "styled-components";

const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
`;

const Stinput = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
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

function Input() {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");

  const handlenamechange = (e) => {
    setName(e.target.value); // 이름 받아오기
  };

  const handlePriceChange = (event) => {
    // 가격 받아오기
    const value = event.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 값은 모두 제거
    setPrice(value);
  };

  const formatPrice = (price) => {
    // 숫자를 넣었을 때, 3자리 수마다 콤마 ,가 찍히는 input
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // /로 시작하고 /로 끝나는 것이 특징이며, \B는 단어 경계가 아닌 곳을 나타냅니다. 즉, 숫자 사이의 위치를 나타냅니다. (?=로 시작하는 것은 전방 탐색(lookahead assertion)을 나타내며, \d{3}은 3개의 숫자를 나타냅니다. +는 하나 이상의 반복을 의미합니다. (?!는 후방 부정형 전방 탐색(negative lookahead)을 나타내며, \d는 숫자를 의미합니다. 따라서 (?!\d)는 숫자 다음에 나오는 것이 아닌 경우를 나타냅니다.
  };

  const handleSave = (name, price) => {
    // 버튼 누르면 { name: 입력 값, price: 입력 값 }

    alert(`{name: ${name} price: ${price}}`);
  };

  return (
    <div>
      <h1>Input</h1>
      <form>
        <StHeader>
          <div>
            <label>이름</label>
            <Stinput type="text" value={name} onChange={handlenamechange} />
          </div>
          <div>
            <label>가격</label>
            <Stinput
              type="text"
              value={formatPrice(price)}
              onChange={handlePriceChange}
            />
          </div>
          <div>
            <Stbtn
              background="rgb(85, 239, 196)"
              bordercolor="rgb(85, 239, 196)"
              width="100px"
              height="40px"
              onClick={() => handleSave(name, price)}
            >
              저장
            </Stbtn>
          </div>
        </StHeader>
      </form>
    </div>
  );
}

export default Input;
