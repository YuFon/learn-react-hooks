import React, { useEffect, useState } from "react";

const UseEffect: React.FC = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount((x) => x + 1), 1000);
    console.log(count)
    return () => {
      console.log("effect的清除阶段在每次进入effect时都会执行" + count);
      clearTimeout(timer);
    };
  }, [count]);

  // 在 setInterval 的回调中，count 的值不会发生变化。因为当 effect 执行时，我们会创建一个闭包，并将 count 的值被保存在该闭包当中，且初值为 0。
  useEffect(
    () => {
      const timer = setInterval(() => {
        setCount2(count2 + 1); // count2不变
      }, 1000);
      return () => clearInterval(timer);
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCount3((x) => x + 1); // 这个 effect 不依赖外部的 `count3` state
    }, 1000);
    return () => {
      console.log("effect的清除阶段在每次进入effect时都会执行count3");
      clearInterval(timer)};
  }, []);
  return (
    <>
      <p>{count}</p>
      <p>{count2}</p>
      <p>{count3}</p>
    </>
  );
};

export default UseEffect;
