import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProjectView from '../components/ProjectView';
import * as ProjectActions from '../actions/projects';

function mapStateToProps(state, props) {
  return {
    project: state.projects.get(props.params.project).toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProjectActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);
