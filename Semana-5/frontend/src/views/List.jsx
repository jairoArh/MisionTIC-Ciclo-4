import { useState, useEffect } from "react";

function GetData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then((resp) => resp.json())
      .then((resp) => setData(resp))
      .catch((err) => console.log(err));
  }, []);

  return data.state ? data.data : [];
}

export const List = () => {

    function deleteBook(id){
        console.log(`Se va a eliminar ${id}`)
    }
 
  const result = GetData();

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
          {result.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.pages}</td>
              <td>{book.release}</td>
              <td>
                <button className="btn btn-secondary" style={{margin:1}}>Modificar</button>
                <button className="btn btn-danger" onClick={deleteBook(book.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
