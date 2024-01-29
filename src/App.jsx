import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// routes
import Router from "./routes";
import { useState } from "react";

function App() {
    const [state, isState] = useState([]);
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Router state={state} />
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
