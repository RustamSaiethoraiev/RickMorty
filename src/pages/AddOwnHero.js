import React, { useState } from 'react'



function AddOwnHero() {
    const [displayToggle, setDisplayToggle] = useState(true)
    return (
        <>
            <h1>AddOwnHero</h1>
            <form>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </form>
            {displayToggle && (
                <h1>Toggle text</h1>
            )}
        </>
    )
}
export default AddOwnHero