import { remote } from 'electron';

const Kit = remote.require('kit-core');

export const LOAD_PROJECTS = 'LOAD_PROJECTS';

export const ADD_PROJECT = 'ADD_PROJECT';

export function loadProjects() {
  return {
    type: LOAD_PROJECTS,
    projects: Kit.sites.names().map(name => {
      var site = Kit.sites.byName(name);
      site.files = Kit.sites.filesFor(name);
      return site;
    })
  };
}

export function addProject(host, token, dir, name = '') {
  Kit.sites.add({host, token, name, dir});

  return loadProjects();
}
