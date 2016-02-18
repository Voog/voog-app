import React from 'react';
import { Link } from 'react-router';
import ProjectListItem from './ProjectListItem';
import styles from './ProjectList.module.css';

export default class ProjectList extends React.Component {
  render() {
    let projects = ['voog.com', 'galojan.com', 'wysihtml.com', 'edicy.com'];

    return (
      <div className={styles.container}>
        <div className={styles.listContainer}>
          {
            projects.map((project, idx) => {
              return (<ProjectListItem key={idx} project={project} />);
            })
          }
          <ProjectListItem />
        </div>
        <div className={styles.addContainer}>
          <Link to="/">Add project</Link>
        </div>
      </div>
    );
  }
}
