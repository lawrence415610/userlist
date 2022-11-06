import style from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <li className={style.listitem}>
      {props.item.name} is {props.item.age} years ago.
    </li>
  );
};

export default ListItem;
