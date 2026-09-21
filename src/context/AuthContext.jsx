import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const TEST_USER = {
  email: 'aluno@smarty.com',
  password: 'smarty123',
  name: 'Aluno FutureCall',
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('smarty-user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  function login(email, password) {
    const isValid = email === TEST_USER.email && password === TEST_USER.password;

    if (!isValid) {
      return false;
    }

    const authenticatedUser = { name: TEST_USER.name, email: TEST_USER.email };
    localStorage.setItem('smarty-user', JSON.stringify(authenticatedUser));
    setUser(authenticatedUser);
    return true;
  }

  function logout() {
    localStorage.removeItem('smarty-user');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
