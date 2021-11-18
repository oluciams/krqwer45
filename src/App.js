import React, { useState } from 'react';


const App = ()=>{

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
      { id: 1, name: "Sacar la ropa", done: false },
      { id: 2, name: "Hacer la cama", done: true },
      { id: 3, name: "Leer un rato", done: false }
      ])

      const handleTask = (e)=>{
        const newTask = e.target.value
        setTask(newTask) 
      }

      const handleOnSubmit = (e)=>{
        e.preventDefault()    
        setTasks([...tasks, task])
        setTask('')
      } 
  
      // newTask: '' 
  
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {tasks.map((task, index) => <li key={task.id}>{task.name}</li>)}
          </ul>
          <form onSubmit={handleOnSubmit}>
            <input type="text" value={task.name} onChange={handleTask} id="new-task" placeholder="Ingresa una tarea y oprime Enter"/>
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
