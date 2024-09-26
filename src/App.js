import { useState } from 'react';
import './App.css';
import ToDoCard from './pages/ToDoCard';
import GridBasic from './components/grid/gridBasic';
import GridMultiColumn from './components/grid/gridMultiColumn';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  return `${year}-${month}-${date}T${hours}:${minutes}`;
}

function App() {
  const [cuurentDate, setDate] = useState(getDate());
  console.log(cuurentDate,"cuurentDate");
  const cards = [
    {id:1, time: " 6 Sep 24", title:"Read all books", content:"Trying to read all boks"},
    {id:2, time: " 6 Sep 24", title:"Read all books", content:"Trying to read all boks"},
    {id:3, time: " 6 Sep 24", title:"Read all books", content:"Trying to read all boks"},
    {id:4, time: " 6 Sep 24", title:"Read all books", content:"Trying to read all boks"},
  ]
  
  return (
    <div className="App">
      {/* <input
  type="datetime-local"
  value={new Date()} />
             {cards.map( data =>
        <ToDoCard key={data.id} cards={data}/>
      )} */}

      {/* <GridBasic /> */}
      <GridMultiColumn />
    </div>
  )
}

export default App;
