import React, { useState } from "react";

const UseState: React.FC = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  console.log("render!");
  return (
    <>
      <p>{count1}</p>
      <p>{count2}</p>
      <button onClick={() => setCount1((x) => x + 1)}>1、基本用法</button>
      <button
        onClick={() => {
          setCount1((x) => x + 1);
          setCount2((x) => x + 1);
        }}
      >
        2、多个setState执行几次
      </button>
    </>
  );
};

export default UseState;
