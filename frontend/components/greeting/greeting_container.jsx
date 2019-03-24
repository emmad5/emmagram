import {logout} from '../../actions/session_actions';
import Greeting from './greeting';
import {connect} from 'react-redux';

const mapStateToProps = ({ session, entities: { users }}) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Greeting);