import react, {useState} from 'react'

export default function Counter(){

    const [count, setCount] = useState(0);
    return (
        <>
            <h1>You Clicked 10 Times!</h1>
            <input type="number" value="1" />
            <button>Click me</button>
        </>
    )
}