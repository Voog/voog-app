import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProjectListView from '../components/ProjectListView';
import * as ProjectActions from '../actions/projects';

function mapStateToProps(state) {
  return {
    projects: state.projects.toList().toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProjectActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListView);
