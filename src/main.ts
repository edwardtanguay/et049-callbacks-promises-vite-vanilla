import './style.css';
import { ColorDataLoader, EmployeeDataLoader } from './dataLoader';
import { IEmployee } from './interfaces';

const colors = ColorDataLoader();
EmployeeDataLoader((employees: IEmployee[]) => {
	document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	<div>
	<h1>Callback/Promises</h1>
	<p>The colors are: ${colors.join(', ')}</p>
	<p>There are ${employees.length} employees</p>
	</div>
`
});
