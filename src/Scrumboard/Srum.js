// import logo from './logo.svg';
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store";
import themeContext from "./context/ThemeContext";
import Navbar from '../Navbar/Navbar';
import { useState } from "react";
import { Link } from "react-router-dom"
export function Srum() {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <themeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
          <Provider store={store}>
            <div className="App">
              <Header />
              <Link className="mx-10 p-6 hover:underline text-xl duration-300 font-semibold" to="/repo">Repository section -></Link>
              <div className="bg-blue-200 p-4 text-center text-3xl">
                <p>Scrum board</p>
              </div>
              <div className="flex">
                <Sidebar />
                <Body />
              </div>
            </div>
          </Provider>
        </themeContext.Provider>
      </div>
    </>
  );
}
export default Srum
