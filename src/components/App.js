// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [loaded, setLoaded] = useState(false);
    const [image, setImage] = useState('');

    const url = 'https://dog.ceo/api/breeds/image/random';

    useEffect(() => {
        fetch(url)
        .then(resp => resp.json())
        .then(image => {
            setImage(image);
            setLoaded(true);
        })
    }, [])



    return (
        <div>
            {!loaded ? <p>Loading...</p> : <img src={image.message} alt="A Random Dog"/>}
        </div>
    )
    
}

export default App;

