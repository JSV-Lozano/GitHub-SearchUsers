import axios from "axios";
import { useEffect, useState } from "react";
import { APIGitHub, Followers, Repositories } from "../../types/GitHubApiTypes";

function useGetData() {
  const [value, setValue] = useState<string>("midudev");
  const [userData, setUserData] = useState<APIGitHub | null>();
  const [repositories, setRepositories] = useState<Repositories | undefined>();
  const [follows, setFollows] = useState<Followers | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };

  const getUserData = async (username: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };

  const getUserRepositories = async (reposUrl: string) => {
    try {
      const response = await axios.get(reposUrl);
      return response.data;
    } catch (error) {
      console.error("Error fetching user repositories:", error);
      throw error;
    }
  };

  const getFollowers = async (followUrl: string) => {
    try{
      const response = await axios.get(followUrl);
      return response.data
    }
    catch(error){
      console.error("Error fetching user followers:", error);
      throw error;
    }
  }

  const getData = async () => {
    setLoading(true);
    setRepositories(undefined);
    setError(false);

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
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 


  return {
    userData,
    loading,
    setLoading,
    error,
    handleChange,
    repositories,
    getData,
    value,
    follows
  };
}

export { useGetData };
