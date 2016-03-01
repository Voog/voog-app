import React from 'react';
import styles from './ProjectView.module.css';
import Moment from 'moment';
import AutoRenew from 'react-icons/lib/md/autorenew';

export default class ProjectView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {project} = this.props;
    let folders = Object.keys(project.get('files').toJS());
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>{project.get('host')}</div>
          <RefreshButton className={styles.refreshbutton} handleRefresh={::this.props.loadProjects} />
          <div className={styles.pushbutton}>Push</div>
          <div className={styles.pullbutton}>Pull</div>
        </div>
        <div className={styles.files}>
          <table className={styles.filelist}>
            {folders.map((folder, idx) => {
              return (
                <FolderRow className={styles.folderrow} key={`${folder}`} folder={folder} >
                  {project.get('files').get(folder).map((item, idx) => {
                    return <FileRow key={idx} data-folder={folder} file={item} />;
                  })}
                </FolderRow>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

class FolderRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggle() {
    this.setState({expanded: !this.state.expanded});
  }

  headingText() {
    let {expanded} = this.state;
    let {folder} = this.props;
    let childrenLength = this.props.children.count() || 0;

    return (
      <span>
        <span className={styles.expandedIcon}>{expanded ? '—' : '+'}</span>
        <span className={styles.folderName}>{folder}</span>
        <span className={styles.childrenLength}>({childrenLength})</span>
      </span>
    );
  }

  render() {
    let {folder} = this.props;
    let {expanded} = this.state;

    return (
      <tbody>
        <tr>
          <td colSpan={expanded ? 1 : 2}>
            <p className={styles.folderheading} onClick={::this.toggle}>
              {this.headingText()}
            </p>
          </td>
          {expanded ? <td className={styles.fileheader}>Last update</td> : null}
        </tr>
        {this.state.expanded ? this.props.children : null}
      </tbody>
    );
  }
}

class FileRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {file} = this.props;
    return (
      <tr className={styles.filerow}>
        <td width="350">{file.get('file')}</td>
        <td><span>{Moment(file.get('updatedAt')).fromNow()}</span></td>
      </tr>
    );
  }
}

class RefreshButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingTimeout: null,
      loading: false
    };
  }

  refresh() {
    clearTimeout(this.state.loadingTimeout);

    this.props.handleRefresh();

    this.setState({
      loading: true,
      loadingTimeout: setTimeout(() => {
        clearTimeout(this.state.loadingTimeout);
        this.setState({
          loading: false,
          loadingTimeout: null
        });
      }, 2000)
    });
  }

  render() {
    let loaderClass = `${styles.refreshbutton} ${this.state.loading ? 'refreshLoading' : ''}`;
    return (
      <div onClick={() => {::this.refresh();}} className={loaderClass}>
        <AutoRenew />
      </div>
    );
  }
}
