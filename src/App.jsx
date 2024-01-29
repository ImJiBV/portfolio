import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// routes
import Router from "./routes";
import { useState } from "react";
import SnackbarProvider from "./components/snackbar";

function App() {
    const [state, isState] = useState([]);
    return (
        <HelmetProvider>
            <BrowserRouter>
                <SnackbarProvider>
                    <Router state={state} />
                </SnackbarProvider>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
