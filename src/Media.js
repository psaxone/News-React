import React, { Component } from "react";
import style from "./style.css";

class Media extends Component {
  render() {
    let iconURL = "https://besticon-demo.herokuapp.com/icon?url=";
    let iconSize = "&size=80..120..200";
    return (
      <div>
        <div id="selectedMedia">
          {this.props.selectedMedia.map((sourceName, i) => {
            return (
              <span>
                {sourceName}
                {i === this.props.selectedMedia.length - 1 ? "." : ", "}
              </span>
            );
          })}
        </div>

        <ul>
          {this.props.newsMedia.map(source => {
            return (
              <li
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
