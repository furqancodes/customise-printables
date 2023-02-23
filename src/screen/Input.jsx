import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid"

function Input() {
    const [state, setState] = useState({
        heading: '',
        description: '',
        name: ''
    })
    const [id] = useState(uuidv4())
    useEffect(() => {
        localStorage.setItem(`${id}`, JSON.stringify({ ...state }))

        const handleBeforeUnload = () => {
            localStorage.removeItem(`${id}`)
        }

        window.addEventListener('beforeunload', handleBeforeUnload)

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload)
        }
    }, [state, id])

    return (
        <div className="App">
            <label>heading</label>
            <input
                type={'text'}
                onChange={(e) => {
                    setState({ ...state, heading: e.target.value })

                }}
                value={state.heading}
            />
            <label>description</label>
            <input
                type={'text'}
                onChange={(e) => {
                    setState({ ...state, description: e.target.value })
                }}
                value={state.description}
            />
            <label>name</label>
            <input
                type={'text'}
                onChange={(e) => {
                    setState({ ...state, name: e.target.value })
                }}
                value={state.name}
            />
        </div>
    )
}

export default Input
