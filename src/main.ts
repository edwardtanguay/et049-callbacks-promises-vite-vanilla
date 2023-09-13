import './style.css';
import { EmployeeDataLoader, EmployeeDataLoader5 } from './dataLoader';
import { IEmployee } from './interfaces';

document.querySelector<HTMLButtonElement>('#btnChange')!.addEventListener('click', () => {
	EmployeeDataLoader5((employees: IEmployee[]) => {
		document.querySelector<HTMLSpanElement>('#employeeNumber')!.innerHTML = `
	${employees.length}
`
	});
})

EmployeeDataLoader((employees: IEmployee[]) => {
	document.querySelector<HTMLSpanElement>('#employeeNumber')!.innerHTML = `
	${employees.length}
`
});
