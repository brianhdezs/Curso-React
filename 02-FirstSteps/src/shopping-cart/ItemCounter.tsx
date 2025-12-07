import { useState } from "react";

interface Props {
  name: string;
  quantity: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  const handleSubtract = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <section style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <span>{name}</span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
