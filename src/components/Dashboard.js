import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import Friend from './Friend';

class Dashboard extends Component {
    state = {
        users: null
    };

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = async () => {
        const url = 'https://randomuser.me/api/?results=10&nat=us';

        const response = await fetch(url);
        const data = await response.json();

        this.setState({ users: data.results });
    }

    render() {
        return (
            <div className = "display: flex; flex-direction: column;">
                <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>Friends</Header.Content>
                </Header>
                {
                    this.state.users && this.state.users.map((user) => (
                        <Friend key={user.id.value} user={user} />
                    ))
                }
            </div>
        )
    }
}

export default Dashboard;