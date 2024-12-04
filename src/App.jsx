import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

const App = () => {
    return (
        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
            <div className="relative z-0 bg-primary">
                <Navbar />
                <Routes>
                    <Route path="/" />
                    <Route path="/about"  />
                    <Route path="/contact"  />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
