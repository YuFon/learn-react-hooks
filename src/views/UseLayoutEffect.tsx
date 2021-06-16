import React, { useEffect, useLayoutEffect, useState } from "react";

const UseEffect: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect:${new Date().getTime()}`);
  }, [count]);
  useLayoutEffect(() => {
    console.log(`useLayoutEffect:${new Date().getTime()}`);
  }, [count]);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((x) => x + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <p>{count}</p>
    </>
  );
};

export default UseEffect;
