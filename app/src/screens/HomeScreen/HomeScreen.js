import * as React from 'react';
import {bindActionCreators} from 'redux';
import {View} from 'react-native';
import {callSongsApi} from '../../redux/actions/homescreen.actions';
import Songs from '../../components/songsList';
import Loader from '../../components/Loader';
import {styles} from './homescreen.styles';
import {connect} from 'react-redux';

const App = props => {
  const {getSongs, isLoading} = props;
  React.useEffect(() => {
    getSongs();
  }, [getSongs]);

  return (
    <View style={styles.mainContainer}>
      <Songs />
      {isLoading && (
        <View style={styles.loaderView}>
          <Loader color={'black'} />
        </View>
      )}
    </View>
  );
};
function mapStateToProps({HomeScreenReducer}) {
  return {
    data: HomeScreenReducer.data,
    isError: HomeScreenReducer.isError,
    isLoading: HomeScreenReducer.isLoading,
  };
}
function mapDispatchToProps(dispatch) {
  return {getSongs: bindActionCreators(callSongsApi, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
