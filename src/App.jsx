import Heading from "./components/heading";
import NavInfo from "./components/navinfo";
import MainPage from "./components/mainpage";
import Aside from "./components/aside";
function App() {
  return (
    <>
      <Heading></Heading>
      <NavInfo></NavInfo>
      <div className="main-aside-tab" role="presentation">
        <MainPage></MainPage>
        <Aside></Aside>
      </div>
      <footer
        style={{ backgroundColor: "black", width: "100%", height: "60px" }}
      ></footer>
    </>
  );
}

export default App;
