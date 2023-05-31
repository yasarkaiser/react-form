import logo from "./logo.svg";
import "./App.css";
import NewForm from "./component/NewForm";

export default function App() {
  const kaydol = (data) => {
    console.log(data);
  };

  return <NewForm kaydol={kaydol}></NewForm>;
}
