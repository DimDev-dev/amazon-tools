import "./App.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";
function App() {
  return (
    <div className=" flex flex-col h-full">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
