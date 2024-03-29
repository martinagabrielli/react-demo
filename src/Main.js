import React, { useState, useEffect } from 'react'
import List from './List'

function Main() {
    const [counter, setCounter] = useState(0)
    const [colour, setColour] = useState('#FFFFFF')

    useEffect(() => {
        console.log('hello!')
    }, [])
    
    const generateCombination = () => {
        const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let newColour = ''
        for(let i = 1; i <= 6; i++) {
            newColour += hexDigits[Math.floor(Math.random() * hexDigits.length)]
        }
        newColour = `#${newColour}`
        setColour(newColour)
        setCounter(prev => prev + 1)
    }

    return (
        <main style={{background: colour}}>
            <section className="counter">
                <p>You changed colour</p>
                <div id="display">{counter}</div>
                <p>Times</p>
            </section>
            <section>
                <button className="change-colour" onClick={generateCombination}>Change Colour</button>
                <div className="hex-colour">The hex colour genereted is {colour} 🎨</div>
            </section>
            <List />
        </main>
    )
}

export default Main