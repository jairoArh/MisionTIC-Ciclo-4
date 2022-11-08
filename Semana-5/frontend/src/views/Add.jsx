import { useEffect, useState } from "react";

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

export const Add = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [release, setRelease] = useState("");

  const result = GetData();

  function sending(event) {
    event.preventDefault();
    const data = JSON.stringify({id,title,author,pages,release})

    fetch('http://localhost:4000/books',{
                method:"POST",
                body:data,
                headers: {
                'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then(resp => resp.json())
                .then(resp => {
                   if( resp.state ){
                    result = GetData()
                   }else{
                    alert('Id Repetido')
                   }
                })
  }

  return (
    <div className="container mt-5" align="center">
      <h1>Adicionar Libro</h1>
      <form onSubmit={sending}>
        <div className="row">
          <div className="col-12 col-sm-4">
            <label for="id" className="form-label">
              Id Libro
            </label>
            <input
              type="number"
              onChange={(e) => setId(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="col-12 col-sm-8">
            <label for="title" className="form-label">
              Título del Libro
            </label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
            />
          </div>

          <div className=" col-12 col-sm-6">
            <label for="author" className="form-label">
              Autor
            </label>
            <input
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="col-4 col-sm-2">
            <label for="pages" className="form-label">
              Páginas
            </label>
            <input
              type="number"
              onChange={(e)=>setPages(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="col-8 col-sm-4">
            <label for="release" className="form-label">
              Fecha
            </label>
            <input
              type="date"
              onChange={(e)=>setRelease(e.target.value)}
              className="form-control"
            />
          </div>
          <button className="col-12 mt-3 btn btn-primary">Enviar</button>
        </div>
      </form>

      <div className="row mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Título</td>
              <td>Autor</td>
              <td>Páginas</td>
              <td>Lanzamiento</td>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {result.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.pages}</td>
                <td>{book.release}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
