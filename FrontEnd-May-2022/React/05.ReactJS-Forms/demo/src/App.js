import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
    const infoRef = useRef();

    const [values, setValues] = useState({
        username: '',
        password: '',
        age: '',
        bio: '',
        gender: 'f',
        userType: 'corporate',
        tac: false,
        egn: '',
        eik: '',
    });

    useEffect(() => {
        if (values.username && values.age) {
            infoRef.current.value = `${values.username} - ${values.age}`;
        }
    }, [values.username, values.age]);


    // const [username, setUsername] = useState('GoshoDefaulta');
    // const [password, setPassword] = useState('');
    // const [age, setAge] = useState('');
    // const [bio, setBio] = useState('');
    // const [gender, setGender] = useState('f');
    // const [userType, setUserType] = useState('corporate');
    // const [tac, setTac] = useState(true);

    const changeHandler = (e) => {

        setValues(state => ({
            ...state,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }));
    };

    const checkboxChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.checked
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(values);

        // let values = Object.fromEntries(new FormData(e.target));

        // console.log(values);

        // console.log('username: ', username);
        // console.log('password: ', password);
        // console.log('age: ', age);
    };

    // const usernameChangeHandler = (e) => {
    //     setUsername(e.target.value);
    // };

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            onChange={changeHandler}
                            value={values.username}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password: </label>
                        <input id="password" type="password" name="password" value={values.password} onChange={changeHandler} />
                    </div>

                    <div>
                        <label htmlFor="age">Age: </label>
                        <input id="age" type="number" name="age" value={values.age} onChange={changeHandler} />
                    </div>

                    <div>
                        <label htmlFor="bio">Bio:</label>
                        <textarea name="bio" id="bio" cols="30" rows="10" value={values.bio} onChange={changeHandler} ></textarea>
                    </div>

                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <select name="gender" id="gender" value={values.gender} onChange={changeHandler}>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="individual-user-type">Individual:</label>
                        <input type="radio" name="userType" id="individual-user-type" value="individual" onChange={changeHandler} checked={values.userType === 'individual'} />
                        <label htmlFor="corporate-user-type">Corporate:</label>
                        <input type="radio" name="userType" id="individual-user-type" value="corporate" onChange={changeHandler} checked={values.userType === 'corporate'} />
                    </div>

                    <div>
                        <label htmlFor="identifier">{values.userType === "individual" ? "EGN" : "EIK"}</label>

                        {values.userType === 'individual'
                            ? <input type="text" id="identifier" name="egn" value={values.egn} onChange={changeHandler} />
                            : <input type="text" id="identifier" name="eik" value={values.eik} onChange={changeHandler} />
                        }
                    </div>

                    <div>
                        <label htmlFor="tac">Terms and Conditions:</label>
                        <input type="checkbox" name="tac" id="tac" checked={values.tac} onChange={changeHandler} />
                    </div>

                    <div>
                        <input type="submit" value="Login" disabled={!values.tac} />
                    </div>

                    <div>
                        <label htmlFor="uncontrolled-input">Uncrontrolled Input</label>
                        <input type="text" name="uncontrolled" id="uncontrolled-input" ref={infoRef} />
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;
