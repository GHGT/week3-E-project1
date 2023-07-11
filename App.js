import './App.css';
import { useState } from "react"

function App() {
  const [입력값, 입력값변경] = useState("");
  const [잉, 잉변경] = useState([{ 할일: "리액트", 좋아요: 0 }, { 할일: "아침운동", 좋아요: 0 }]);

  return (
    <>
      <input
        className='입력'
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />

      <button onClick={() => {
        if (입력값 === "") {
          alert("입력");
        } else {
          const copy = [...잉, { 할일: 입력값, 좋아요: 0 }];
          잉변경(copy);
        }
      }}>
        추가
      </button>

      {잉.map((할일, 투두인덱스) => {
        return (
          <div key={투두인덱스}>
            <span>{할일.할일}</span>
            <button
              onClick={() => {
                const 새로잉 = 잉.filter((todo, index) => index !== 투두인덱스);
                잉변경(새로잉);
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                const copy = [...잉];
                copy[투두인덱스].좋아요++;
                잉변경(copy);
              }}
            >
              좋아요 ({할일.좋아요})
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
