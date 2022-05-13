import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Login/Login';
import AppointmentPage from "./Pages/Appointment/AppointmentPage";
import SignUp from './Login/SignUp';
import RequireAuth from "./Login/RequireAuth";


function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <AppointmentPage />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
