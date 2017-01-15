import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class Home extends React.Component {
  render() {
    return (
      <div className="homeLayout">
        <Messages messages={this.props.messages}/>
        <div className="homeHeading">
          <h1 className="homeHeadingTitle"><span className="blink">></span> Patrick van Zadel</h1>
          <h2 className="homeHeadingSubtitle">Software developer</h2>
          <ul className="homeHeadingMenu"> 
            <li><a href="./downloads/[CV]Patrick_van_Zadel-v2.0.1.pdf" download>curriculum vitae</a></li>
            <li><a href="https://www.linkedin.com/in/patrickvanzadel" target="_blank">linkedin</a></li>
            <li><a href="https://github.com/Shuyinsama" target="_blank">github</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
