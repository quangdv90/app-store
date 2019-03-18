import {connect} from 'react-redux';
import ProfileEditComponent from './ProfileEdit.component';

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(ProfileEditComponent);