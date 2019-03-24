import { openModal, closeModal } from '../../actions/modal_actions'
import Profile from './profile';
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);