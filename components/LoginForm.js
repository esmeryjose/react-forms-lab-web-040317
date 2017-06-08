import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password:""
    };
  }

  handleChange(type,e){
    const value = e.target.value
    this.setState({ [type]: value })

  }

  handleSubmit(e){
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if (!!username && !!password) {
      this.props.onSubmit({username,password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleChange.bind(this,"username")}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChange.bind(this,"password")}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
