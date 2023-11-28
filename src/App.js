import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "./components/toolbar/toolbar";
import Slide from "./components/slide/slide";
import TabBar from "./components/tabBar/tabBar";
import Footer from "./components/footer/footer";
import Content from "./components/temp_content/temp_content";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Slide />
      <Content />
      {/* <TabBar/> */}
      <Footer />
    </div>
  );
}

export default App;
