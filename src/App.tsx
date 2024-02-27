import AddTaskForm from "./containers/AddTask/AddTask";
import TasksList from "./containers/ToDoList/TasksList";

const App = () => {

  return (
    <>
      <header>
        <h1>To-Do List</h1>
      </header>
      <main>
      <AddTaskForm />
      <TasksList />
      </main>
    </>
  )
};

export default App;