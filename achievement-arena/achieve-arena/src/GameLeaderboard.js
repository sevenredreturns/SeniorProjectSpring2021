import React           from 'react';
import {Select, Table} from 'antd';
const userID = localStorage.getItem('userid');

const columns = [
    {
        title    : 'Rank',
        dataIndex: 'rank',
        key      : 'rank',
    },
    {
        title    : 'Username',
        dataIndex: 'username',
        key      : 'username',
    },
    {
        title    : 'Score',
        dataIndex: 'score',
        key      : 'score',
    }
];

const {Option} = Select;

class GameLeaderboard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { games: [], data: [] };
    }

    componentDidMount()
    {

        fetch('/api/leaderboard').then(response => response.json())
                                 .then(jsonin => this.setState({games: jsonin, data: jsonin[0].scores}));
        //let startstate = this.state.games;
        //this.setState({data: startstate[0].scores})
    }

    findGame = (input) =>
    {
        let copyGameDetails = this.state.games;

        for (const element in copyGameDetails)
        {
            //console.log(copyGameDetails[element]);
            if (copyGameDetails[element].key === parseInt(input))
            {
                //console.log(copyGameDetails[element]);
                return copyGameDetails[element].scores;
            }
        }
        return copyGameDetails[0].scores;
    };

    render()
    {

        return (
            <Table title=
                       {
                           () => <div>
                               <p><b>Global Leaderboards</b></p>
                               <Select
                                   showSearch
                                   allowClear
                                   style={{width: 200}}
                                   placeholder="Pick a Leaderboard"
                                   defaultValue="0"
                                   optionFilterProp="children"
                                   filterOption={(input, option) =>
                                       option.children.toLowerCase()
                                             .indexOf(input.toLowerCase()) >= 0
                                   }
                                   onChange={(input) => this.setState(
                                       {data: this.findGame(input)})}
                               >
                               {this.state.games.map(game => (
                                 <Option key={game.appid}>{game.appid}</Option>
                               ))}
                               </Select>
                           </div>
                       }
                   pagination={{pageSize: 20}}
                   size="default"
                   scroll={{y: 800, x: '1vw'}}
                   columns={columns}
                   dataSource={this.state.data}
            />
        );
    }
}

export default GameLeaderboard;
