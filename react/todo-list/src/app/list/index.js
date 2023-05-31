import ListComponent from "./list";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, toggleCompleted } from "./list.slice";
import { selectTasks } from "../store/tasks";

function List() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleSpanClick = (id) => dispatch(toggleCompleted(id));

  const handleButtonClick = (id) => dispatch(removeTask(id));

  return (
    <ListComponent
      tasks={tasks}
      onSpanClick={handleSpanClick}
      onButtonClick={handleButtonClick}
    />
  );
}

export default List;
