import React, { useState } from 'react';
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

const empty = [];

const games = [
  {
    key: 0,
    appID: 0,
    name: "Overall Leaderboard",
    scores: [
      {
        key: '1',
        rank: '1',
        username: 'Overall Leaderbaord',
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
    ]
  },
  {
    key: 1803,
    appID: 1803,
    name: "Red Ded Redemption 2",
    scores: [
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
      }
    ]
  },
  {
    key: 1901,
    appID: 1901,
    name: "Grand Theft Auto V",
    scores: [
      {
        key: '1',
        rank: '1',
        username: 'Tzefanyah Dan',
        score: 790,
      },
      {
        key: '2',
        rank: '2',
        username: 'Hosae',
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
      }
    ]
  },
  {
    key: 2230,
    appID: 2230,
    name: "Minecraft",
    scores: [
      {
        key: '1',
        rank: '1',
        username: 'Iason Remiel',
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
        username: 'Hosee Jaala',
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
      }
    ]
  }
];


const { Option } = Select;

function findGame(input) {
  for (const element in games) {
    if (games[element].key == parseInt(input)) {
      return games[element].scores;
    }
  }
  return games[0].scores;
}

function GameLeaderboard() {
  const [data, setData] = useState(games[0].scores);
  return(
    <Table title=
      {
        () => <div>
        <p><b>Global Leaderboard</b></p>
        <Select
          showSearch
          allowClear
          style={{ width: 200 }}
          placeholder="Select a game"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          onChange={(input) => setData(findGame(input))}
        >
          <Option value="1803">Red Dead Redemption 2</Option>
          <Option value="1901">Grand Theft Auto V</Option>
          <Option value="2230">Minecraft</Option>
        </Select>
        </div>
      }
      pagination={{ pageSize: 20 }}
      size='default'
      scroll={{ y: 800, x: '1vw' }}
      columns={columns}
      dataSource={data}
    />
  );
}

export default GameLeaderboard;
