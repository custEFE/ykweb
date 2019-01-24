import React, { Component } from 'react';
import { Input,Button} from 'antd';
import './index.css';

class Login extends Component {
  state = {
    loading: false,
  }


  submit = () => {

    this.setState({ loading: true });
     this.props.history.push("/Main");
  }

  render() {
    return (
      <div className="main">
   
        <h3 >悠客平台</h3>
        <div className="item" >
          <Input placeholder="账号" />
        </div>
        <div className="item" >
          <Input placeholder="密码" type="password" />
        </div>
        <div className="item" >
        <Button type="primary" block   loading={this.state.loading} onClick={this.submit}>登 陆</Button>
        </div>
      </div>
    );
  }
}

export default Login;
