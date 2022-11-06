import Card from "../UI/Card";
import ListItem from "../UserList/ListItem";
const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.people.map(i => (
          <ListItem item={i} key={Math.random().toString()}></ListItem>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
