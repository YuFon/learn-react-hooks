import React, { memo, useMemo, useState } from "react";

const Child1: React.FC<{ count1: number }> = ({ count1 }) => {
  console.log("render1");
  return <div>{count1}</div>;
};
const Child2: React.FC<{ count2: number }> = memo(({ count2 }) => {
  console.log("render2");
  return <div>{count2}</div>;
});

const UseMemo: React.FC = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const count2Memo = useMemo(() => count2, [count2]);
  return (
    <>
      <Child1 count1={count1} />
      <Child2 count2={count2Memo} />
      <button onClick={() => setCount1((x) => x + 1)}>count1+</button>
      <button onClick={() => setCount2((x) => x + 1)}>count2+</button>
    </>
  );
};

export default UseMemo;
