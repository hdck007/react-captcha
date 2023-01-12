import './App.css';
import Captcha from './components/captcha';

function App() {

  const handleChange = (value) => {
    console.log(value);
  }

	return (
		<div className='App'>
			<Captcha
        onChange={handleChange}
      />
		</div>
	);
}

export default App;
