import { useEffect, useState } from "react"

const UseRepositories = () => {
    
    const [loading, setLoading] = useState();

    const [repoData, setRepoData] = useState(null);

    const fetching = async () => {
        const response = await fetch("http://192.168.0.203:5000/api/repositories");
        const data = await response.json();

        setRepoData(data);
    }


  useEffect(() => {
    fetching();
  }, []);

  return {loading, repoData, refetch: fetching}
}

export default UseRepositories;