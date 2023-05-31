import FormComponent from "./form";
import { useDispatch, useSelector } from "react-redux";
import { addTask, setText } from "../store/actions";
import { selectText } from "../store/text";

// container component

function Form() {
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(setText(event.target.value));

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(text));
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
