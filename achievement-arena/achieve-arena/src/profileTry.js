import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {Col, Layout, Row} from 'antd';

const {Header, Footer, Content} = Layout;

class profileTry extends Component {

    constructor(props) {
        super(props);
        this.state = {user: [], isLoading: true};
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/user/60668c3442e4de3aa408e603').then(response => response.json())
            .then(data => this.setState({user: data, isLoading: false}));
    }

    render() {
        const {user, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <Layout>
                <Content>
                    <Container fluid>
                        <div>
                            <ul>
                                <div class="container" name="Basics">
                                    <Row gutter={16}>
                                        <Col className="gutter-row" span={6}>
                                            {user.username}
                                        </Col>
                                        <Col className="gutter-row" span={3}>
                                            {user.firstName}
                                        </Col>
                                        <Col className="gutter-row" span={3}>
                                            {user.lastName}
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col className="gutter-row" span={6}>
                                        </Col>
                                    </Row>
                                </div>
                                <div class="container" name="Description">
                                </div>
                                <div class="container" name="Games">
                                    <p>{user.ownedGames.map(game => <div>{game.name}</div>)}</p>
                                </div>
                                <div>
                                    <li>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </Container>
                </Content>
            </Layout>
        );
    }
}

export default profileTry