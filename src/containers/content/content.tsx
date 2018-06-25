import * as React from 'react';
import './style.css';
import {IUser} from '../../store/reducers/users.reducer';

export interface IProps {
    searchTerm: string;
    users: IUser[];

    getUsers(): void
}

export class Content extends React.Component<IProps> {

    public componentDidMount() {
        this.props.getUsers();
    }

    public render(): JSX.Element {

        const {users, searchTerm}  = this.props;
        return (<div className='container-fluid'>
            {Array.isArray(users) ? users.filter((user: IUser)=>
            `${user.firstName} ${user.surname}`.toLowerCase()
                .includes(searchTerm))
                .map((user:IUser, index: number)=>(
                    <div className='card' key={index}>
                        <img className='card-img-top' src={user.photo}/>
                        <div className='card-body'>
                            <p className='card-text'>{user.firstName} {user.surname}</p>
                        </div>
                    </div>
                ))
            : null}
        </div>);
    }

}