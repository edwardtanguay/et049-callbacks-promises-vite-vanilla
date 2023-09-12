import './style.css';
import { ColorDataLoader, EmployeeDataLoader } from './dataLoader';

const colors = ColorDataLoader();
const employees = await EmployeeDataLoader();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1>Callback/Promises</h1>
  <p>The colors are: ${colors.join(', ')}</p>
  <p>There are ${employees.length} employees</p>
  </div>
`