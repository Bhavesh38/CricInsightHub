import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar"
import { useNavigate } from "react-router-dom";
import CricHubNavbar from "./components/Navbar/CricHubNavbar";

const CricHubLayout = ({ children }) => {
  // console.log('object')
  const navigate = useNavigate();
  useEffect(() => {
    const checkTokenValidity = () => {
      const expiryTime = JSON.parse(localStorage.getItem('Batman'))?.expiry;
      const token = JSON.parse(localStorage.getItem('Batman'))?.token;
      console.log(expiryTime, Date.now())
      if (!token || !expiryTime || Date.now() > expiryTime) {
        // Redirect user to login page if token is expired or not present
        navigate('/login');
      }
    };

    // Check token validity every minute (adjust interval as needed)
    const interval = setInterval(checkTokenValidity, 60000);
    checkTokenValidity();

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CricHubNavbar />
      <div className='mt-[45px]'>
        {children}
      </div>
    </>
  )
}

export default CricHubLayout;
