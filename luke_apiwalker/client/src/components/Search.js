import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = [{
	query:"",
	id:"",
}]

const Search = (props) => {
	const [values, setValues] = useState(initialState)
	const navigate = useNavigate()
	const handleChange = (e) => {
		setValues({...values, [e.target.name]: e.target.value})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (values.query && values.id){
			navigate(`/${values.query}/${values.id}`)
		}
		else {
			alert("Form has missing inputs")
		}
	}

	return (
		<>
			<div>Star Wars API</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="options">Search for: </label>
				<select name="query" id="query" value={values.query} onChange={handleChange}>
					<option hidden value="">-- Select --</option>
					<option value="people">People</option>
					<option value="planets">Planets</option>
				</select>
				<label htmlFor="id">ID: </label>
				<input typeof="text" name="id" id="id" value={values.id} onChange={handleChange}></input>
				<button onClick={handleSubmit}>Search:</button>
			</form>
			{/* <Outlet /> */}
		</>
	)
}

export default Search