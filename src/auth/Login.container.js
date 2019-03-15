import { connect } from 'react-redux';
import LoginComponent from './Login.component';

const mapDispatchToProps = dispatch => ({
    onSignIn: values => {
        console.log(values);
    }
});

export default connect(null, mapDispatchToProps)(LoginComponent);