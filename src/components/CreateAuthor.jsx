export const CreateAuthor = ({ onCreate }) => (
  <fieldset>
    <legend>Add new author</legend>
    <form onSubmit={onCreate}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="surname">Surname</label>
        <input id="surname" name="surname" />
      </div>
      <button className="AddButton">Add author</button>
    </form>
  </fieldset>
);
