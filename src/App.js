import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CareerApplication from './Components/SideBarComponents/CareerApplication/CareerApllication';
import Employee from './Components/SideBarComponents/Employee/Employee';
import DashBoard from './Components/SideBarComponents/DashBoard/DashBoard';
import TopBarComponent from './Components/TopBarComponent/TopBarComponent';
import { useNavigate } from 'react-router-dom';
import {notification} from 'antd'
import { Button } from 'antd';
function App() {
  const signIn = async ()=>{
    try {
      const response = await fetch(`http://localhost:4040/api/users/signinV2`, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              user: { email: "vanshitsa@prepseed.com", password: "a1b1#c1d1@" }
          }),
          credentials: 'include',
      });

      const responseJson = await response.json();
    
      if (!response.ok) {
        // If response status is not 200, show an error notification
        notification.error({
          message: 'Sign In Failed',
          description: 'You are not allowed to sign in here'
        });
        return;
      }
      const token = responseJson.token;
      localStorage.setItem('token',token);
      return responseJson;

  } catch (error) {
      throw new Error(error.message);
  }

  }
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
      <Button onClick={signIn}>Sign in</Button>
    
    </BrowserRouter>
  );
}

export default App;
