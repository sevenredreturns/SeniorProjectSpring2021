import React, {Component} from 'react'
import GameLeaderboard from './GameLeaderboard'
import { Row, Col, Divider, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

var userID = "6079858623c4150084b79241";

class Leaderboard extends React.Component {
  constructor(props)
  {
      super(props);
      this.state = { username: "", place: "" };
  }

  componentDidMount()
  {
      this.setState({loading: true});
      fetch('/api/leaderboarduid/' + userID)
          .then(response => response.json())
          .then(data => this.setState({username: data.username, place: data.place}))
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
            <Card title="Your Overall Rank" bordered={false}><UserOutlined />
            <Divider type="vertical" />{this.state.username}<Divider type="horizontal" />Rank: {this.state.place}
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
