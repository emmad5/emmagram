import {logout} from '../../actions/session_actions';
import {openModal, closeModal} from '../../actions/modal_actions'
import Greeting from './greeting';
import {connect} from 'react-redux';

const mapStateToProps = ({ session, entities: { users }}) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Greeting);