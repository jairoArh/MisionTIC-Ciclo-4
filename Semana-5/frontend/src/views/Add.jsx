import { useEffect, useState } from "react";
import { Table } from "../components/Table";

export const Add = () => {

  const [newBook, setNewBook] = useState(false);
  const [dataBooks, setDataBooks] = useState([]);
  
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [release, setRelease] = useState("");

  useEffect(() => {
    getData();
  }, [newBook]);

  const getData = () => {
    try {
      fetch("http://localhost:8080/books")
        .then((resp) => resp.json())
        .then((resp) => {
          if (resp.data) {
            setDataBooks(resp.data);
          }
        })
        .catch((err) => console.log(err));        
    } catch (err) {
      console.log(err);
    }
  };

  function cleanFields(){
    setId("")
    setTitle("")
    setAuthor("")
    setPages("")
    setRelease("")
  }

  function sending(event) {
    event.preventDefault();

    const dataBook = JSON.stringify({
      id,
      title,
      author,
      pages,
      release,
    });

    fetch("http://localhost:8080/books", {
      method: "POST",
      body: dataBook,
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((resp) => resp.json())
      .then( resp => {
        if( resp.state){
          alert('Se ha Insertado el Registro')
          setNewBook(true)
          cleanFields()
        }else{
          alert('El Id ya se ha Registrado')
        }
        
      })
      .catch((err) => console.log("Ocurrio un error al guardar: ", err));
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
              value={id}
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
              value={title}
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
              value={author}
            />
          </div>

          <div className="col-4 col-sm-2">
            <label for="pages" className="form-label">
              Páginas
            </label>
            <input
              type="number"
              onChange={(e) => setPages(e.target.value)}
              className="form-control"
              value={pages}
            />
          </div>

          <div className="col-8 col-sm-4">
            <label for="release" className="form-label">
              Fecha
            </label>
            <input
              type="date"
              onChange={(e) => setRelease(e.target.value)}
              className="form-control"
              value={release}
            />
          </div>
          <button className="col-12 mt-3 btn btn-primary">Enviar</button>
        </div>
      </form>

      <div className="row mt-5">
        <Table books={dataBooks} />
      </div>
    </div>
  );
};
