import React from 'react';

const ProfileEdit = (props) => {
    const {
        signin: { user }
    } = props.auth;

    console.log(user);

    return (
        <div>
            Profile page
        </div>
    )
}

export default ProfileEdit;
