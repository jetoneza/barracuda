import { connect } from 'react-redux';
import { connectApi } from 'store/modules/app';

import HomeView from '../components/HomeView'

const mapActionCreators = {
  connectApi,
};

const mapStateToProps = (state) => ({
  app: state.app,
});

export default connect(mapStateToProps, mapActionCreators)(HomeView);


