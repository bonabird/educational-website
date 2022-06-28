import "./App.css";
import Navbar from "./components/navbar/navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Exercises from "./pages/exercises";
import Exercise from "./pages/exercise";
import NotFoundPage from "./pages/404";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercises/:exerciseId" element={<Exercise />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
