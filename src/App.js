import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/Navbar";

function App() {
  return (
    <MyNavbar
      logoWidth={"100%"}
      iconWidth={"40px"}
      bgColor={"black"}
      textColor={"white"}
      fontSize={"20px"}
    />
  );
}

export default App;
