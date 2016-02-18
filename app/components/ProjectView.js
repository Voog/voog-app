import React from 'react';
import styles from './ProjectView.module.css';

export default class ProjectView extends React.Component {
  render() {
    let files = ['style.css', 'pohhjolo.css'];

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>voog.com</div>
          <div className={styles.syncbutton}>Sync</div>
        </div>
        <div className={styles.files}>
          {
            files.map((file, idx) => {
              return <div key={idx}>{file}</div>;
            })
          }
        </div>
      </div>
    );
  }
}
