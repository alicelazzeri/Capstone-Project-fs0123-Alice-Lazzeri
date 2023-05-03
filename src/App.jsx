import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import RabbitFooter from "./components/RabbitFooter";
import NotFound from "./components/NotFound";
import BookSearch from "./components/BookSearch";
import FavouritesBooks from "./components/FavouriteBooks";
import BooksCart from "./components/BooksCart";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<BookSearch />} />
          <Route path="/favourites" element={<FavouritesBooks />} />
          <Route path="/cart" element={<BooksCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <RabbitFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
