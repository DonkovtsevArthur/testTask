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
  getDate = x => {
    let ms = Date.parse(x);
    let data = new Date(ms);
    return data.toString();
  };
  componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f27a310263b64558b8340273039cb4b3`;
    axios.get(url).then(el => {
      this.setState({
        newsContent: el.data.articles,
        isLoader: false
      });
    });
  }

  componentWillUnmount() {
    this.setState({ isLoader: false });
  }
  render() {
    const { newsContent, isLoader } = this.state;

    return (
      <div>
        {isLoader ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          <ul style={{ paddingLeft: "0px" }}>
            {newsContent.map((item, index) => (
              <li style={newsLi} key={index}>
                <img src={item.urlToImage} alt={item.autor} />
                <h2>{item.author}</h2>
                <span style={span}>{this.getDate(item.publishedAt)}</span>

                <p>{item.title}.</p>
                <a href={item.url}>подробнее...</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default News;
