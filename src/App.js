import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Show from "./Show";
import Create from "./Create";

function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <div className="content">
                  <Routes>
                      <Route exact path="/" element={<Home/>}/>
                      <Route exact path="/blogs/:id" element={<Show/>}/>
                      <Route exact path="/blogs/create" element={<Create/>}/>
                  </Routes>
              </div>
          </div>
      </Router>
  );
}

export default App;