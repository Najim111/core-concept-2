
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handelClick(){
    alert("click on")
  }
// arrow function
const handelClick2 = ()=>{
  alert('arrow function 3')
}
const addFive = (num)=>{
  alert(num + 5)
}
  

  return (
    <>
     
       
     <h1>Explor React Core Consept Part2</h1>
     <Friends></Friends>
     <Users></Users>
     <Team></Team>
     <Counter></Counter>
      <button onClick={handelClick}>click me</button>
      <button onClick={()=>{alert('click me arrow')}}>click me 2</button>
      <button onClick={handelClick2}>click me 3</button>
      {/* vajaila */}
      <button onClick={() =>addFive(5)}>click me 4</button>
      
     
    </>
  )
}

export default App
