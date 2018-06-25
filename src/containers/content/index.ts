import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Content} from './content';
import {getUsersPending} from '../../store/actions/users.action';
import {IStore} from '../../store';

const mapStateToProps = (state: IStore) => ({
    searchTerm: state.searchTerm,
    users: state.users,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUsers: () => dispatch(getUsersPending())
});

// TODO why any ??
export default connect(mapStateToProps, mapDispatchToProps)(Content as any);