import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleChange(e) {
    const value = e.target.value;

    this.setState({
      tweet: value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.handleChange.bind(this)} />
        <h3>{this.props.maxChars - this.state.tweet.length }</h3>
      </div>
    );
  }
}
