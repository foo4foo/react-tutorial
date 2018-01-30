import React, {Component} from "react";
import User from "./User";

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                {age: 22, name: 'stefan'},
                {age: 21, name: 'Šonja'}
            ],
            listInfo: 'List'
        };
    }

    /*resetAge() {
        this.state.users.forEach(u => {
           u.age = 20;
        });
    }*/

    resetAge = () => {
        this.state.users.forEach(u => {
           u.age = 20;
        });
    };

    render() {
        setTimeout(() => {
                this.setState({listInfo: 'Users list'});
                this.state.users.forEach(u => {
                   u.age += 10;
                });
        }, 200);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.state.listInfo}</h1>
                {
                    this.state.users.map((user, i) => {
                        return <User key={i} age={user.age}>{user.name}</User>
                    })
                }
                <br/>
                <button type="reset" onClick={this.resetAge}>Reset age</button>
            </div>
        )
    }
}

export default Users;