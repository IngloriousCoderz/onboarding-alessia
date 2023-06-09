import FormComponent from "./form";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "./form.slice";
import { addTask } from "../store/thunks";
import { selectText } from "../store/selectors";

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
