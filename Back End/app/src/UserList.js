import React, {Component} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from './AppNavbar';
import {Link} from 'react-router-dom';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {user: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('api/user')
            .then(response => response.json())
            .then(data => this.setState({user: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/api/user/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedUsers = [...this.state.user].filter(i => i._id !== id);
            this.setState({user: updatedUsers});
        });
    }

    render() {
        const {user, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const userList = user.map(user => {
            return <tr key={user._id}>
                <td style={{whiteSpace: 'nowrap'}}>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/user/" + user._id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(user._id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/user/new">Add User</Button>
                    </div>
                    <h3>User List</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">username</th>
                            <th width="20%">firstName</th>
                            <th width="20%">lastName</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {userList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default UserList;