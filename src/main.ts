import { EmployeeDataLoader } from './dataLoader';
import './style.css';

EmployeeDataLoader((employees) => {
	console.log('main', employees);
	document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
  <div>
  <h1>Callback/Promises</h1>
 <div>There are ${employees.length} employees</div> 
  </div>
`
});

