import "./App.css";
import CassetteTape from "./components/cassette-tape";
import Lyrics from "./components/lyrics";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center px-8 pt-8 pb-24 text-marker">
        <CassetteTape />
      </div>
    </>
  );
}

export default App;
