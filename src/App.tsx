import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria";
import DeletarServico from "./components/servico/deletarservico/DeletarServico";
import FormServico from "./components/servico/formservico/FormServico";
import ListaServico from "./components/servico/listaservico/ListaServico";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import Cadastro from "./pages/Cadastro";

export function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh] py-8'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
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
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;