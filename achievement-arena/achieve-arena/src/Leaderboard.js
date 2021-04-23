import { Table, Select } from 'antd';

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
    key: '1',
    rank: '1',
    username: 'Hosee Jaala',
    score: 790,
  },
  {
    key: '2',
    rank: '2',
    username: 'Tzefanyah Dan',
    score: 788,
  },
  {
    key: '3',
    rank: '3',
    username: 'Iason Remiel',
    score: 788,
  },
  {
    key: '4',
    rank: '4',
    username: 'Symeon Efrayim',
    score: 786,
  },
  {
    key: '5',
    rank: '5',
    username: 'Yehonatan Azarias',
    score: 786,
  },
  {
    key: '6',
    rank: '6',
    username: 'Anan Yair',
    score: 756,
  },
  {
    key: '7',
    rank: '7',
    username: 'John Brown',
    score: 754,
  },
  {
    key: '8',
    rank: '8',
    username: 'John Brown',
    score: 752,
  },
  {
    key: '9',
    rank: '9',
    username: 'John Brown',
    score: 721,
  },
  {
    key: '10',
    rank: '10',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '11',
    rank: '11',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '12',
    rank: '12',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '13',
    rank: '13',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '14',
    rank: '14',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '15',
    rank: '15',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '16',
    rank: '16',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '17',
    rank: '17',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '18',
    rank: '18',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '19',
    rank: '19',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '20',
    rank: '20',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '21',
    rank: '21',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '22',
    rank: '22',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '23',
    rank: '23',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '24',
    rank: '24',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '25',
    rank: '25',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '26',
    rank: '26',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '27',
    rank: '27',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '28',
    rank: '28',
    username: 'John Brown',
    score: 32,
  },
  {
    key: '29',
    rank: '29',
    username: 'John Brown',
    score: 32,
  },
];

const { Option } = Select;

function Leaderboard() {
  return(
    <Table title=
      {
        () => <div>Overall Leaderboard</div>
      }
      pagination={{ pageSize: 10 }}
      size='default'
      scroll={{ y: 2000, x: '1vw' }}
      columns={columns}
      dataSource={data}
    />
  );
}

export default Leaderboard;
