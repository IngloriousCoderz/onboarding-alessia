import { useState } from "react";

import FormComponent from "./form";

// container component

function Form({ onSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <FormComponent
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default Form;
