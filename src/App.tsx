import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DeletarServico from "./components/servico/deletarservico/DeletarServico";
import FormServico from "./components/servico/formservico/FormServico";
import ListaServico from "./components/servico/listaservico/ListaServico";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/navbar/Navbar";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<ListaServico />} />
            <Route path='/cadastrarservico' element={<FormServico />} />
            <Route path='/editarservico' element={<FormServico />} />
            <Route path='/deletarservico/:id' element={<DeletarServico />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
