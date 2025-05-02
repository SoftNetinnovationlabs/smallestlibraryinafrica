import { createContext, useContext, useReducer, useEffect } from 'react';

// Safely parse user from localStorage
let storedUser = null;
try {
  const rawUser = localStorage.getItem('user');
  if (rawUser && rawUser !== 'undefined') {
    storedUser = JSON.parse(rawUser);
  }
} catch (err) {
  console.warn('Error parsing stored user:', err);
  storedUser = null;
}

// Initial state
const initialState = {
  user: storedUser,
  token: localStorage.getItem('token') || null,
};

// Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload.user, token: action.payload.token };
    case 'LOGOUT':
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};

// Create Context
const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Sync localStorage
  useEffect(() => {
    if (state.user && state.token) {
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('token', state.token);
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }, [state]);

  const login = (data) => {
    dispatch({ type: 'LOGIN', payload: data });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth
export const useAuth = () => useContext(AuthContext);
