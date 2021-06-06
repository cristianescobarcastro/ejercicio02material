import { createContext } from 'react'

const contadorContext = createContext({
    counter: 0,
    email: ''
});
export default contadorContext;