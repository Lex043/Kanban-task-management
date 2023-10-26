import { SignIn, SignUp } from "./components/Auth";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
const App = () => {
    const [token, setToken] = useState(false);
    if (token) {
        sessionStorage.setItem("token", JSON.stringify(token));
    }
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            let data = JSON.parse(sessionStorage.getItem("token"));
            setToken(data);
        }
    }, []);
    return (
        <main className="flex flex-col min-h-screen h-full bg-[#2b2c37] font-Jakarta">
            <Routes>
                <Route path="/" element={<SignIn setToken={setToken} />} />
                <Route path="/sign-up" element={<SignUp />} />
                {token ? (
                    <Route
                        path="/home-page"
                        element={<HomePage token={token} />}
                    />
                ) : (
                    ""
                )}
            </Routes>
        </main>
    );
};

export default App;
