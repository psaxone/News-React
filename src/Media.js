import React, { Component } from "react";
import style from "./style.css";

class Media extends Component {
  state = {
    disabled: true
  }
  render() {
    let iconURL = "https://besticon-demo.herokuapp.com/icon?url=";
    let iconSize = "&size=80..120..200";
    return (
      <div>
        <div>
          <h1 style={{ textAlign: "center" }} id="p1-h1">
            Select News Media
        </h1>
        </div>


        <div id="selectedMedia">
          {this.props.selectedMedia.map((id, i) => {
            let source = this.props.newsMedia.find(source => {
              return source.id === id;
            });
            return (
              <span key={source.id}>
                {source.name}
                {i === this.props.selectedMedia.length - 1 ? "." : ", "}


              </span>

            );
          })}
        </div>

        <div id="selectedMedia">
          <button id="clearListButton-Media" onClick={() => this.props.clearButton()}>Clear List</button>
          <button disabled={this.props.selectedMedia.length === 0} onClick={() => this.props.currentPage("search")}>Next</button>


        </div>

        <ul className="list-sources">
          {this.props.newsMedia.map(source => {
            return (
              <li key={source.id}
                className="source"
                style={{
                  backgroundImage: `url(${iconURL + source.url + iconSize})`
                }}
                onClick={() => this.props.onSourceClick(source)}
              >
                <div className="source-overlay">
                  <p>{source.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Media;

// {this.props.newsMedia.map(source => {
//   return <li className="source">{source.name}</li>;
// })}
// {JSON.stringify(this.props.newsMedia.map(source => source.name))}

// lista = []
// otraLista.forEach(item => {
//   lista.push(item)
// })

// otraLista = [{id: 1, name: 'nico'},{id: 2, name: 'ari'}]

// lista = otraLista.map(item => {
//   return item.name
// })

// // lista = ['nico','ari']

// lista = otraLista.map(item => {
//   return item
// })

// // lista = [{id: 1, name: 'nico'},{id: 2, name: 'ari'}]

// lista = otraLista.map(item => {
//   return item.id
// })

// // lista = [1,2]

{
  /* <pre>{JSON.stringify(this.props.selectedMedia)}</pre> */
}
// {
//   this.props.selectedMedia.map((sourceName, i) => {});
// }
