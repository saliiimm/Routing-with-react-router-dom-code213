import React from 'react';
import { useParams } from 'react-router-dom';
const ShowBook = () => {
  const { id } = useParams(); //permet de recuperer la valeur de id situé dans le lien
  //normalement par la suite nous sommes cences recuperer les donnees du book selon son id a partir d'une api:
  //exemple:
  //const [bookData,setBookData]= useState()
  //fetch(`https://api.example.com/books/${id}`)
  // .then(response => response.json())
  // .then(data => setBookData(data))
  //si on souhaite afficher les données dans la page:
  //return <div>{bookData.title} {bookData.author}</div>
  return <div className="showbook">Book {id}</div>;
};

export default ShowBook;
