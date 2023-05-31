import classNames from "classnames";

import classes from "./list.module.scss";

function List({ tasks, onSpanClick, onButtonClick }) {
  return (
    <ul>
      {tasks.map(({ id, text, completed }) => (
        <li key={id}>
          <span
            className={classNames({ [classes.completed]: completed })}
            onClick={() => onSpanClick(id)}
          >
            {text}
          </span>
          &nbsp;
          <button onClick={() => onButtonClick(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
