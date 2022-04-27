import React from "react";
import RecipesModule from "./components/recipesModule.jsx";
import ShowDetails from "./components/showRecipe.jsx";
import Home from "./components/home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <RecipesModule>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/recipe/:id" element={<ShowDetails />} />
        </Routes>
      </BrowserRouter>
    </RecipesModule>
  );
}

export default App;
