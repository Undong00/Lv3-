# 💻 프로젝트 Description
### 프로젝트 명 : ModalBtn
> Button, Input, Modal, Select를 이용하여 기능을 구현한 프로젝트입니다.

---

## ✅ 배포

####  https://modal-btn-lv3.vercel.app/
----


## 📝 기능 

#### Btn
Btn 컴포넌트에서는 StHeader와 Stbtn을 사용하여 버튼 UI를 구성합니다. StHeader를 사용하여 버튼들을 각각 그룹화하고, Stbtn을 사용하여 버튼들을 구성합니다.

각 Stbtn 컴포넌트는 bordercolor, background, width, height 등의 속성을 props로 받습니다. 이를 사용하여 각 버튼의 스타일을 동적으로 조정할 수 있습니다. 예를 들어, 첫 번째 버튼은 background와 bordercolor를 다르게 설정하여 다른 버튼들과 구분됩니다.

버튼 클릭 시 onClick 이벤트 핸들러를 사용하여 alert()나 prompt()을 띄웁니다. 첫 번째 버튼은 alert()를 사용하여 경고 메시지를 띄우고, 두 번째 버튼은 prompt()를 사용하여 질문을 띄웁니다.

#### Input
이 컴포넌트는 세 가지 상태를 관리합니다. 첫 번째 상태는 name이라는 문자열 상태이며, 두 번째 상태는 price라는 숫자 상태입니다. 세 번째 상태는 formatPrice라는 함수입니다. 이 함수는 숫자를 입력 받아, 3자리마다 콤마(,)를 추가하는 역할을 합니다.

컴포넌트는 입력 폼과 버튼으로 구성됩니다. 입력 폼에는 이름과 가격을 입력할 수 있습니다. 이름은 Stinput 요소로 입력하며, 가격은 Stinput 요소에 formatPrice 함수를 적용하여 입력합니다. 저장 버튼을 클릭하면 handleSave 함수가 실행됩니다. 이 함수는 입력한 이름과 가격을 포함한 객체를 알림 창으로 출력합니다.

#### Modal

모달이 열릴 때 open prop이 true가 되며, header prop은 모달의 제목으로 보여지게 됩니다. close와 on 함수는 부모 컴포넌트에서 전달되는 콜백 함수입니다. close 함수는 모달을 닫기 위한 함수이고, on 함수는 모달에서 발생하는 이벤트에 대한 처리를 위한 함수입니다.

모달은 open props가 true일 때만 렌더링되며, 모달의 버튼들은 onClick prop으로 전달된 콜백 함수를 실행하도록 되어 있습니다. close 함수는 모달을 닫습니다. on 함수는 모달에서 발생하는 이벤트에 대한 처리를 담당합니다. 

#### Modal2

modal과 동일하나, 컴포넌트 내부에서는 useRef()를 사용하여 모달 창의 DOM 요소를 참조하고, 이를 클릭 이벤트 처리에 사용합니다. handleOutsideClick() 함수는 e 이벤트 객체를 인자로 받아서 모달 창 외부를 클릭할 때, 모달 창이 닫히도록 close() 함수를 호출합니다. 이 때 modalRef.current.contains(e.target)를 사용하여, 클릭 이벤트가 모달 창 내부에서 발생한 것인지 외부에서 발생한 것인지 구분합니다.

#### Select

컴포넌트는 option이라는 속성을 입력으로 받습니다. 이 속성은 드롭다운 메뉴에 표시될 항목들을 배열로 포함합니다.

컴포넌트는 contextMenuOpen이라는 state 변수를 가지며, 이 값은 드롭다운 메뉴가 열려있는지 여부를 나타냅니다. contextMenuOpen의 기본값은 false입니다.

컴포넌트는 selectedItem이라는 state 변수를 가지며, 이 값은 현재 선택된 항목을 나타냅니다. selectedItem의 기본값은 option 배열의 첫 번째 항목입니다.

openContextMenu 함수는 드롭다운 메뉴를 열거나 닫습니다. 이 함수는 contextMenuOpen state 변수를 변경하여 열림/닫힘 상태를 변경합니다.

selectMenu 함수는 사용자가 메뉴에서 항목을 선택할 때 호출됩니다. 이 함수는 selectedItem state 변수를 선택한 항목으로 변경하고, contextMenuOpen state 변수를 닫힘으로 변경합니다.

컴포넌트는 StSelectBtn 스타일 컴포넌트를 사용하여 드롭다운 버튼과 메뉴 항목을 표시합니다. openContextMenu 함수가 드롭다운 버튼 클릭 시 호출되며, contextMenuOpen이 true이면 option 배열에서 항목을 렌더링합니다. 선택된 항목은 selectedItem에 의해 표시됩니다.

---

## ✍️ 업데이트 내역

------


## 🔡 개발 환경 및 설치 방법


**Mac**

```sh
$ npm install -g yarn
yarn create-react-app my-app
cd my-app
yarn start
```

**Window**

```sh
$ npm install -g yarn
yarn create-react-app my-app
cd my-app
yarn start
```
----
