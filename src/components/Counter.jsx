import react, {useState} from 'react'

export default function Counter(){

    const [count, setCount] = useState(0);
    return (
        <>
            <h1>You Clicked {count} Times!</h1>
            <input type="number" value="1" />
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </>
    )
}