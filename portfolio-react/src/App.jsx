import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Main/Main";
import Apresentação from "./pages/Sobre/Apresentacao";
import Projetos from "./pages/Projeto/Slides";
import Contato from "./pages/Formulario/Contato";
import Header from "./components/Header/Header";


function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/portfolio'element={<Inicio />} />
      <Route path='/' element={<Inicio />} />
      <Route path='/sobre' element={<Apresentação />} />
      <Route path='/projeto' element={<Projetos />} />
      <Route path='/contato' element={<Contato />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
