import Home from "./pages/home/Home";
import Accomodation from "./pages/accomodation/Accomodation";
import About from "./pages/about/About";
import ErrorPage from "./pages/errorPage/ErrorPage";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
      <div>
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />

                  <Route path="/accomodation/:id" element={<Accomodation />} />

                  <Route path="/about" element={<About />} />

                  <Route path="*" element={<ErrorPage />} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
