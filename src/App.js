import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import { createContext, useState } from "react";

export const ThemeContext = createContext("");

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/home" /> : <Navigate to="/auth" />}
          />
          <Route
            path="/home"
            element={
              user ? (
                <Home toggleTheme={toggleTheme} theme={theme} />
              ) : (
                <Navigate to="../auth" />
              )
            }
          />
          <Route
            path="/auth"
            element={user ? <Navigate to="/home" /> : <Auth />}
          />
          <Route
            path="/profile/:id"
            element={
              user ? (
                <Profile toggleTheme={toggleTheme} theme={theme} />
              ) : (
                <Navigate to="../auth" />
              )
            }
          />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
