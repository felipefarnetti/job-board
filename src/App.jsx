import "./App.css";

import Content from "./components/Content";

const App = () => {
  return (
    <>
      <header>
        <h1>The Job Board</h1>
      </header>
      <main>
        <div className="container">
          <div className="item">
            <Content title="Full time sales" city="CDI - Australie" />
            <Content title="Full time sales" city="CDI - Australie" />
            <Content title="Full time sales" city="CDI - Australie" />
            <Content title="Full time sales" city="CDI - Australie" />
            <Content title="Full time sales" city="CDI - Australie" />
          </div>
        </div>
      </main>
      <footer>
        <p>
          Made with<a href="http://www.react.com"> React</a> at{" "}
          <a href="http://www.lereacteur.io"> Le Reacteur</a> By{" "}
          <a href="https://www.linkedin.com/in/felipefarnetti/">Felipe</a>
        </p>
      </footer>
    </>
  );
};
export default App;
