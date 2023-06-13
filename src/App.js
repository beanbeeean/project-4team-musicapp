import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./NavComponents/Nav";
import Footer from "./components/Footer";
import Test from "./Test";

function App() {
  return (
    <div>
      <Nav />
      {/* <Home /> */}
      <Test />
      <Footer />
    </div>
  );
}

export default App;
