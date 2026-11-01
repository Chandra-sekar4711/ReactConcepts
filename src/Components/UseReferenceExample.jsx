import { useRef } from "react";

export default function UseReferenceExample() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = 100;      // ✅ mutate the DOM input
    console.log("Input value:", inputRef.current.value);  // logs 100
  };

  return (
    <>
      <input ref={inputRef} type="text" defaultValue="" />
      <button onClick={handleClick}>Set input to 100</button>
    </>
  );
}