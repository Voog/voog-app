import React from 'react';
import styles from './ProjectListItem.module.css';

export default class ProjectListItem extends React.Component {
  render() {
    return (
      <div className={styles.container}>{this.props.project}</div>
    );
  }
}
