import { useState, useCallback, useEffect } from "react"

import { useToggle } from "../hooks"
import { Title, Avatar, Icon } from "../components"
import * as D from "../data"


// Functional Component.
export default
function FetchTest(): JSX.Element {
    // console.clear()
    // console.group("●●● (src/pages/FetchTest) ●●●")

    const [loading, toggleLoading] = useToggle()
    // console.log("1. loading:", loading)

    // -----------------------
    const [randomUser, setRandomUser] = useState<D.IRandomUser | null>(null)
    // console.log("2. randomUser:", randomUser)

    // -----------------------
    const [error, setError] = useState<Error | null>(null)
    // console.log("3. error:", error)

    // -----------------------
    const getRandomUser = useCallback(() => {
        toggleLoading()
        
        D.fetchRandomUser()
            .then(setRandomUser)
            .catch(setError)
            .finally(toggleLoading)
    }, [toggleLoading])
    // console.log("4. getRandomUser:", getRandomUser)

    // -----------------------
    useEffect(getRandomUser, [getRandomUser])

    console.groupEnd()
    
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-3xl italic text-center">FetchTest</Title>
            
            <div className="flex justify-center mt-4">
                <button className="btn btn-sm btn-primary" onClick={getRandomUser}>
                    <Icon name="get_app" />
                    <span>get random user</span>
                </button>
            </div>

            {loading && (
                <div className="flex items-center justify-center">
                    <button className="btn btn-circle loading"></button>
                </div>
            )}
            
            {error && (
                <div className="p-4 mt-4 bg-red-200">
                    <p className="text-3xl text-red-500 text-bold">{error.message}</p>
                </div>
            )}
            
            {randomUser && (
                <div className="flex justify-center p-4 mt-4">
                    <Avatar src={randomUser.picture.large} />

                    <div className="ml-4">
                        <p className="text-xl text-bold">
                            {randomUser.name.title}. {randomUser.name.first}
                            {randomUser.name.last}
                        </p>
                        
                        <p className="italic text-gray-600">{randomUser?.email}</p>
                    </div>
                </div>
            )}
        </section>
    )
} // FetchTest

