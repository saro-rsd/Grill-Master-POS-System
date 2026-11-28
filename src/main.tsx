import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
     <CartProvider>
       <AuthProvider>
        <App />
      </AuthProvider>
     </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
