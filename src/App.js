import './App.css';

function App() {
  return (
    <div className="App">
      <h1>jstocks.online</h1>
      <h3><i>My little space on the Internet</i></h3>
      <div className="App-blurb">
          <h2>Links</h2>
          <a href="https://www.linkedin.com/in/james-stocks-5316b337/">LinkedIn</a><br/>
          <a href="https://twitter.com/_JamesStocks">Twitter</a><br/>
          <a href="https://68st0x20.itch.io/">Itch</a> - several games you can play in browser!<br/>
          <a href="https://github.com/james-stocks">Github</a><br/>
          <a href="https://gitlab.com/68K">GitLab</a><br/>
          Things I've written on <a href="https://medium.com/@jstocks">medium.com</a>
      </div>
      <footer className="footer">
        <p className="text-footer">
            Copyright © 2024 James Stocks | <a href="https://github.com/james-stocks/jstocks">Source</a> | <a href="mailto:jstocks@duck.com">jstocks@duck.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
