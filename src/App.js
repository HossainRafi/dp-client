import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Login/Login';
import AppointmentPage from "./Pages/Appointment/AppointmentPage";


function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<AppointmentPage/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
