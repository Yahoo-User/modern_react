import type { FormEvent, ChangeEvent } from "react"
import { useCallback, useState } from "react"

import { Title } from "../components"


/**
 * React Hook "useMemo" cannot be called at the top level.
 * React Hooks must be called in a React function component or a custom React Hook function.    <--- ***
 * 
 * const jobTitles3 = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle), [])
 */

// Functional Component.
export default
function BasicForm(): JSX.Element {
    // console.clear()
    console.group("●●● (src/pages/BasicForm) ●●●")
    
    // -----------------------

    const [ name, setName ] = useState<string>('')
    console.log("1. name(%s), setName(%s)", name, setName)

    // -----------------------

    const [ email, setEmail ] = useState<string>('')
    console.log("2. email(%s), setEmail(%s)", email, setEmail)

    // -----------------------

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        // console.debug("onSubmit(", e, ") invoked.") // SyntheticEvent
        e.preventDefault()  // * Very Important *

        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)

        alert(JSON.stringify(Object.fromEntries(formData), null, 4))
    }, [ name, email ])
    
    // console.log("3. onSubmit: %s", onSubmit)

    // -----------------------

    const onReset = useCallback((e: FormEvent<HTMLFormElement>) => {
        // console.debug("onReset(", e, ") invoked.")  // SyntheticEvent
        e.preventDefault()  // * Very Important *
        
        setName('')
        setEmail('')
    }, [])

    // -----------------------

    const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => 
            // setName(notUsed => e.target.value)     // OK
            // setName(_ => e.target.value)           // OK
            setName(e.target.value)                // OK
        , [])
        
    // console.log("4. onChangeName: %s", onChangeName)

    // -----------------------

    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => 
            // setEmail(notUsed => e.target.value)     // OK
            // setEmail(_ => e.target.value)           // OK
            setEmail(e.target.value)                // OK
        , [])
        
    // console.log("5. onChangeEmail: %s", onChangeEmail)

    // -----------------------
    console.groupEnd()
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-3xl italic text-center">BasicForm</Title>
            
            <div className="flex justify-center mt-4">
                <form onSubmit={ onSubmit } onReset={ onReset }>
                    <div className="form-control">
                        <label htmlFor="name" className="label">
                            <span className="text-base italic label-text">1. Username</span>
                        </label>
                        
                        <input type="text" value={name} onChange={onChangeName} id="name"
                            placeholder="Enter your name" className="input input-primary"/>
                    </div>
                    
                    <div className="mt-1 form-control">
                        <label htmlFor="email" className="label">
                            <span className="text-base italic label-text">2. Email</span>
                        </label>
                        
                        <input type="email" value={email} onChange={onChangeEmail} id="email"
                            placeholder="Enter your email" className="input input-primary"/>
                    </div>
                    
                    <div className="flex justify-center mt-4">
                        <input type="submit" value="Submit" className="w-1/2 btn btn-sm btn-primary" />
                        <input type="reset"  value="Reset" className="w-1/2 ml-1 btn btn-sm" />
                    </div>
                </form>
            </div>
        </section>
    )
} // BasicForm

