import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png"
        alt="Firebase"
        width="20%"
      />
      <h1>CRUD Firestore</h1>
      <section className="crud">
        <aside className="crud__form">
          <h2>Registrar empleados</h2>
          <form>
            <input
              type="text"
              name="name"
              required
              placeholder="Nombre del empleado"
            />
            <input
              type="text"
              name="city"
              required
              placeholder="Ciudad de residencia"
            />
            <input type="text" name="position" required placeholder="Cargo" />
            <input type="text" name="email" required placeholder="Email" />
            <button type="submbit">Registar</button>
          </form>
        </aside>
        <aside className="crud__data">
          <h2>Lista de empleados</h2>
          <table id="customers">
            <tr>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>Cargo</th>
              <th>Email</th>
              <th>EDITAR</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <img src="/icon-edit.svg" width="30px" />
                <img src="/icon-trash.svg" width="30px" />
              </td>
            </tr>
          </table>
        </aside>
      </section>
    </div>
  );
}

export default App;
