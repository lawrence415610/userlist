import { useState } from "react";
import Card from "../UI/Card";
import style from "./UserInput.module.css";

const UserInput = (props) => {
  // Set Status
  const [username, setUsername] = useState("");
  const [userage, setUserage] = useState("");
  const [usernameValid, setusernameValid] = useState(true);
  const [userageValid, setuserageValid] = useState(true);

  // Handler
  const enterUsernameHandler = (event) => {
    setUsername(event.target.value);
    setusernameValid(true);
  };

  const enterUserageHandler = (event) => {
    setUserage(event.target.value);
    setuserageValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (username !== "" && userage !== "") {
      props.onAddPeople({ name: username, age: userage });
      setUsername("");
      setUserage("");
    }

    if (username === "") {
      setusernameValid(false);
    }

    if (userage === "") {
      setuserageValid(false);
    }
  };

  return (
    <Card>
      <form onSubmit={formSubmitHandler} className={style.formbase}>
        <div className={style["formbase__item"]}>
          <label
            className={
              usernameValid
                ? style["formbase__item-valid"]
                : style["formbase__item-invalid"]
            }
          >
            username:{" "}
          </label>
          <input
            onChange={enterUsernameHandler}
            type="text"
            placeholder="please input your name."
            value={username}
          ></input>
        </div>
        <div className={style["formbase__item"]}>
          <label
            className={
              userageValid
                ? style["formbase__item-valid"]
                : style["formbase__item-invalid"]
            }
          >
            age:{" "}
          </label>
          <input
            onChange={enterUserageHandler}
            type="number"
            placeholder="please input your age"
            value={userage}
          ></input>
        </div>
        <input className={style["formbase__btn"]} type="submit"></input>
      </form>
    </Card>
  );
};

export default UserInput;
