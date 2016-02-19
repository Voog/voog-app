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
          <table className={styles.filelist}>
            {
              project.get('files').map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.get('file')}</td>
                    <td>{item.get('size')}</td>
                  </tr>
                )
              })
            }
          </table>
        </div>
      </div>
    );
  }
}
