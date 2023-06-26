import "./App.css";
import CassetteTape from "./components/cassette-tape";
import Lyrics from "./components/lyrics";

function App() {
  return (
    <div className="flex flex-col items-center text-marker">
      <CassetteTape />
      <Lyrics />
    </div>
  );
}

export default App;
