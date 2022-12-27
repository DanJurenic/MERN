import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect} from 'react'

const Planets = () => {
    const [values, setValues] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response => setValues(response.data))
        .catch((e) => navigate('/error'))
    }, [id, navigate])

    return !values ? (<p>Loading...</p>) : (
        <>
        <h1>Results: </h1>
        <h2>{values.name}</h2>
        <p>Climate: {values.climate}</p>
        <p>Terrain: {values.terrain}</p>
        <p>Surface Water: {values.surface_water}</p>
        <p>Population: {values.population}</p>
        </>
    )
}

export default Planets