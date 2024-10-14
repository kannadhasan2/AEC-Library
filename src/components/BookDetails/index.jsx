import React from 'react'
import './index.css'

const BookDetails = (books)=>{
    const {book} = books
    const {imageUrl,bookName ,bookId,description,author,department,publicationDate,language,noOfPages,bookCount,publisher} = book 
    return (
        <li className='book-details-container'>
            <img className='book-image' src={imageUrl}  /> 
            <div className='book-card-container'>
                <h1>{bookName}</h1>
                <p>Author: {author}</p>
                <p>No.of Pages: {noOfPages}</p>
                <p>Book Count: {bookCount}</p>
                <p>Department: {department}</p>
                <p>Publication Date: {publicationDate}</p>
                <p>Publisher: {publisher}</p>
            </div>
        </li>
    )
}

export default BookDetails