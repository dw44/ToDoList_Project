import {Project} from './project';

const store = window.localStorage;

export const allProjects = (function() {
  const projects = [new Project('Default')];
  const addProject = title => projects.push(new Project(title));
  return {
    projects,
    addProject
  };
})();