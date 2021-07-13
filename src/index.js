import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ReactGiphySearchbox from "react-giphy-searchbox";
import githubLogo from "./assets/github.png";

const App = () => (
  <>
    <header>
      <h1>React Giphy Searchbox</h1>
      <p>
        <b>Basic responsive setup:</b> resize the browser window to see how the
        content respond to the resizing.
      </p>
      <p>
        Select a gif (clicking on it) and open the console to see the returned{" "}
        <a
          href="https://developers.giphy.com/docs/api/schema/#gif-object"
          target="_blank"
          rel="noopener noreferrer"
        >
          GIF object.
        </a>
      </p>
    </header>
    <div className="searchboxWrapper">
      <ReactGiphySearchbox
        apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
        onSelect={(item) => console.log(item)}
        masonryConfig={[
          { columns: 2, imageWidth: 110, gutter: 5 },
          { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 }
        ]}
      />
    </div>
    <footer>
      <a
        href="https://github.com/sergiop/react-giphy-searchbox"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubLogo} alt="Github Logo" />
        <span>Github</span>
      </a>
    </footer>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
