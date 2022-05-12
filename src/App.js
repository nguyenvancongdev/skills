import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Main from "./pages/main/Main";
import Admin from "./pages/admin/Admin";
function App() {
  return (
    <>
    jij
    <Routes>
            <Route path="/admin" element={<Admin/>} />
            <Route path="/main" element={<Main/>} />
            </Routes>
    </>
  );
}

export default App;
