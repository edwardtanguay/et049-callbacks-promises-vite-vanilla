import axios from 'axios';
import { IEmployee } from './interfaces';

export const ColorDataLoader = () => {
	return ['green', 'red', 'blue', 'yellow'];
}

export const EmployeeDataLoaderOLD = (callback: (employees: IEmployee[]) => void) => {
	setTimeout(() => {
		callback([
			{
				firstName: 'fff',
				lastName: 'lll'
			},
			{
				firstName: 'fff',
				lastName: 'lll'
			},
			{
				firstName: 'fff',
				lastName: 'lll'
			}
		])
	}, 1000)
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




export const EmployeeDataLoader5 = (callback: (employees: IEmployee[]) => void) => {
	const getRandomNumber = (begin:number, end:number) => {
		const range = end - begin + 1;
		return Math.floor(Math.random() * range) + begin;
	};

	const emps: IEmployee[] = []
	for (let i = 1; i <= getRandomNumber(3,10); i++) {
		emps.push(
			{
				firstName: 'fff',
				lastName: 'lll'
			},
		)
	}

	setTimeout(() => {
		callback(emps);
	}, 1000)
}
