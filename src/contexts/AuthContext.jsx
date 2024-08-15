// AuthContext.js
import { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';

const AuthContext = createContext();

import PropTypes from 'prop-types';

export function AuthProvider({ children }) {
    // Rest of the code

    AuthProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };


    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const savedAuthState = localStorage.getItem('isAuthenticated');
        return savedAuthState ? JSON.parse(savedAuthState) : false;
    });

    useEffect(() => {
        // Guarda el estado de autenticación en local storage
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

