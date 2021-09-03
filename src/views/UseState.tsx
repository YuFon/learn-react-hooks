import React, { useCallback, useMemo, useState } from "react";

// const UseState: React.FC = () => {
//   const [count1, setCount1] = useState<number>(0);
//   const [count2, setCount2] = useState<number>(0);

//   console.log("render!");
//   return (
//     <>
//       <p>{count1}</p>
//       <p>{count2}</p>
//       <button onClick={() => setCount1((x) => x + 1)}>1、自变量</button>
//       <button
//         onClick={() => {
//           setCount1((x) => x + 1);
//           setCount2((x) => x + 1);
//         }}
//       >
//         2、多个setState执行几次
//       </button>
//     </>
//   );
// };

// const UseState: React.FC = () => {
//   const [x, setX] = useState<number>(0);
//   const y = 2*x + 1;
//   return (
//     <>
//       <p>{x}</p>
//       <p>{y}</p>

//       <button onClick={() => setX((x) => x + 1)}>1、自变量</button>
//     </>
//   );
// }
// const UseState: React.FC = () => {
//   const [x, setX] = useState<number>(0);
//   const y = useMemo(() => (2*x + 1), [x])
//   const changeX = useCallback(() => setX(x + 1),[x])
//   return (
//     <>
//       <p>{x}</p>
//       <p>{y}</p>

//       <button onClick={changeX}>1、useState</button>
//     </>
//   );
// }
// const UseState: React.FC = () => {
//   const [x, setX] = useState<{a: number; b: number}>({a: 1, b: 2});

//   return (
//     <>
//       <p>{x.a}</p>
//       <p>{x.b}</p>

//       <button onClick={() => setX(x => ({ ...x, a: x.a + 1}))}>1、useState</button>
//       <button onClick={() => setX(x => {
//         x.a += 1
//         return x
//       }
//       )}>2、useState</button>

//     </>
//   );
// }
const Child: React.FC<{ data: number }> = ({ data }) => {
  return <i style={{ display: "block" }}>{data}</i>;
};
const UseState: React.FC = () => {
  const [x, setX] = useState<number>(0);
  const y = useMemo(() => 2 * x + 1, [x]);
  const changeX = useCallback(() => setX(x + 1), [x]);
  return (
    <>
      <Child data={x} />
      <Child data={y} />

      <button onClick={changeX}>1、useState</button>
    </>
  );
};
export default UseState;
