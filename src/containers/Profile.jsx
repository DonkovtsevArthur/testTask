import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faVk,
  faTelegram,
  faYoutube,
  faTwitter,
  faTwitch,
  faInternetExplorer
} from "@fortawesome/fontawesome-free-brands";
import axios from "axios";
import PropTypes from "prop-types";

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

  getURL = url => {
    return url.indexOf("http") !== 0 ? `https://${url}` : url;
  };
  getLabel = lab => {
    return lab.indexOf("web") == 0 ? `internet-explorer` : lab;
  };
  render() {
    const {
      isOpenUserInfo,
      messageError,
      city,
      languages,
      social
    } = this.props;
    return <div>
        {isOpenUserInfo ? <React.Fragment>
            {" "}
            <p>{messageError}</p>{" "}
          </React.Fragment> : <div>
            Город: {city} <br />
            Знание языков:
            <ul>{languages.map((item, i) => <li key={i}>{item}</li>)}</ul>
            <div>
              Ссылки:
              {social.map((item, i) => (
                <a
                  style={{ margin: "2px" }}
                  key={i}
                  href={this.getURL(item.link)}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", `${this.getLabel(item.label)}`]}
                  />
                </a>
              ))}
            </div>
          </div>}
      </div>;
  }
}

const mapStateProps = state => ({
  city: state.getUserInfo.city,
  languages: state.getUserInfo.languages,
  social: state.getUserInfo.social,
  messageError: state.getUserInfo.message,
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

Profile.propTypes = {
  isOpenUserInfo: PropTypes.bool,
  messageError: PropTypes.string,
  city: PropTypes.string,
  languages: PropTypes.array,
  social: PropTypes.array
};

export default connect(mapStateProps, mapDispatchProps)(Profile);
