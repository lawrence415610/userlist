import { useState } from "react";
import Card from "./components/UI/Card";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";

const DUMMY = [
  { name: "Max", age: 18 },
  { name: "Leo", age: 13 },
];

const App = () => {
  const [namelist, setNamelist] = useState(DUMMY);
  const addPeople = (people) => {
    setNamelist((prePeople) => {
      const updatedPeople = [...prePeople];
      updatedPeople.push(people);
      return updatedPeople;
    });
  };
  return (
    <Card>
      <UserInput onAddPeople={addPeople}></UserInput>
      <UserList people={namelist}></UserList>
    </Card>
  );
};

export default App;
