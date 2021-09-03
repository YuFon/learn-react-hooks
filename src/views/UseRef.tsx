import React, { useEffect, useImperativeHandle, useRef, useState } from "react";

// 基本用法
const Input: React.FC<{
  onChange: (value: any) => void;
  initValue: any;
}> = (props) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.value = props.initValue;
  }, [props.initValue]);

  const onChange = (e: any) => {
    props.onChange(e.target.value);
  };

  return <input onChange={onChange} ref={ref} />;
};

// 传入ref
const Input1 = React.forwardRef(
  (
    props: { onChange: (value: any) => void; initValue: any },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    useEffect(() => {
      const current = (ref as React.RefObject<HTMLInputElement>).current;
      if (current) current.value = props.initValue;
    }, [props.initValue]);

    const onChange = (e: any) => {
      props.onChange(e.target.value);
    };

    return <input onChange={onChange} ref={ref} />;
  }
);

// useImperativeHandle 返回暴露的ref的具体类型
const Input2 = React.forwardRef(
  (
    props: { onChange: (value: any) => void; initValue: any },
    ref: React.ForwardedRef<{
      focus: () => void;
    }>
  ) => {
    const refInput = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      ref,
      () => ({
        focus: () => {
          refInput.current?.focus();
        },
      }),
      []
    );

    useEffect(() => {
      if (refInput.current) refInput.current.value = props.initValue;
    }, [props.initValue]);

    const onChange = (e: any) => {
      props.onChange(e.target.value);
    };

    return <input onChange={onChange} ref={refInput} />;
  }
);

// 用ref来缓存值
// const RefMemo: React.FC = () => {
//   const [count, setCount] = useState<number>(0);
//   const ref = useRef<number | null>(null);

//   return (
//     <>
//       <div>current: {count}</div>
//       <div>ref: {ref.current}</div>

//       <button
//         onClick={() => {
//           ref.current = count;
//           setCount((x) => x + 1);
//         }}
//       >
//         +1
//       </button>
//       <button
//         onClick={() => {
//           ref.current = count;
//           setCount((x) => x - 1);
//         }}
//       >
//         -1
//       </button>
//     </>
//   );
// };
const RefMemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<number>(0);

  return (
    <>
      <div>current: {count}</div>
      <div>ref: {ref.current}</div>

      <button
        onClick={() => {
          ref.current += 1;
          // setCount((x) => x + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          // ref.current = count;
          setCount((x) => x - 1);
        }}
      >
        -1
      </button>
    </>
  );
};

const UseRef: React.FC = () => {
  const myRef1 = useRef<HTMLInputElement>(null);
  const myRef2 = useRef<HTMLInputElement>(null);

  return (
    <>
      <Input initValue={123} onChange={(value: any) => console.log(value)} />
      <br />
      <Input1
        ref={myRef1}
        onChange={(value: any) => console.log(value)}
        initValue={234}
      />
      <br />
      <Input2
        ref={myRef2}
        onChange={(value: any) => console.log(value)}
        initValue={345}
      />
      <br />
      <button
        onClick={() => {
          myRef1.current?.focus();
        }}
      >
        聚焦1
      </button>
      <button
        onClick={() => {
          myRef2.current?.focus();
        }}
      >
        聚焦2
      </button>
      <RefMemo />
    </>
  );
};

export default UseRef;
