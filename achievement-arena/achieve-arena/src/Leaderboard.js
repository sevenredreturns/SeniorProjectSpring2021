import React, {Component} from 'react'
import GameLeaderboard from './GameLeaderboard'
import { Avatar, Row, Col, Divider, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

var userID = "6079858623c4150084b79243";

class Leaderboard extends React.Component {
  constructor(props)
  {
      super(props);
      this.state = { username: "", rank: "", avatarurl: "" };
  }

  getUsername(data) {

  }

  componentDidMount()
  {
      this.setState({loading: true});
      fetch('/api/leaderboardglobaluid/' + userID)
          .then(response => response.json())
          .then(data => {console.log(data); this.setState({username: data.username, rank: data.rank, }); return null;})
      ;
  }


  render() {
    if (userID != null) {
      return (
      <div>
      <Divider orientation="left">Leaderboards</Divider>
      <Row justify="space-around" align="left">
        <Col span={3}>
          <div style={{ itemAlign: 'center' }}>
            <Card title="Your Overall Rank" bordered={false}><Avatar
              size={50}
              src="https://steamavatar.io/img/1477351892nQChW.jpg"    //temp value, need to fetch user and get avatarurl
            />
            <Divider type="vertical" />{this.state.username}<Divider type="horizontal" />Rank: {this.state.rank}
            </Card>
          </div>
        </Col>
        <Col span={5}>
          <div><GameLeaderboard /></div>
        </Col>
        <Col />
        <Col />
      </Row>
      </div>
      );
    }
    return (
      <div>
      <Divider orientation="left">Leaderboards</Divider>
      <Row justify="space-around" align="center">
        <Col span={6}>
          <div><GameLeaderboard /></div>
        </Col>
      </Row>
      </div>
    )
  }
}

export default Leaderboard;
