import { useMemo } from "react"

import { Title, Avatar } from "../components";
import * as D from "../data"


// Functional Component.
export default
function Memo() {
    // console.clear()
    // console.group("●●● (src/pages/Memo) ●●●")
    // console.groupEnd()

    // ---------------------------------
    // Step1. Create One-time Caches.
    // ---------------------------------
    const headTexts : string[]  = useMemo<string[]>(() => [ "No", "Name", "Job Title", "Email Address", "Uuid" ], [])
    const users: D.IUser[] = useMemo<D.IUser[]>(() => D.makeArray<number>(30, 0).map(D.makeRandomUser), [])

    // ---------------------------------
    // Step2. Create Updatable Caches.
    // ---------------------------------
    
    //                             Dependency Relationship #1
    //    head ------------------------------------------------------------------>  headTexts
    const head = useMemo(() => headTexts.map(text => <th key={text} className="text-xl text-yellow-200">{text}</th>), [ headTexts ])

    //                             Dependency Relationship #2
    //    body ------------------------------------------------------------------>  users
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    const body = useMemo(() => users.map((user, index) => (
        <tr key={user.uuid}>
            <td>{index+1}</td>
            <td className="flex items-center">
                <Avatar src={user.avatar} size="1.5rem" />
                <p className="ml-2">{user.name}</p>
            </td>
            <td>{user.jobTitle}</td>
            <td>{user.email}</td>
            <td>{user.uuid}</td>
        </tr>
    )), [ users ])

    // ---------------------------------
    // Step3. Create & Return JSX Element.
    // ---------------------------------
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div className="mt-4 text-white bg-sky-400">
            <Title>Memo</Title>

            <div className="p-4 mt-4 overflow-x-auto">
                <table className="table w-full table-zebra">
                    <thead><tr>{head}</tr></thead>
                    <tbody>{body}</tbody>
                </table>
            </div>
        </div>
    )
} // Memo

