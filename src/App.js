import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CareerApplication from './Components/SideBarComponents/CareerApplication/CareerApllication';
import Employee from './Components/SideBarComponents/Employee/Employee';
import DashBoard from './Components/SideBarComponents/DashBoard/DashBoard';
import TopBarComponent from './Components/TopBarComponent/TopBarComponent';
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div style={{ width: "100%" }}>
        <TopBarComponent />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/CareerApplication" element={<CareerApplication />} />
          <Route path="/Employee" element={<Employee />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
