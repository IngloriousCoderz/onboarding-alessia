import { useEffect } from "react";

import List from "./list";
import Form from "./form";
import { useDispatch } from "react-redux";
import { fetchTasks } from "./store/thunks";

function App({ name }) {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log("One second has passed.");
  //   }, 1000);

  //   return () => {
  //     clearInterval(id);
  //   };
  // }, []);

  useEffect(() => {
    dispatch(fetchTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>{name}'s Todo List</h1>
      <Form />
      <List />
    </>
  );
}

export default App;
