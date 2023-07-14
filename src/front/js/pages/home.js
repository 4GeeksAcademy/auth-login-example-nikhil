import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [msg, setMsg] = useState('Loading message from the backend (make sure your python backend is running)...')

	const getTasks = () => {
		const token = localStorage.getItem('jwt-token');
		if(token) {
			fetch(`https://nikhilmaguwala-fau-upgraded-waddle-vj7x7xgjpg4cp4gg-3001.preview.app.github.dev/api/tasks`, { 
				method: "GET",
				headers: { 
					"Content-Type": "application/json",
					"Authorization": "Bearer " + token
				},
			})
			.then((res) => res.json())
			.then((result) => {
				console.log('Response is here =====>', result);
				setMsg(result.email)
			}).catch((err) => {
				console.log(err);
			})
		} else {
			alert(' You are not logged in!')
		}
	}

	const logOut = () => {
		localStorage.removeItem('jwt-token')
	}

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">
				{msg}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
			<button onClick={getTasks}>
				Get Tasks
			</button>
			<button onClick={logOut}>
				Log Out
			</button>
		</div>
	);
};
