import { connect } from 'react-redux';
import HeaderComponent from './Header.component';

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(HeaderComponent);