import React, { useEffect,useState } from 'react'
import Output from './Output'

const Print = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        const savedInputs = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));
        setState(savedInputs)

        const handleBeforeUnload = () => {
            Object.keys(localStorage).forEach(key => {
                localStorage.removeItem(key)
            });
        };
        window.print()
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
    return (
        <div>
            {state.map((recipt) => {
               return  <Output description={recipt.description} heading={recipt.heading} name={recipt.name} />
            })}
        </div>
    )
}

export default Print