import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria";
import DeletarServico from "./components/servico/deletarservico/DeletarServico";
import FormServico from "./components/servico/formservico/FormServico";
import ListaServico from "./components/servico/listaservico/ListaServico";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Perfil from "./pages/Perfil";

export function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/' element={<Login />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cadastro' element={<Cadastro />} />
              <Route path='/servicos' element={<ListaServico />} />
              <Route path='/cadastrarservico' element={<FormServico />} />
              <Route path='/editarservico' element={<FormServico />} />
              <Route path='/deletarservico/:id' element={<DeletarServico />} />
              <Route path='/categorias' element={<ListaCategoria />} />
              <Route path='/cadastrarcategoria' element={<FormCategoria />} />
              <Route path='/editarcategoria' element={<FormCategoria />} />
              <Route
                path='/deletarcategoria/:id'
                element={<DeletarCategoria />}
              />
              <Route path="/sobre" element={<About />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;