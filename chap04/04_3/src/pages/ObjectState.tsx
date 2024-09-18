import type { FormEvent, ChangeEvent } from "react"
import { useCallback, useState } from "react"
import { Title } from "../components"


/**
 * React Hook "useMemo" cannot be called at the top level.
 * React Hooks must be called in a React function component or a custom React Hook function.    <--- ***
 * 
 * const jobTitles3 = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle), [])
 */

type FormType = {
    name : string;
    email: string;
}

// ----------------------------------------

// Functional Component.
export default
function ObjectState(): JSX.Element {
    // console.clear()
    console.group("●●● (src/pages/ObjectState) ●●●")

    const [form, setForm] = useState<FormType>({ name: '', email: '' })
    // console.log("1. form(", form, ")")

    // -----------------------

    // interface FormEvent<T = Element> extends SyntheticEvent<T> {}
    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()      // *Very Important*
        
        alert( JSON.stringify(form, null, 4) )
    }, [form])
    
    // console.log("2. onSubmit: %s", onSubmit)

    // -----------------------

    // interface FormEvent<T = Element> extends SyntheticEvent<T> {}
    const onReset = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()      // *Very Important*
        setForm({ name: '', email: '' })
    }, [])

    // -----------------------

    const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        // 1. Invocation of "setter" of the "useState" hook.                              (***)
        // 2. Deep copy and the specified property value change occured simultaneously.   (***)
        // 3. The "return" statement to return an "object" must use "round bracket, ()"
        //    to enclose a "brace({})" which means an object.                             (***)
        setForm(form => ({...form, name: e.target.value}))
    }, [])  // 4. The "form" would *NOT* be inserted into "DL".                           (***)
    
    // console.log("3. onChangeName: %s", onChangeName)

    // -----------------------

    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        // 1. Invocation of "setter" of the "useState" hook.                              (***)
        // 2. Deep copy and the specified property value change occured simultaneously.   (***)
        // 3. The "return" statement to return an "object" must use "round bracket, ()"
        //    to enclose a "brace({})" which means an object.                             (***)
        setForm(form => ({...form, email: e.target.value}))
    }, [])  // 4. The "form" would *NOT* be inserted into "DL".                           (***)
    
    // console.log("4. onChangeEmail: %s", onChangeEmail)
    
    // -----------------------
    console.groupEnd()
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-2xl text-center">ObjectState</Title>

            <div className="flex justify-center mt-4">
                <form onSubmit={onSubmit} onReset={onReset}>
                    <div className="form-control">
                        <label htmlFor="name" className="label">
                            <span className="text-lg italic label-text">1. Username</span>
                        </label>

                        <input
                            type="text"
                            value={form.name}
                            onChange={onChangeName}
                            id="name"
                            placeholder="Enter your name"
                            className="input input-primary" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="email" className="label">
                            <span className="text-lg italic label-text">2. Email</span>
                        </label>

                        <input
                            type="email"
                            value={form.email}
                            onChange={onChangeEmail}
                            id="email"
                            placeholder="Enter your email"
                            className="input input-primary" />
                    </div>

                    <div className="flex justify-center mt-4">
                        <input type="submit" value="Submit" className="w-1/2 btn btn-sm btn-primary" />
                        <input type="reset" value="Cancer" className="w-1/2 ml-1 btn btn-sm" />
                    </div>
                </form>
            </div>
        </section>
    )
} // ObjectState

