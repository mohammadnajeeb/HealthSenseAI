import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios';

export const server= "http://localhost:4000";

export const Context = createContext({isAuthenticated: false});

const AppWrapper = () => {
  const [isAuthenticated, setisAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true); // Set initial loading state to true
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setisAuthenticated(true);
        setLoading(false); // Set loading state to false after successfully fetching user data
      })
      .catch((error) => {
        setUser({});
        setisAuthenticated(false);
        setLoading(false); // Set loading state to false if there's an error
      });
  }, []);

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setisAuthenticated,
        loading,
        setLoading,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
