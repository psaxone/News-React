import React, { Component } from "react";
import Media from "./Media.js";
import Search from "./Search.js";
import Results from "./Results.js";
import axios from "axios";
import style from "./style.css";

class App extends Component {
  state = {
    newsMedia: [],
    loading: true,
    selectedMedia: []
  };
  componentDidMount() {
    this.getNewsSources();
  }
  getNewsSources() {
    axios
      .get(
        "https://newsapi.org/v2/sources?apiKey=a692b837987549b1bc6d7fdf69e82b38"
      )
      .then(response => {
        this.setState({
          newsMedia: response.data.sources,
          loading: false
        });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleClickOnSource(source) {
    let selectedMedia = [].concat(this.state.selectedMedia);
    if (selectedMedia.indexOf(source.name) === -1) {
      selectedMedia.push(source.name);
    } else {
      selectedMedia.splice(selectedMedia.indexOf(source.name), 1);
    }
    this.setState({ selectedMedia: selectedMedia });
  }
  render() {
    if (this.state.loading) {
      return (
        <h1 style={{ textAlign: "center" }} id="p1-h1">
          Loading data...
        </h1>
      );
    }
    return (
      <div>
        <h1 style={{ textAlign: "center" }} id="p1-h1">
          News Search
        </h1>
        <Media
          newsMedia={this.state.newsMedia}
          selectedMedia={this.state.selectedMedia}
          onSourceClick={source => this.handleClickOnSource(source)}
        />
      </div>
    );
  }
}
export default App;

// contexto

// this.sarasa = 'sarasa'

// () => {
//   console.log(this.sarasa)
//   // 'sarasa'
// }

// function test(){
//   console.log(this.sarasa)
//   // 'cannot read sarasa of undefined'
// }
