import "./App.css";
import ChangeMode from "./components/ChangeMode";
import ChangeTheme from "./components/ChangeTheme";
import Counter from "./components/Counter";
import FavouriteUsers from "./components/FavouriteUser";
import Language from "./components/Language";
import MenuMode from "./components/MenuMode";
// import Datas from "./components/Datas";
import Random from "./components/Random";

function App() {
  return (
    <>
      <div className="container">
        <Counter />
        <hr />
        {/* <Datas /> */}
        <Random />
        <hr />
        <ChangeTheme/>
        <hr />
        <ChangeMode/>
        <hr />
        <MenuMode/>
        <hr />
        <Language/>
        <hr />
        <FavouriteUsers/>
      </div>
    </>
  );
}

export default App;
