import { useState, useCallback } from "react";
import ButtonCom from "./components/ButtonCom";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import Toggler from "./components/Toggler";
import Footer from "./components/Footer";

function App() {
  const [counter, setCounter] = useState(0);
  const [toggler, setToggler] = useState(false);

  //Counter Func
  const CounterChange = useCallback(() => {
    setCounter(counter + 1)
  },[counter])

  //Counter Func
  const ToggleChange = useCallback(() => {
    setToggler(!toggler);
  },[toggler])

  return (
    <>
      <h1 className="text_Heading">React Hooks and Context API</h1>
      <Header />
      <div className="container">
        <DisplayCounter counter={counter} />
        <br />
        <Toggler toggler={toggler} />
        <br />
        <ButtonCom title="Increment" click={CounterChange} />
        <ButtonCom title="change Toggler" click={ToggleChange} />
      </div>
      <Footer />
    </>
  );
}

export default App;
