import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css';
const Book = ({ id, title, author, coverImage }) => {
  return (
    <Link to={`/books/${id}`} className="book-container">
      {/**le but est que le lien soit dynamique,donc il va changer selon la valeur de id,on ne peut pas lecreire comme cela: to='/books/id',id n'aura pas de valeur mais sera un texte,mais si l'on fait : `/books/${id}` ${id} represente la valeur de id passé comme props */}
      <div className="book">
        <div className="book-cover">
          <img src={coverImage} alt={title} />
        </div>
        <div className="book-details">
          <h2 className="book-title">{title}</h2>
          <h3 className="book-author">{author}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Book;
