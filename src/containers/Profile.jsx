import React, { Component } from "react";
import { bindActionCreators } from "redux";
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
import { getUserInfo } from "../actionCreators/profile";
import PropTypes from "prop-types";

class Profile extends Component {
  componentDidMount() {
    this.props.getUserInfo(this.props.id);
  }
  // сейчас уже эти функции не актуальны, но оставил
  changeLinkUrl = url => {
    return url.indexOf("http") !== 0 ? `https://${url}` : url;
  };
  changeLabel = lab => {
    return lab.indexOf("web") == 0 ? `internet-explorer` : lab;
  };
  render() {
    const { isOpenUserInfo, messageError, city, languages, social } = this.props;
    return (
    <div>
        {isOpenUserInfo ? <div>
            {" "}
            <p>{messageError}</p>{" "}
          </div> : <div>
            Город: {city} <br />
            Знание языков:
            <ul>{languages.map((item, i) => <li key={i}>{item}</li>)}</ul>
            <div>
              Ссылки:
              {social.map((item, i) => (
                <a
                  style={{ margin: "2px" }}
                  key={i}
                  href={this.changeLinkUrl(item.link)}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", `${this.changeLabel(item.label)}`]}
                  />
                </a>
              ))}
            </div>
          </div>}
      </div>)
  }
}

const mapStateProps = state => ({
  city: state.getUserInfo.city,
  languages: state.getUserInfo.languages,
  social: state.getUserInfo.social,
  messageError: state.getUserInfo.message,
  isOpenUserInfo: state.getUserInfo.isOpenUserInfo
});

const mapDispatchProps = dispatch => bindActionCreators({ getUserInfo }, dispatch)

Profile.propTypes = {
  isOpenUserInfo: PropTypes.bool,
  messageError: PropTypes.string,
  city: PropTypes.string,
  languages: PropTypes.array,
  social: PropTypes.array
};

export default connect(mapStateProps, mapDispatchProps)(Profile);
