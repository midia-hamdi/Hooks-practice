import react, {useState, useEffect} from 'react'

export default function Counter(){

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    useEffect(() => {
        document.title = `You Clicked ${count} Times!`
    })
    return (
        <>
            <h1>You Clicked {count} Times!</h1>
            <input type="number" value={step} onChange={(event) => setStep(parseInt(event.target.value))}/>
            <button onClick={() => setCount(count + step)}>Click me</button>
        </>
    )
}