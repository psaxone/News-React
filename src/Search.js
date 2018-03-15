import React, { Component } from "react";

class Search extends Component {


  render() {
    // let newsURL = "https://newsapi.org/v2/everything?q=";
    // let listadoIds = "&sources=";
    // let APIkey = "&apiKey=a692b837987549b1bc6d7fdf69e82b38";
    return (
      <div style={{ display: "block" }} id="searchPage">
        <div>
          <h2 style={{ textAlign: "center" }}>{this.props.selectedMedia.map((id, i) => {
            let source = this.props.newsMedia.find(source => {
              return source.id === id;
            });
            return (


              i === this.props.selectedMedia.length - 1 ? source.name + "." : source.name + ", "

            );
          })}</h2>
        </div>
        <div id="inputSearchPage">
          <input id="inputSearch" type="text" placeholder="Search News" value={this.props.newsSearch} onChange={(event) => this.props.handleOnChangeInputSearch(event)} />
        </div>
        <div style={{ textAlign: "center" }}>
          <button id="buttonBackSearchPage" onClick={() => this.props.currentPage("media")}>Back</button>
          <button id="buttonSearch-SearchPage" disabled={this.props.newsSearch.length === 0}
            onClick={
              (() => this.props.currentPage("results"))

            }
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
export default Search;
