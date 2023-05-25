import { useState } from "react";

export function useForm(onSubmit) {
  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText("");
  };

  return {
    text,
    handleChange,
    handleSubmit,
  };
}
