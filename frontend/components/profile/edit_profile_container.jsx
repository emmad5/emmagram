import { connect } from 'react-redux';
import React from 'react';
import EditProfile from './edit_profile';
import {update} from '../../actions/user_actions'


const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[state.session.id];

    return ({
        user: user,
        errors: state.errors.user
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        update: (user) => dispatch(update(user))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);