import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
