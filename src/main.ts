import './style.css';
import { ColorDataLoader } from './dataLoader';

const colors = ColorDataLoader();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1>Callback/Promises</h1>
  <p>The colors are: ${colors.join(', ')}</p>
  </div>
`