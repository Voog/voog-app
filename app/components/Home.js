import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.module.css';
import ProjectList from '../containers/ProjectList';
import ProjectView from './ProjectView';

export default class Home extends Component {

  render() {
    return (
      <div className={styles.container}>
        <ProjectList />
        <ProjectView />
      </div>
    );
  }
}
