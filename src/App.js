
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';


function App() {
  return (
    
    <div>
    <header className='bg-white flex'>
      <div className='text-3xl font-bold text-blue-700 p-5 px-12'>easemyhood</div>
      <div className='inline p-5 font-bold text-7px'>Location
      <p className='text-1px font-thin'>Pune, Maharastra, India ▼</p></div>
      <div className='p-4 flex'>
        <form className='flex mx-10'>
        <Dropdown className='bg-blue-700 font-semibold w-36 p-1 text-white rounded-s-xl'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <p className='mx-3 font-si'>
        Shop by ▼  <p>Category </p>
      </p>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          <input className='border-grey border-solid border-2 w-80 rounded-e-xl' type='text' ></input>
        </form>
      </div>
      <button className='mx-20'><b>Login</b></button>
      <button className='bg-blue-600 text-white w-24 h-11 my-7 rounded-2xl'>🛒 My Cart</button>
      </header>
    </div>
  );
}

export default App;
