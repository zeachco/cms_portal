import React, {Component} from 'react';
import autobind from 'auto-bind-es5';

import SearchPage from './SearchPage';
import {Link} from 'react-router-dom';

class UserList extends Component {
    constructor(props) {
        super(props);
        autobind(this);

        this.state = {};
    }

    componentDidMount() {
        console.log('Fetch items!');
    }

    render() {
        return (
            <SearchPage>
                <h1>Users</h1>
                <ul>
                    {document.location.href.split('').map((l, i)=>(
                        <li>
                            <Link key={i} to={`/users/${i}`}>{l}{l}{l}{l}{l}{l}{l}{l}{l}{l}{l}{l}{l}{l}  </Link>
                        </li>
                    ))}
                    {document.location.href.split('').map((l, i)=>(
                        <li>
                            <Link key={i} to={`/users/${i}`}>{l}</Link>
                        </li>
                    ))}
                    {document.location.href.split('').map((l, i)=>(
                        <li>
                            <Link key={i} to={`/users/${i}`}>{l}</Link>
                        </li>
                    ))}
                    {document.location.href.split('').map((l, i)=>(
                        <li>
                            <Link key={i} to={`/users/${i}`}>{l}</Link>
                        </li>
                    ))}
                </ul>
            </SearchPage>
        );
    }
}

export default UserList;
