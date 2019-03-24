import { connect } from 'react-redux';
import React from 'react';
import EditProfile from './edit_profile';


const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[state.session.id];

    return ({
        user: user,
        errors: state.errors.user
    });
};

const mapDispatchToProps = dispatch => {
    return ({
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);