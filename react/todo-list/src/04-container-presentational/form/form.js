// presentational component

function Form({ text, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="What next?"
        autoFocus
        value={text}
        onChange={onChange}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
