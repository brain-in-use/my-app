import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
<Navbar title="TextUtil" about="About"/>
<TextForm heading="Enter your text to analyse"/>
    </>
  );
}

export default App;
