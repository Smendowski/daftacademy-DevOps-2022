import { Provider } from "./Context";
import CreateUserForm from "./components/CreateUserForm";
import UserList from "./components/UserList";
import { Actions } from "./Actions";

function App() {
  const data = Actions();
  return (
      <Provider value={data}>
        <div className="App">
          <h1>Users</h1>
          <div className="wrapper">
            <section className="create-section">
              <CreateUserForm />
            </section>
            <section className="list-section">
              <UserList />
            </section>
          </div>
        </div>
      </Provider>
  );
}

export default App;
