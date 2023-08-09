import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';
import M from 'materialize-css';
import './App.css';

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
