import { useForm } from "./use-form";

function Form({ onSubmit }) {
  const { text, handleChange, handleSubmit } = useForm(onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="What next?"
        autoFocus
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
