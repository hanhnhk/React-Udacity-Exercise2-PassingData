import React, { Component } from 'react';

export default class UserList extends Component {
    render() {
        const { users } = this.props;
        if (users) {
            return <div>
                <p>Liked By:</p>
                <ul>
                    {users.map((user) => {
                        return <li key={user.id}>{user.name}</li>;
                    })}
                </ul>
            </div>;
        }
        else {
            return <p>None of the current users liked this movie</p>;
        }
    }
}