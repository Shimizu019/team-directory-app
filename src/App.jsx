import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserDetails from "./pages/UserDetails";
import Users from "./pages/Users";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <div
        className={
          darkMode
            ? "dark flex min-h-screen flex-col bg-slate-950 text-slate-100"
            : "flex min-h-screen flex-col bg-slate-100 text-slate-900"
        }
      >
        <Navbar
          favoritesCount={favorites.length}
          darkMode={darkMode}
          onToggleDarkMode={toggleDarkMode}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/users"
              element={
                <Users
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

