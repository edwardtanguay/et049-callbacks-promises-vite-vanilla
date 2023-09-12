import axios from 'axios';
import { IEmployee } from './interfaces';

export const ColorDataLoader = () => {
	return ['green', 'red', 'blue', 'yellow'];
}

export const EmployeeDataLoader = (callback: (employees: IEmployee[]) => void) => {
	(async () => {
		const url = 'https://edwardtanguay.vercel.app/share/employees.json';
		const response = await axios.get(url);
		const employees = response.data;
		callback(employees);
	})();
}

export const EmployeeDataLoader2 = async () => {
	const url = 'https://edwardtanguay.vercel.app/share/employees.json';
	const response = await axios.get(url);
	const employees = response.data;
	return employees;
}



