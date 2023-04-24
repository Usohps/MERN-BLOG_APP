import Home from "./pages/Home";
import PageHeader from "./components/PageHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBlog from "./pages/CreateBlog";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BlogInfo from "./pages/BlogInfo";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <div>
            <PageHeader />
            <Routes>
            <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="create" element={<CreateBlog />} />
              <Route path="/register" element={<Register/>}/>
              <Route path="login" element={<Login />} />
              <Route path="/book/:id" element={<BlogInfo/>} />
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
