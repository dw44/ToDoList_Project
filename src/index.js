import {allProjects} from './modules/projects';
import {Project} from './modules/project';

const store = localStorage;

//  Test
allProjects.addProject('Axe');

store.setItem('projects', JSON.stringify(allProjects));
for (const proj of JSON.parse(store.getItem('projects')).projects) {
    const rebuilt = Project.rebuild(proj.title, proj._id, [1, 2, 3], false);
    console.log(rebuilt);
} // project reconstruction working