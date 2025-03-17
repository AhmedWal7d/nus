import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import AuthContextProvider from './component/Login/AuthContext.tsx';
import { HashRouter } from 'react-router-dom';
import Authcontextprovider from './component/Login/AuthContexct.tsx';

createRoot(document.getElementById('root')!).render(
  <Authcontextprovider>
    <HashRouter>
      <App />
    </HashRouter>
  </Authcontextprovider>
);
