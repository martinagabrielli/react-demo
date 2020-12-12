import React, { useState } from 'react'


function Main() {
    const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

    const [storage, setStorage] = useState(0)
    const [colour, setColour] = useState('#FFFFFF')

    const increment = (prev) => {
        setStorage(prev => prev + 1)
    }
    
    const generateCombination = () => {
        let newColour = ''
        for(let i = 1; i <= 6; i++) {
            newColour += hexDigits[Math.floor(Math.random() * hexDigits.length)]
        }
        newColour = `#${newColour}`
        setColour(newColour)
    }

    return (
        <main style={{background: colour}}>
            <section>
                <h1>Counter</h1>
                <div id="display">{storage}</div>
                <button className="counter" onClick={increment}>Click</button>
            </section>
            <section>
                <button className="change-colour" onClick={generateCombination}>Change Colour</button>
                <div className="hex-colour">The hex colour genereted is {colour} 🎨</div>
            </section>
        </main>
    )
}

export default Main