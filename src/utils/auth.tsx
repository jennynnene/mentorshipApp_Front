// utils/auth.ts
export const getToken = (): string | null => {
  return localStorage.getItem("authToken");
};

export const getUser = (): { role: string; firstName: string } | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};

export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
};
