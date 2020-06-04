import {allProjects} from './modules/projects';

const store = localStorage;




//  Test
allProjects.addProject('Axe');
allProjects.projects[1].addTask('Leshrac', 'Create Imbalance', '03/03/2020', 'High', 'Pending');

store.setItem('projects', JSON.stringify(allProjects));
console.log(JSON.parse(store.getItem('projects')));