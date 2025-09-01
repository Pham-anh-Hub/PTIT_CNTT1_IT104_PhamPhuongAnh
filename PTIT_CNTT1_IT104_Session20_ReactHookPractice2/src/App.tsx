import "./App.css";
import ArticleTracker from "./components/ArticleTracker";
import Counter from "./components/Counter";
import Exercise01 from "./components/Exercise01";
import Exercise02 from "./components/Exercise02";
import Exercise03 from "./components/Exercise03";
import Exercise06 from "./components/Exercise06";
import PageTitle from "./components/PageTitle";
import Seach from "./components/Seach";
import Timer from "./components/Timer";
import UserInform from "./components/UserInform";

function App() {
  return (
    <div className="container">
      <Exercise01 />
      <Exercise02 />
      <Exercise03 />
      <PageTitle />
      <Timer />
      <Exercise06 />
      <Counter />
      <UserInform />
      <Seach />
      <ArticleTracker />
    </div>
  );
}

export default App;
