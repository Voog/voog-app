import React from 'react';
import { Link } from 'react-router';
import styles from './ProjectListItem.module.css';

export default class ProjectListItem extends React.Component {
  render() {
    return (
      <Link to={`/projects/${this.props.project.host}`} className={styles.container} activeClassName={styles.containeractive}>
        {this.props.project.host}
      </Link>
    );
  }
}
