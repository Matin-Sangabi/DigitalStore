import { createContext , useContext , useState , useEffect } from "react";

const AuthContext = createContext();
const AuthContextDispatcher= createContext();

const AUTH_KEY_NAME = 'Auth'

const AuthProvider = ({children}) => {
    const [Auth , setAuth] = useState(false);
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem(AUTH_KEY_NAME));
        setAuth(data);
    } , [])
    useEffect(()=>{
        localStorage.setItem(AUTH_KEY_NAME , JSON.stringify(Auth));
    } , [Auth])
    return ( 
        <AuthContext.Provider value={Auth}>
            <AuthContextDispatcher.Provider value={setAuth}>
                {children}
            </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
     );
}
 

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthAction = () => useContext(AuthContextDispatcher);