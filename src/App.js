import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";
import CategoriesContext from "./context";
import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [ categories, setCategories ] = useState(null);
  const value = { categories, setCategories };
  return (
    <div>
      {" "}
      <CategoriesContext.Provider value={value}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ticket" element={<TicketPage />} />
            <Route
              path="/ticket/:id"
              element={<TicketPage editMode={true} />}
            />
          </Routes>
        </Router>{" "}
      </CategoriesContext.Provider>
    </div>
  );
}

export default App;
