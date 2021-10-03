import React, { useState } from "react";
import Hero from "../api/Hero"

const Search = ({getHeroes}) => {
	const [name, setName] = useState('')

	const getData = () => {
		Hero.getByName(name)
			.then((res) => { 
				if(res.results) {
					getHeroes(res.results )
				} else {
					getHeroes([] )
				}
			}
			).catch(e => {
				console.log(e);
			})
	}
				
	const handleChange = (e) => {
		setName(e.target.value)
	}

	const handleClick = (e) => {
		getData()
	}

	return (
		<div>
			<input placeholder="Search heroe" value={name} onChange={handleChange} />
		 	<button onClick={handleClick} type="button" class="btn btn-danger">
        Search
      </button>
		</div>
	)
}

export default Search
