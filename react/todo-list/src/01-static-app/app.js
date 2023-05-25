// import { style } from "./style";
import classes from "./app.module.scss";

function App({ name }) {
  return (
    <>
      <h1>{name}'s Todo List</h1>
      <form>
        <input placeholder="What next?" autoFocus />
        <button>Add</button>
      </form>
      <ul>
        <li>
          <span
            //  style={style}
            className={classes.completed}
          >
            Learn React
          </span>
          &nbsp;
          <button>x</button>
        </li>
        <li>
          <span>Look for a job</span>&nbsp;<button>x</button>
        </li>
        <li>
          <span>Forget everything</span>&nbsp;<button>x</button>
        </li>
      </ul>
    </>
  );
}

export default App;
