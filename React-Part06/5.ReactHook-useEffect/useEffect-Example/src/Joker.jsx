import { useState,useEffect } from "react";

export default function Joker() {
    let [joke,setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () =>{
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({ setup:jsonResponse.setup , punchline:jsonResponse.punchline });
    };

    /* Note : Inside useEffect hook we write a function called getFirstJoke in different way bcz it gives warning on console so they suggested us to write in this way. */
    useEffect( () =>{
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            setJoke({ setup:jsonResponse.setup , punchline:jsonResponse.punchline });
        };
        getFirstJoke();
    },[]);

    return (
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}