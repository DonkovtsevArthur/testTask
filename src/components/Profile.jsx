import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

class Profile extends Component {
  componentWillMount() {
    this.getId(this.props.id);
  }
  getId = id => {
    const url = `https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`;
    axios
      .get(url)
      .then(res => {
        const { status, message } = res.data;
        if (status === "ok") {
          const { city, languages, social } = res.data.data;
          this.props.onGetInfo(city, languages, social);
        } else {
          this.props.onGetInfoError(message);
        }
      })
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div>
        {this.props.isOpenUserInfo ? (
          <React.Fragment>
            {" "}
            <p>{this.props.message}</p>{" "}
          </React.Fragment>
        ) : (
          <div>
            <h2>Город: {this.props.city}</h2>
            <ul>
              {this.props.languages.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <div style={{ display: "grid" }}>
              {this.props.social.map((item, i) => (
                <a key={i} href={item.link}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateProps = state => ({
  city: state.getUserInfo.city,
  languages: state.getUserInfo.languages,
  social: state.getUserInfo.social,
  message: state.getUserInfo.message,
  isOpenUserInfo: state.getUserInfo.isOpenUserInfo
});

const mapDispatchProps = dispatch => ({
  onGetInfo: (city, languages, social) => {
    dispatch({
      type: "GET_USER_INFO",
      city,
      languages,
      social
    });
  },
  onGetInfoError: error => {
    dispatch({ type: "GET_USER_INFO_ERROR", error });
  }
});

export default connect(mapStateProps, mapDispatchProps)(Profile);
