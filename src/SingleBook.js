import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleBook() {
    let { id } = useParams()
    let [single, setSingle] = useState('')
    console.log(id)
    useEffect(() => {

        async function single() {
            let result = await axios.get(`https://openlibrary.org/books/${id}.json`)
            console.log(result.data)
            setSingle(result.data)
            
        }
        single()

    }, [])
    return (
        <div className='single'>
            <img src={`https://covers.openlibrary.org/b/id/${single.covers}-L.jpg`}></img>
            <h1>{single.title}</h1>
            {/* <h3>{single.authors}</h3> */}

        
        </div>
    )
}

export default SingleBook