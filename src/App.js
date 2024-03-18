import "./App.css";
import InputComponents from "./components/InputComponents";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-corkboard-medium min-h-screen">
      <div className=" mx-32">
        <Header />
        <InputComponents className="mt-10" />
      </div>
    </div>
  );
}

export default App;
