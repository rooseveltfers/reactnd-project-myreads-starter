import React from 'react';
import './styles.css';

/**
* @description Represents a book.
* @constructor
* @param {Object} infos - The book data.
* @param {function} updateBook - Allows to update the book.
*/
const Book = ({ infos, updateBook }) => {
	const book = infos;

	return (
		<div className="book" key={book.id}>
			<div className="book-top">
				<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
				<div className="book-shelf-changer">
					<select value={book.shelf} onChange={(e) => updateBook(book, e.target.value)}>
						<option value="none" disabled>Move to...</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
				</div>
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">{book.authors ? book.authors.join(', ').toString() : ''}</div>
		</div>
	);
}

export default Book;