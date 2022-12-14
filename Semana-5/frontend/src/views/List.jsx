import { useState, useEffect } from "react";

export const List = () => {
  const [updateBooks,setUpdateBooks] = useState(false)
  const [dataBooks, setDataBooks] = useState([]);

  useEffect(() => {
    getData();
  }, [updateBooks]);

  function getData() {
    fetch("http://localhost:8080/books")
      .then((resp) => resp.json())
      .then((resp) => {
        return setDataBooks(resp.data)})
      .catch((err) => console.log(err));
  }

  function deleteBook(id) {
    fetch(`http://localhost:8080/books/${id}`,{
      method:"DELETE"
    })
    .then(resp => resp.json())
    .then (resp => {
      if( resp.state ){
        alert(`Se ha Eliminado ${resp.data}`)
        setUpdateBooks(true)
      }
    })
  }

  return (
    <div className="container mt-5" align="center">
      <h1> Listado de Libros</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <td>Id</td>
            <td>Título</td>
            <td>Autor</td>
            <td>Páginas</td>
            <td>Lanzamiento</td>
            <td>Gestión</td>
          </tr>
        </thead>
        <tbody>
          {dataBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.pages}</td>
              <td>{book.release}</td>
              <td>
                <button className="btn btn-secondary" style={{ margin: 1 }}>
                  Modificar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={()=>deleteBook(book.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
