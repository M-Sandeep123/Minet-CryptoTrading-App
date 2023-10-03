import { ReactNode, createContext, useContext, useState } from "react";

type UserProviderProps = {
  children: ReactNode;
};
export type UserType = {
  id: number;
  fullName: string;
  email: string;
  password: string;
  balance: number;
};
export const UserContext = createContext({
  userInfo: {} as UserType,
  updateUser: (userInfo: UserType) => {},
});
export function useUser() {
  return useContext(UserContext);
}
export function UserProvider({ children }: UserProviderProps) {
  const [userInfo, setUserInfo] = useState<UserType>({
    id: 0,
    fullName: "",
    email: "",
    password: "",
    balance: 0,
  });
  const updateUser = (newUser: UserType) => {
    setUserInfo(newUser);
  };

  return (
    <UserContext.Provider value={{ userInfo, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
