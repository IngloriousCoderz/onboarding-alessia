import List from "./list";
import Form from "./form";

function App({ name }) {
  return (
    <>
      <h1>{name}'s Todo List</h1>
      <Form />
      <List />
    </>
  );
}

export default App;
