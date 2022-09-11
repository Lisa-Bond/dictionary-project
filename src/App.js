import dictionary from "./dictionary.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={dictionary}
            className="App-logo img-fluid"
            alt="Dictionary logo"
          />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by{" "}
          <a href="https://www.facebook.com/lisabondarenko/" target="_blank">
            Lisa Bondarenko
          </a>{" "}
          and is open-sourced at{" "}
          <a
            href="https://github.com/Lisa-Bond/dictionary-project"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
