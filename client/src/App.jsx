import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';
import M from 'materialize-css';
import './css/App.css';
import NavbarContainer from './components/NavbarContainer';

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <NavbarContainer />
    </>
  );
}

export default App;
