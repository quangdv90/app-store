import { connect } from 'react-redux';
import { _signoutAction } from '../auth/Auth.action';
import HeaderComponent from './Header.component';

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    onSignout: (e) => {
        e.preventDefault();
        dispatch(_signoutAction());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);