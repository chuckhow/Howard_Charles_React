import Inventory from "./components/Inventory";
function App() {
  const Item={
    Desc: "Lawn Mower",
    Age: "2 years",
    Room: "Garage",
    How_Acquired: "Purchase",
    Value: "$2000.00",
  }
  return (
      <div className="App">
        <Inventory Item={Item} />  
        </div>
  );
}
export default App