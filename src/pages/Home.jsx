import React, { useEffect, useState} from "react";
import { useHistory, Link } from "react-router-dom";
import Hero from "../api/Hero"
import SearchHero from '../components/Search'


const Home = () => {
  const [heroes, setHeroes] = useState([])

  console.log({heroes});
  // useEffect(() => {  
  //   Hero.getByName('batman').then((res) => { 
  //     console.log({res});
  //     setData(res)}
  //      ).catch(e => {
  //     console.log(e);
  //   } )
  // }, [])
  //sin [] se ejecuta en cada render
  //con [] se ejecuta solo una vez cuando se monta el componente
  

  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("tokenUser");
    history.push("/login");
  };

  const getHeroes = (heores) => {
    setHeroes(heores)
  }

  const renderHeroes = () => {
    return heroes.map(({name,image,  }, i) => {
      return <div className="card">
        <img src={image.url} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          {/* <p className="card-text">{}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    })
  }

  return (
    <div>
      <h1>Home</h1>
      <SearchHero getHeroes={getHeroes} />
      <button onClick={handleLogout} type="button" className="btn btn-danger">
        Logout
      </button>
      {heroes?.length > 0 && renderHeroes()}
    </div>
  );
};

export default Home;
