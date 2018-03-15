import React, { Component } from "react";

class Results extends Component {

  componentWillMount() {
    this.props.get();
  }
  render() {

    return (
      <div style={{ display: "block" }} id="resultsPageBGColor">
        <div><button id="buttonBackResultsPage" onClick={() => this.props.currentPage("search")}>Back</button></div>
        {this.props.articles.map(news => {
          return (
            <div key={news.url} id="articlesContainer">
              <div id="newsBoxResultsPage">
                <div id="imgContainer"><img id="newsResultsImg" src={news.urlToImage} /></div>
                <div id="textContainerResultsPage">
                  <h1>{news.name || ''}</h1>
                  <h2>{news.title || ''}</h2>
                  <p id="p1-h1"><i>{news.description || ""}</i></p>
                  <a href={news.url} target="_blank"><p>More</p></a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
export default Results;
