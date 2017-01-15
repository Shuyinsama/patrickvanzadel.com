import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class About extends React.Component {
  render() {
    return (
      <div className="aboutLayout">
        <Messages messages={this.props.messages}/>
        <article className="aboutPage">
          <h1>About me</h1>
        </article>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(About);
