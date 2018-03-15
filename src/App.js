import React, { Component } from "react";
import Media from "./Media.js";
import Search from "./Search.js";
import Results from "./Results.js";
import axios from "axios";
import style from "./style.css";

class App extends Component {
  state = {
    currentPage: "media",
    newsMedia: [],
    loading: true,
    selectedMedia: [],
    newsSearch: [],
    articles: []
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
        // console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleClickOnSource(source) {
    let selectedMedia = [].concat(this.state.selectedMedia);
    if (selectedMedia.indexOf(source.id) === -1) {
      selectedMedia.push(source.id);
    } else {
      selectedMedia.splice(selectedMedia.indexOf(source.id), 1);
    }
    this.setState({ selectedMedia: selectedMedia });
  }
  handleClickOnCurrentPage(valor) {
    this.setState({ currentPage: valor });

  }
  handleOnChangeInputSearch(event) {

    this.setState({ newsSearch: event.target.value });
    // console.log(event.target.value)

  }
  handleClearButton() {
    this.setState({ selectedMedia: [] })
  }
  getSearchResults() {

    axios
      .get(
        "https://newsapi.org/v2/everything?q=" + this.state.newsSearch + "&sources=" + this.state.selectedMedia + "&apiKey=a692b837987549b1bc6d7fdf69e82b38"
      )
      .then(response => {
        this.setState({
          loading: false,
          articles: response.data.articles
        });
        // console.log(response);

      })
      .catch(error => {
        console.log(error);
      });
  }

  renderPages() {
    if (this.state.currentPage === "media") {
      return (
        <Media
          newsMedia={this.state.newsMedia}
          selectedMedia={this.state.selectedMedia}
          onSourceClick={source => this.handleClickOnSource(source)}
          currentPage={valor => this.handleClickOnCurrentPage(valor)}
          clearButton={() => this.handleClearButton()}
        />
      );
    } else if (this.state.currentPage === "search") {
      return (
        <Search
          newsMedia={this.state.newsMedia}
          selectedMedia={this.state.selectedMedia}
          currentPage={valor => this.handleClickOnCurrentPage(valor)}
          handleOnChangeInputSearch={event => this.handleOnChangeInputSearch(event)}
          newsSearch={this.state.newsSearch}
        />
      );
    } else if (this.state.currentPage === "results") {
      return <Results
        get={() => this.getSearchResults()}
        articles={this.state.articles}
        currentPage={valor => this.handleClickOnCurrentPage(valor)} />;
    } else {
      return null;
    }
  }
  render() {
    if (this.state.loading) {
      return (
        <h1 style={{ textAlign: "center" }} id="p1-h1">
          Loading data...
        </h1>
      );
    }
    return this.renderPages();
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
