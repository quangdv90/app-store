import { connect } from 'react-redux';
import RegisterComponent from './Register.component';
import { _registerUserAction } from './Auth.action';

const mapStateToProps = state => ({
    register: state.auth.register
});

const mapDispatchToProps = dispatch => ({
    onRegisterUser: values => {
        dispatch(_registerUserAction(values));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);