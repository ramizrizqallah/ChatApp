import { createContext, useContext } from 'react';

export const AuthContext = createContext();
// const userController = require('../Contollers/userContoller');

export function useAuth() {
    return useContext(AuthContext);
}