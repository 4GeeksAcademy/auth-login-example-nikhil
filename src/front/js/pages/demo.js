import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Demo = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate();

	const onSubmit = () => {
		if(email === '') {
			alert(' Email is Empty!')
		} else if(password === ''){
			alert('Password is empty!')
		} else {
			fetch(`https://nikhilmaguwala-fau-upgraded-waddle-vj7x7xgjpg4cp4gg-3001.preview.app.github.dev/api/login`, { 
				method: "POST",
				headers: { 
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }) 
			})
			.then((res) => res.json())
			.then((result) => {
				console.log('Token is Here =====>', result);
				localStorage.setItem("jwt-token", result.token);
				alert('You are logged in!')
				navigate('/')
			}).catch((err) => {
				console.log(err);
			})
		}
	}

	return (
		<div className="container">
			<div class="mb-3">
				<label for="formGroupExampleInput" class="form-label">Example label</label>
				<input 
					type="text" 
					class="form-control" 
					id="formGroupExampleInput" 
					placeholder="Example input placeholder"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div class="mb-3">
				<label for="formGroupExampleInput2" class="form-label">Another label</label>
				<input 
					type="password" 
					class="form-control" 
					id="formGroupExampleInput2" 
					placeholder="Another input placeholder"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div class="col-12">
				<button type="submit" class="btn btn-primary" onClick={onSubmit}>Sign in</button>
			</div>
		</div>
	);
};
