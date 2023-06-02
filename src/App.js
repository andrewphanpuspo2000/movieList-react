import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BookForm } from "./Components/BookForm";
import { Header } from "./Components/Header";
function App() {
  return (
    <div className=" containerParent">
      <Header />
      <BookForm />
    </div>
  );
}

export default App;
