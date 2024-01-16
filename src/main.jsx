import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ThemContextProvider } from "./context/Context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemContextProvider>
      <App />
    </ThemContextProvider>
  </BrowserRouter>
);
