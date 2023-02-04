import './App.css';

function App() {
  return (
    <div className="App">
      <h1>jstocks.online</h1>
      <div className="App-blurb">
          My personal website!<br/>
          <br/>
          <h2>Links:</h2>
          <a href="https://www.linkedin.com/in/james-stocks-5316b337/">LinkedIn</a><br/>
          <a href="https://twitter.com/_JamesStocks">Twitter</a><br/>
          <a href="https://68st0x20.itch.io/">Itch</a> - several games you can play in browser!<br/>
          <a href="https://github.com/james-stocks">Github</a> (not much activity because I use Gitlab for personal projects and a separate account for work)<br/>
          <a href="https://gitlab.com/68K">Gitlab</a><br/>
          Things I've written on <a href="https://medium.com/@jstocks">medium.com</a>
      </div>
      <footer className="footer">
        <p className="text-footer">
            Copyright © 2023 James Stocks | <a href="https://github.com/james-stocks/jstocks">Source</a> | <a href="mailto:jstocks@duck.com">jstocks@duck.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
