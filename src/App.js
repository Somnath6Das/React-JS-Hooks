import style from './App.css';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';

function App() {
  return (
    <>
    <div className={style.text_head}>
    <h1>React Hooks and Context API</h1>
    <ClassComp/>
    <FuncComp/>
    </div>
    </>
  );
}


export default App;
