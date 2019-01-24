import React, { Component } from 'react';
import { Layout, Menu,Icon,Button } from 'antd';
import './index.css';
import {
  HashRouter as Router,
  Route,Link,Switch
} from 'react-router-dom';
import MyZone from '../MyZone';
import List from '../List';


const { Header } = Layout;
const SubMenu = Menu.SubMenu;

class Main extends Component {

  state = {
    current: 'Main',
    collapsed: false,
    routerWidth:'15%',
    contentWidth:'85%'
  }


  componentDidMount() {
     console.log(this.props)
     this.Aauthority(this.props);
  }

  componentWillUpdate(nextProps) {
      console.log(nextProps)
      this.Aauthority(nextProps);
  }

  Aauthority = (props) => {

 
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({current: e.key, });
    this.props.history.push("/"+e.key);

  }

  TitleClick= (e) => {
    console.log('click ', e);

    this.setState({ current: e.key,});
    this.props.history.push("/"+e.key);
  }

  toggleCollapsed = () => {
    console.log(this.state.routerWidth);
    let routerWidth = this.state.routerWidth === '15%' ? '10%' :'15%'
    let contentWidth = this.state.contentWidth === '85%' ? '90%':'85%'
    this.setState({
      collapsed: !this.state.collapsed,
      routerWidth:routerWidth,
      contentWidth:contentWidth
    });
  }

  render() {
    return (
       <div style={{width:'100%'}}>
        <div style={{width:this.state.routerWidth,float:'left'}}>
          <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[this.state.current]}
            selectedKeys={[this.state.current]}
            onClick={this.handleClick}
            inlineCollapsed={this.state.collapsed}
            style={{width:'100%'}}
          >
          <Menu.Item key="Main">
            <Icon type="pie-chart" />
            <span>首页</span>
          </Menu.Item>
          <Menu.Item key="Main/List">
            <Icon type="pie-chart" />
            <span>列表</span>
          </Menu.Item>
          </Menu>
      </div>
      <div style={{width:this.state.contentWidth,float:'left',background:'#fff'}}>
         <Router>
          <Switch> 
            <Route exact path="/Main" component={MyZone} />     
            <Route path="/Main/List" component={List} />
          </Switch> 
        </Router>
      </div>
    </div>
    );
  }
}

export default Main;
