export const AuthorsList = ({ authors = [], onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {authors.map((author) => (
        <tr key={author.id}>
          <td>{author.name}</td>
          <td>{author.surname}</td>
          <td>
            <button
              className="DeleteButton"
              onClick={() => onDelete(author.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
