import axios from 'axios';

export const ColorDataLoader = () => {
	return ['green', 'red', 'blue', 'yellow'];
}

export const EmployeeDataLoader = async () => {
	const url = 'https://edwardtanguay.vercel.app/share/employees.json';
	const response = await axios.get(url);
	const employees = response.data;
	return employees;
}



