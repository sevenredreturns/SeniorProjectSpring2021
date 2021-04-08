import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  }
];

const data = [
  {
    rank: '1',
    username: 'Hosee Jaala',
    score: 790,
  },
  {
    rank: '2',
    username: 'Tzefanyah Dan',
    score: 788,
  },
  {
    rank: '3',
    username: 'Iason Remiel',
    score: 788,
  },
  {
    rank: '4',
    username: 'Symeon Efrayim',
    score: 786,
  },
  {
    rank: '5',
    username: 'Yehonatan Azarias',
    score: 786,
  },
  {
    rank: '6',
    username: 'Anan Yair',
    score: 756,
  },
  {
    rank: '7',
    username: 'John Brown',
    score: 754,
  },
  {
    rank: '8',
    username: 'John Brown',
    score: 752,
  },
  {
    rank: '9',
    username: 'John Brown',
    score: 721,
  },
  {
    rank: '10',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '11',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '12',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '13',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '14',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '15',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '16',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '17',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '18',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '19',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '20',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '21',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '22',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '23',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '24',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '25',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '26',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '27',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '28',
    username: 'John Brown',
    score: 32,
  },
  {
    rank: '29',
    username: 'John Brown',
    score: 32,
  },
];

function Leaderboard() {
  return(
    <Table title={() => 'Overall Leaderboard'} pagination={{ pageSize: 25 }} size='default' scroll={{ y: 700, x: '1vw' }} columns={columns} dataSource={data} />
  );
}

export default Leaderboard;
