import React, {useEffect, useState} from "react";
import { useHistory } from "react-router";
import GetHeroes from "../api/GetHeroes"
 


const Home = () => {

  const [data, setData] = useState([])

  const [id, setId] = useState(2)


  useEffect(() => {
    GetHeroes(id).then((res) => setData(res))
    
  }, [])

  console.log(data)

  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("tokenUser");
    history.push("/login");
  };
  return (
    <div>
      <h1>Home component</h1>
      <button onClick={handleLogout} type="button" class="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default Home;
