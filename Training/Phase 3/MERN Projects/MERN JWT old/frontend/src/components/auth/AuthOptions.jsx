import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from "../../context/userContext";

function AuthOptions () {
    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    const register = () => navigate.push("/register");
    const login = () => navigate.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
    };

    return (
        <nav className="auth-options">
            {userData.user ? (
                <button className="btn btn-primary mr-2" onClick={logout}>Logout</button>
            ) : (
                <>
                <button className="btn btn-primary mr-2" onClick={register}>Sign Up</button>
                <button className="btn btn-primary mr-2" onClick={login}>Login</button>
                </>
            )}
        </nav>
    )
}

export default AuthOptions;