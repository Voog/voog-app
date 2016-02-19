import { remote } from 'electron';

const Kit = remote.require('kit-core');

export const LOAD_PROJECTS = 'LOAD_PROJECTS';

export const ADD_PROJECT = 'ADD_PROJECT';

export function loadProjects() {
  return {
    type: LOAD_PROJECTS,
    projects: Kit.config.sites().map(site => {
      let fileGroups = Kit.sites.filesFor(site.host);

      site.files = ['assets', 'components', 'images', 'javascripts', 'layouts', 'stylesheets'].reduce((memo, group) => {
        memo = memo.concat(fileGroups[group]);
        return memo;
      }, []);

      return site;
    })
  };
}

export function addProject(host, token, dir, name = '') {
  Kit.sites.add({host, token, name, dir});

  return loadProjects();
}
