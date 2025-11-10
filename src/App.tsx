import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DeletarServico from "./components/servico/deletarservico/DeletarServico";
import FormServico from "./components/servico/formservico/FormServico";
import ListaServico from "./components/servico/listaservico/ListaServico";
import { AuthProvider } from "./contexts/AuthContext";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer/>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/' element={<Login />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cadastro' element={<Cadastro />} />
              <Route path='/servicos' element={<ListaServico />} />
              <Route path='/cadastrarservico' element={<FormServico />} />
              <Route path='/editarservico/:id' element={<FormServico />} />
              <Route path='/deletarservico/:id' element={<DeletarServico />} />
              <Route path='/categorias' element={<ListaCategoria />} />
              <Route path='/cadastrarcategoria' element={<FormCategoria />} />
              <Route path='/editarcategoria/:id' element={<FormCategoria />} />
              <Route
                path="/deletarcategoria/:id"
                element={<DeletarCategoria />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
