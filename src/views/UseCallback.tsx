import React, { useCallback, useState } from "react";

// const DOM3: React.FC = () => {};

const DOM1: React.FC<{ functionRef: (node: any) => void }> = ({
  functionRef,
}) => {
  const [show1, setShow1] = useState<boolean>(false);

  console.log("render1");
  return (
    <>
      {show1 && <h1 ref={functionRef}>DOM1</h1>}
      <button onClick={() => setShow1((flag) => !flag)}>显示DOM1</button>
    </>
  );
};

const DOM2: React.FC<{ callBackRef: (node: any) => void }> = ({
  callBackRef,
}) => {
  const [show2, setShow2] = useState<boolean>(false);

  console.log("render2");
  return (
    <>
      {show2 && <h1 ref={callBackRef}>DOM2</h1>}
      <button onClick={() => setShow2((flag) => !flag)}>显示DOM2</button>
    </>
  );
};

const UseCallback: React.FC = () => {
  const [height1, setHeight1] = useState<number>(null as unknown as number);
  const [height2, setHeight2] = useState<number>(null as unknown as number);

  const functionRef = (node: any) => {
    console.log("dom1 ref callback 调用了");
    if (node !== null) {
      setHeight1(node.getBoundingClientRect().height);
    } else setHeight1(0);
  };

  const callBackRef = useCallback((node) => {
    console.log("dom2 ref callback 调用了");
    if (node !== null) {
      setHeight2(node.getBoundingClientRect().height);
    } else setHeight2(0);
  }, []);

  return (
    <>
      <DOM1 functionRef={functionRef} />
      <DOM2 callBackRef={callBackRef} />
      <p>DOM1 现在 {height1} 高</p>
      <p>DOM2 现在 {height2} 高</p>
    </>
  );
};

export default UseCallback;
