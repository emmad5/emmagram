import { openModal, closeModal } from '../../actions/modal_actions';
import {fetchUser} from '../../actions/user_actions';
import Profile from './profile';
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users } }) => {
    const currentUser  = users[session.id];
    let images = [];

    if (currentUser.images) {
        images = Object.values(currentUser.images);
    }
    return ({
        currentUser: users[session.id],
        images
    });
};

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);