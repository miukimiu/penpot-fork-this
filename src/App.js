import "./App.css";
import CassetteTape from "./components/cassette-tape";
import Lyrics from "./components/lyrics";

function App() {
  return (
    <div className="flex flex-col items-center px-8 pt-8 pb-24 text-marker">
      <CassetteTape />
      <Lyrics />
    </div>
  );
}

export default App;
