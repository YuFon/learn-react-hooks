import React, { useEffect, useState } from "react";

const UseEffect: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
    </>
  );
};

export default UseEffect;
