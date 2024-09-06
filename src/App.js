import './App.css';
import ToDoCard from './pages/ToDoCard';

function App() {
  const cards = [
    {time: " 6 Sep 24", title:"Read all books", content:"trying to read all boks"},
    {time: " 6 Sep 24", title:"Read all books", content:"trying to read all boks"}
  ]
  return (
    <div className="App">
      {
        cards?.map((ele, i) =>{
          
          <ToDoCard/>
        })
      }
    </div>
  )
}

export default App;
