// Transforme os seguintes trechos de código utilizando async/await:

import axios from "axios";

export default async function getUserFromGithub(user) {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
    
        console.log(response.data);
    } catch {
        console.log("Usuário não existe");
    }
}

/* Função original
export default function getUserFromGithub(user) {
	axios
		.get(`https://api.github.com/users/${user}`)
		.then((response) => {
			console.log(response.data);
		})
		.catch((err) => {
			console.log("Usuário não existe");
		});
}
*/ 