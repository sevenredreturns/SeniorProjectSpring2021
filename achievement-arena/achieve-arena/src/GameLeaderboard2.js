import React, {Component, useState} from 'react';
import { Table, Select }            from 'antd';


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
let games = [];

const empty = [];

const { Option } = Select;




class GameLeaderboard2 extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {games: [], isLoading: true};
  }

  componentDidMount()
  {
    this.setState({isLoading: true});

    fetch('/api/leaderboard').then(response => response.json())
                             .then(data => this.setState(
                                 {games: data, isLoading: false}));
  }

  render()
  {
    const {games, isLoading} = this.state;

    if (isLoading)
    {
      return <p>Loading...</p>;
    }

    const {data, setData} = this.state;

    function findGame(input) {
      for (const element in games) {
        if (games[element].key === parseInt(input)) {
          return games[element].scores;
        }
      }
      return games[0].scores;
    }

    return (
        <Table title=
                   {
                     () => <div>
                       <p><b>Global Leaderboard</b></p>
                       <Select
                           showSearch
                           allowClear
                           style={{width: 200}}
                           placeholder="Select a game"
                           optionFilterProp="children"
                           filterOption={(input, option) =>
                               option.children.toLowerCase()
                                     .indexOf(input.toLowerCase()) >= 0
                           }
                           onChange={(input) => setData(findGame(input))}
                       >
                         <Option value="1803">Red Dead Redemption 2</Option>
                         <Option value="1901">Grand Theft Auto V</Option>
                         <Option value="2230">Minecraft</Option>
                       </Select>
                     </div>
                   }
               pagination={{pageSize: 20}}
               size='default'
               scroll={{y: 800, x: '1vw'}}
               columns={columns}
               dataSource={data}
        />
    );
  }
}

export default GameLeaderboard2;
