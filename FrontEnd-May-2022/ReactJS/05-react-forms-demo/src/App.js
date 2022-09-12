import { useState } from 'react';
import './App.css';

function App() {
	const [values, setValues] = useState({
		username: '',
		password: '',
		age: '',
		bio: '',
		gender: '',
		userType: 'corporate',
		tac: false,
	});

	const changeHandler = (e) => {

		setValues(state => ({
			...state,
			[e.target.name]: e.target.value
		}));
	};

	const checkboxChangeHandler = (e) => {

		setValues(state => ({
			...state,
			[e.target.name]: !state[e.target.name]
		}));
	};


	const submitHandler = (e) => {
		e.preventDefault();

		// let values = Object.fromEntries(new FormData(e.target));

		console.log(values);
	};


	return (
		<div className="App">
			<header className="App-header">
				<form onSubmit={submitHandler}>
					<div>
						<label htmlFor="username">Username</label>
						<input
							id="username"
							type="text"
							name="username"
							onChange={changeHandler}
							value={values.username}
						/>
					</div>

					<div>
						<label htmlFor="password">Password</label>
						<input id="password" type="password" name="password" value={values.password} onChange={changeHandler} />
					</div>

					<div>
						<label htmlFor="age">Age</label>
						<input id="age" type="number" name="age" value={values.age} onChange={changeHandler} />
					</div>

					<div>
						<label htmlFor="bio"></label>
						<textarea name="bio" id="bio" cols="30" rows="10" value={values.bio} onChange={changeHandler} />
					</div>

					<div>
						<label htmlFor="gender">Gender: </label>
						<select name="gender" id="gender" value={values.gender} onChange={changeHandler}>
							<option value="m">Male</option>
							<option value="f">Female</option>
						</select>
					</div>




					<div>
						<label htmlFor="individual-user-type">Individual: </label>
						<input type="radio" name="userType" value="individual" id="individual-user-type" onChange={changeHandler} checked={values.userType === 'individual'} />
						<label htmlFor="corporate-user-type">Corporate: </label>
						<input type="radio" name="userType" value="corporate" id="corporate-user-type" onChange={changeHandler} checked={values.userType === 'corporate'} />
					</div>

					<div>
						<label htmlFor="tac">Terms and Conditions: </label>
						<input type="checkbox" id="tac" name="tac" checked={values.tac} onChange={checkboxChangeHandler} />
					</div>

					<div>
						<input type="submit" value="Login" />
					</div>

				</form>
			</header>
		</div>
	);
}

export default App;
