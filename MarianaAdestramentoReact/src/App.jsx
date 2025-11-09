import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Adestramento from "./pages/Adestramento";
import Socializacao from "./pages/Socializacao";
import Consulta from "./pages/Consulta";
import Contato from "./pages/Contato";
import Valores from "./pages/Valores";

function App() {
  return (
    <div className="min-h-screen bg-primary-500 flex flex-col">
      <Navbar />
      <main className="flex-1 bg-primary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adestramento" element={<Adestramento />} />
          <Route path="/socializacao" element={<Socializacao />} />
          <Route path="/consulta" element={<Consulta />} />
          <Route path="/valores" element={<Valores />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
