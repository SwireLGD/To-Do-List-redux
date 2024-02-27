import AddTaskForm from "./containers/AddTask/AddTask";
import TasksList from "./containers/ToDoList/TasksList";

const App = () => {

  return (
    <>
      <header className="container-fluid bg-primary text-light">
        <h1>To-Do List</h1>
      </header>
      <main className="container-fluid">
      <AddTaskForm />
      <TasksList />
      </main>
    </>
  )
};

export default App; 