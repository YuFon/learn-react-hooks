import React, { useContext, useState } from "react";

const ctx = React.createContext<{
  value: number | undefined;
  onChange: (value: string) => void;
}>({
  value: 0,
  onChange: () => {},
});
const { Provider } = ctx;

const Child: React.FC = () => {
  const data = useContext(ctx);
  return <div>孙子从爷爷那拿的值{data.value}</div>;
};
const Child2: React.FC = () => {
  const data = useContext(ctx);
  return (
    <button
      onClick={() => {
        data.onChange(`孙子给爷爷${Math.random()}`);
      }}
    >
      传值给爷爷
    </button>
  );
};
const Parent: React.FC = () => {
  return (
    <>
      <Child />
      <Child2 />
    </>
  );
};
const GrandParent: React.FC = () => {
  const [context, setContext] = useState<number>();
  const [childData, setChildData] = useState<string>();
  const onChange = (value: string) => setChildData(value);
  return (
    <>
      <Provider value={{ value: context, onChange }}>
        <Parent />
      </Provider>
      <button
        onClick={() => {
          setContext(() => Math.random());
        }}
      >
        传值给孙子
      </button>
      <div>爷爷从孙子拿的值{childData}</div>
    </>
  );
};

export default GrandParent;
