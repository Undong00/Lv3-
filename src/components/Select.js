import React from "react";
import { useState } from "react";
import styled from "styled-components";
const StSelectBtn = styled.button`
  width: 140px;
  height: 35px;
  border-radius: 12px;
  border: none;
`;

function Select({ option }) {
  const [contextMenuOpen, setContextMenuOpen] = useState(false); // 기본 값 닫혀 있음

  const [selectedItem, setSelectedItem] = useState(option[0]);
  // 버튼 아이템 기본 값
  const openContextMenu = () => {
    if (contextMenuOpen) {
      setContextMenuOpen(false);
      // true => false
    } else {
      // false => true
      setContextMenuOpen(true);
    }
  };

  const selectMenu = (item) => {
    setSelectedItem(item);
    setContextMenuOpen(false);
  };

  return (
    <div>
      <div>
        <StSelectBtn onClick={openContextMenu}>{selectedItem}</StSelectBtn>
        {contextMenuOpen && (
          <div>
            {option.map((item) => (
              <div>
                <StSelectBtn onClick={() => selectMenu(item)}>
                  {item}
                </StSelectBtn>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Select;
