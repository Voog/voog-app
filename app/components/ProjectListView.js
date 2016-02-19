import React, {Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { remote } from 'electron';
import ProjectListItem from './ProjectListItem';
import styles from './ProjectListView.module.css';

export default class ProjectListView extends Component {

  static propTypes = {
    projects: PropTypes.array.isRequired,
    addProject: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {directory: null, host: '', token: '', name: ''};
  }

  handleAddClick() {
    if (this.state.directory) {
      this.props.addProject(this.state.host, this.state.token, this.state.directory, this.state.name);
      this.state = {host: '', token: '', name: ''};
      return;
    }

    remote.dialog.showOpenDialog({properties: ['openDirectory']}, (directories) => {
      if (directories) {
        this.setState({directory: directories[0]});
      } else {
        this.setState({directory: null});
      }
    });
  }

  render() {
    let {projects} = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.listContainer}>
          {
            projects.map((project, idx) => {
              return (<ProjectListItem key={idx} project={project} />);
            })
          }
        </div>
        <div className={styles.addContainer}>
          {
            this.state.directory ? (
              <div>
                <div>{this.state.directory}</div>
                <input type="text" placeholder="Host" ref="host" value={this.state.host} onChange={(e) => { this.setState({host: e.target.value}); }} />
                <input type="text" placeholder="Token" ref="token" value={this.state.token} onChange={(e) => { this.setState({token: e.target.value}); }} />
                <input type="text" placeholder="Site name" ref="name" value={this.state.name} onChange={(e) => { this.setState({name: e.target.value}); }} />
              </div>
            ) : null
          }
          <button onClick={this.handleAddClick.bind(this)}>Add project</button>
        </div>
      </div>
    );
  }
}
