import Navbar from "./pages/Navbar";
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
          <div className='content'>
            <Routes>
              <Route path="/" Component={Home} exact />
              <Route path="/create" Component={CreateBlog} exact />
              <Route path="/blogs/:id" Component={BlogDetails} exact />
              <Route path="*" Component={NotFound} exact />
            </Routes>            
          </div>
        </div>
    </Router>
  );
}

export default App;
