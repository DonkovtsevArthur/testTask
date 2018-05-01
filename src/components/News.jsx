import React, { Component } from "react";
import { CircularProgress } from "material-ui";

import axios from "axios";

const newsLi = {
  listStyleType: "none",
  border: "1px solid grey",
  margin: "10px",
  padding: "5px"
};
const span = {
  fontSize: "10px"
};
class News extends Component {
  state = {
    newsContent: [],
    isLoader: true
  };

  componentDidMount() {
    const url = `https://mysterious-reef-29460.herokuapp.com/api/v1/news `;
    axios.get(url).then(el => {
      this.setState({
        newsContent: el.data.data,
        isLoader: false
      });
    });
  }

  componentWillUnmount() {
    this.setState({ isLoader: false });
  }
  render() {
    const { newsContent, isLoader } = this.state;
    const sum = newsContent.length;
    return <div>
        {isLoader ? <div>
            <CircularProgress />
          </div> : <div>
            <span>Всего новостей: {sum}</span>
            <ul style={{ paddingLeft: "0px" }}>
              {newsContent.map((item, index) => (
                <li style={newsLi} key={index}>
                  <h2>{item.title}</h2>

                  <p>{item.title}.</p>
                </li>
              ))}
            </ul>
          </div>}
      </div>;
  }
}

export default News;
