import React from 'react'

export const Table = ({ books = []}) => {
  return (
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
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.pages}</td>
                <td>{book.release}</td>
              </tr>
            ))}
          </tbody>
    </table>
  )
}
