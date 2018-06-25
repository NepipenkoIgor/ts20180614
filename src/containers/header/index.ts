import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {searchByTerm} from '../../store/actions/search-term.action';
import {Header} from './header';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    search: (term: string) => dispatch(searchByTerm(term))
});

// TODO why any ??
export default connect<any>(null, mapDispatchToProps)(Header as any);