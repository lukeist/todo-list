import TodoList from "./pages/TodoList";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <TodoList />
    </div>
  );
}
export default App;
