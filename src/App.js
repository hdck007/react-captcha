import "./App.css";
import DarkModeToggle from "./components/darkmodebtn";
import FormComponent from "./components/formcomponent";

function App() {
  return (
    <div className="App relative h-screen dark:bg-slate-900 bg-slate-50">
      <DarkModeToggle />
      <div className="w-screen h-4/5 flex items-center justify-center">
        <FormComponent />
      </div>
    </div>
  );
}

export default App;
