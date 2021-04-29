import GameLeaderboard from './GameLeaderboard'
import { Row, Col, Divider, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function Leaderboard(userID) {
  if (userID != null) {
    return (
    <div>
    <Divider orientation="left">Leaderboards</Divider>
    <Row justify="space-around" align="left">
      <Col span={3}>
        <div style={{ itemAlign: 'center' }}>
          <Card title="Your Overall Rank" bordered={false}><UserOutlined />
          <Divider type="vertical" />Player Name<Divider type="horizontal" />Rank
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

export default Leaderboard;
