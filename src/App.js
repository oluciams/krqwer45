import React, { useState } from 'react';


const App = ()=>{

  const [inputName, setInputName] = useState('');
  const [tasks, setTasks] = useState([
      { id: 1, name: "Sacar la ropa", done: false },
      { id: 2, name: "Hacer la cama", done: true },
      { id: 3, name: "Leer un rato", done: false }
      ])
    
  const [error, setError] = useState(false);
    

      const handleinputName = (e)=>{
        const newName = e.target.value
        setInputName(newName)
        console.log(newName) 
      }

      const handleOnSubmit = (e)=>{
        e.preventDefault()
        if( inputName === ''){
          console.log('entre')
          setError(true)

        }else {
          let newTask= {}        
          newTask.id= tasks.length + 1        
          newTask.name=inputName      
          newTask.done=false
          setError(false)          
          setTasks([...tasks, newTask])
          setInputName('')              
        }
      }   
      // newTask: '' 
  
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {tasks.map((task, index) => <li className={task.done ? 'done' : ''} key={task.id}>{task.name}</li>)}
          </ul>
          <form onSubmit={handleOnSubmit}>
            <input className={error ? 'error' : ''} type="text" value={inputName} onChange={handleinputName} id="new-task" placeholder="Ingresa una tarea y oprime Enter"/>
          </form>
        </div>
      </div>
    )
  
}

export default App;

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       tasks: [
//         { id: 1, name: "Sacar la ropa", done: false },
//         { id: 2, name: "Hacer la cama", done: true },
//         { id: 3, name: "Leer un rato", done: false }
//       ],
//       newTask: ''
//     }
//   }
//   render() {
//     return (
//       <div className="wrapper">
//         <div className="list">
//           <h3>Por hacer:</h3>
//           <ul className="todo">
//             {this.state.tasks.map((task, index) => <li key={task.id}>{task.name}</li>)}
//           </ul>
//           <form>
//             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} />
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;
