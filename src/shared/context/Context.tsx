import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useState,
} from "react";
import { User, UserType } from "shared/types/schema";

const initialUserState: User = {
  avatar: "",
  createdAt: "",
  email: "",
  fullName: "",
  id: "",
  type: UserType.CANDIDATE,
  updatedAt: "",
};

export const Context = createContext<{
  Profile: {
    profile: User;
    setProfile: Dispatch<User>;
  };
  Users: {
    users: User[];
    setUsers: Dispatch<Array<User>>;
  };
  Filter: {
    filter: {};
    setFilter: Dispatch<{}>;
  };
  clearAll: () => void;
} | null>(null);

export const useDashContext = () => {
  const context = useContext(Context);

  if (context === null) {
    throw new Error("useContext must be used within a Provider");
  }

  return context;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [users, setUsers] = useState([initialUserState]);
  const [profile, setProfile] = useState(initialUserState);
  const [filter, setFilter] = useState({});

  const clearAll = () => {
    setProfile(initialUserState);
    setUsers([initialUserState]);
    setFilter({});
  };

  useEffect(() => {
    setProfile(initialUserState);
    setUsers([initialUserState]);
    setFilter({});
  }, []);

  return (
    <Context.Provider
      value={{
        Profile: {
          profile,
          setProfile,
        },
        Users: {
          users,
          setUsers,
        },
        Filter: {
          filter,
          setFilter,
        },
        clearAll,
      }}
    >
      {children}
    </Context.Provider>
  );
};
