import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect} from 'react'

const People = () => {
    const [values, setValues] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => setValues(response.data))
        .catch((e) => navigate('/error'))
    }, [id, navigate])

    return !values ? (<p>Loading...</p>) : (
        <>
        <h1>Results: </h1>
        <h2>{values.name}</h2>
        <p>Height: {values.height}</p>
        <p>Mass: {values.mass}</p>
        <p>Hair color: {values.hair_color}</p>
        <p>Skin color: {values.skin_color}</p>
        </>
    )
}

export default People