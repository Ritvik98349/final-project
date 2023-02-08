import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homes.js";
import Blog from "./pages/Blog.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home/>}/>
                <Route path="/:id" element={<Blog />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);