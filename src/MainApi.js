import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function MainApi(props) {

    let [books, setBooks] = useState([])

    useEffect(() => {
        async function fetch() {
            let res = await axios.get(`http://openlibrary.org/subjects/${props.Request}.json?limit=100`)
            setBooks(res.data.works)
            console.log(res.data)
           
        }
        fetch()
    }, [props.Request])
    return ( <div className='book-container'>
            <h2 className='category'>{props.heading}</h2>
        <div className='box-outer'>
            {
                books.map((book, index) => {
                    return (

                        <div className='box-inner' key={index}>
                          <div className='img-div'><Link to={`${book.cover_edition_key}`}><img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt=''/></Link></div>
                            <h2><Link className='title' to={`${book.cover_edition_key}`}>{book.title}</Link></h2>
                            <h4>{book.authors[0].name}</h4>
                          
                        </div>

                    )
                })


            }</div>
    </div>
    )
}

export default MainApi