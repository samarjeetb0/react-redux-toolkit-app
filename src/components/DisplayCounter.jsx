import { useSelector } from "react-redux";

export const DisplayCounter = () => {
  const {counterVal} = useSelector(store => store.counter);
  return (
    <>
      <h3>Count: {counterVal} </h3>
    </>
  );
};
