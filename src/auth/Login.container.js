import { connect } from 'react-redux';
import { _signinAction } from './Auth.action';
import LoginComponent from './Login.component';

const mapStateToProps = state => ({
    signin: state.auth.signin
});

const mapDispatchToProps = dispatch => ({
    onSignIn: values => {
        dispatch(_signinAction(values));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);