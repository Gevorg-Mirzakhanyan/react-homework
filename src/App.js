
import './App.css';
import Box from './component/Input/Box';
import Input1 from './component/Input/Input1';
import Input2 from './component/Input/Input2';
import Button from './component/Input/Button';
import Person from './component/Input/Person';
import Number from './component/Input/Number';
import Table from './component/Input/Table';
import Login from './component/Input/Login';

function App() {

  const peopleNames = ['Alice', 'Bob', 'Charlie', 'David'];
  const numMaxMin = [2, 15, 30, 25, 4, 3];
  const data = [
    {firstName: 'Lev', lastName: 'Atoyan', age: '31'},
    {firstName: 'Aram', lastName: 'Avagyan', age: '28'},
    {firstName: 'Harut', lastName: 'Sargsyan', age: '33'},
    {firstName: 'Hayk', lastName: 'Virabyan', age: '19'},
  ] 
  return (
    <div className="App">
        <Input1 />
        <Input2 />
        <Box />
        <Button />
        <Person names={peopleNames} />
        <Number numbers={numMaxMin} />
        <Table list={data} />
        <Login />
    </div>
  );
}

export default App;
