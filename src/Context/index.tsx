import React, { createContext, useContext, useEffect, ReactNode } from "react";
import axios from "axios";
import { useState } from "react";
import { APIGitHub, Followers, Repositories } from "../types/GitHubApiTypes";

//Define el tipo de errores
interface ErrorsType {
  getUserError: string | boolean;
  getRepositoriesError: string | boolean;
  getFollowersError: string | boolean;
  getDataError: string | boolean;
}

// Define el tipo para el contexto
type GitHubContextType = {
  value: string;
  userData: APIGitHub | null;
  repositories: Repositories | undefined;
  follows: Followers | undefined;
  loading: boolean;
  error: ErrorsType | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getData: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

// Crea el contexto con un valor inicial
const GitHubContext = createContext<GitHubContextType | undefined>(undefined);

// Proveedor del contexto
export const GitHubContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState<string>("JSV-Lozano");
  const [userData, setUserData] = useState<APIGitHub | null>(null);
  const [repositories, setRepositories] = useState<Repositories | undefined>();
  const [follows, setFollows] = useState<Followers | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorsType>({
    getDataError: false,
    getFollowersError: false,
    getRepositoriesError: false,
    getUserError: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const resetErrors = (): ErrorsType => ({
    getUserError: false,
    getRepositoriesError: false,
    getFollowersError: false,
    getDataError: false,
  });

  const getUserData = async (username: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      return response.data;
    } catch (error) {
      setError((prevError) => ({
        ...prevError,
        getUserError: true,
      }));
    }
  };

  const getUserRepositories = async (reposUrl: string) => {
    try {
      const response = await axios.get(reposUrl);
      return response.data;
    } catch (error) {
      setError((prevError) => ({
        ...prevError,
        getRepositoriesError: true,
      }));
    }
  };

  const getFollowers = async (followUrl: string) => {
    try {
      const response = await axios.get(followUrl);
      return response.data;
    } catch (error) {
      setError((prevError) => ({
        ...prevError,
        getFollowersError: true,
      }));
    }
  };

  const getData = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    if (value === "") {
      setValue("JSV-Lozano");
    }
    setLoading(true);
    setRepositories(undefined);
    setError(resetErrors());
    try {
      const userData = await getUserData(value);
      setUserData(userData);

      const repositoriesData = await getUserRepositories(userData.repos_url);
      setRepositories(repositoriesData);

      const followersData = await getFollowers(userData.followers_url);
      setFollows(followersData);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError((prevError) => ({
        ...prevError,
        getDataError: true,
      }));
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue: GitHubContextType = {
    value,
    userData,
    loading,
    setLoading,
    error,
    handleChange,
    repositories,
    getData,
    follows,
  };

  return (
    <GitHubContext.Provider value={contextValue}>
      {children}
    </GitHubContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
const useGitHubContext = () => {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error(
      "useGitHubContext debe ser utilizado dentro de GitHubContextProvider"
    );
  }
  return context;
};
// eslint-disable-next-line react-refresh/only-export-components
export { useGitHubContext };
