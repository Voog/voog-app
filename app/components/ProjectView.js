import React from 'react';
import styles from './ProjectView.module.css';

export default class ProjectView extends React.Component {
  render() {
    let {project} = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>{project.get('host')}</div>
          <div className={styles.syncbutton}>Sync</div>
        </div>
        <div className={styles.files}>
          {
            project.get('items').toList().map((item, idx) => {
              return <div key={idx}>{item.get('name')}</div>;
            })
          }
        </div>
      </div>
    );
  }
}
