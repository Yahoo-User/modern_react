import {useState, useCallback, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"

import {useToggle} from "../hooks"
import {Title, Avatar} from "../components"
import {Button} from "../theme/daisyui"
import * as D from "../data"
import type { AppState } from "../store"
import * as R from "../store/remoteUser"


// Functional Component.
export default
function RemoteUserTest(): JSX.Element {
	console.group("●●● (src/pages/RemoteUserTest) ●●●")

    const dispatch = useDispatch()

    // -----------------------
    const user = useSelector<AppState, R.State>(({remoteUser}) => remoteUser)
    // console.log("1. user:", user)

    // -----------------------
    const [loading, toggleLoading] = useToggle()
    // console.log("2. loading:", loading)

    // -----------------------
    const [error, setError] = useState<Error | null>(null)
    // console.log("3. error:", error)

    // -----------------------
    const getRemoteUser = useCallback(() => {
        toggleLoading()

        D.fetchRandomUser()
            .then(user => dispatch(R.setUser(user)))                // <--- ***
            .catch(setError)
            .finally(toggleLoading)
    }, [dispatch, toggleLoading])

    // -----------------------
    const changeName = useCallback(() => {
        toggleLoading()

        D.fetchRandomUser()
            .then(user => dispatch(R.changeName(user.name)))        // <--- ***
            .catch(setError)
            .finally(toggleLoading)
    }, [dispatch, toggleLoading])

    // -----------------------
    const changeEmail = useCallback(() => {
        dispatch(R.changeEmail(D.randomEmail()))
    }, [dispatch])

    // -----------------------
    const changePicture = useCallback(() => {
        dispatch(R.changePicture({ large: D.randomAvatar() }))
    }, [dispatch])

    // -----------------------
    useEffect(getRemoteUser, [getRemoteUser])
    useEffect(changeName, [changeName])

    console.groupEnd()
    
    // -----------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title>RemoteUserTest</Title>

            <div className="flex justify-center mt-4">
                <Button className="btn-sm btn btn-primary" onClick={getRemoteUser}>getRemoteUser</Button>
                <Button className="ml-4 btn-sm btn btn-accent" onClick={changeName}>changeName</Button>
                <Button className="ml-4 btn-sm btn btn-success" onClick={changeEmail}>changeEmail</Button>
                <Button className="ml-4 btn-sm btn btn-secondary" onClick={changePicture}>changePicture</Button>
            </div>

            {loading && (
                <div className="flex items-center justify-center">
                    <button className="btn btn-circle loading"></button>
                </div>
            )}

            {error && (
                <div className="p-4 mt-4 bg-red-200">
                    <button className="text-3xl font-bold text-red-500">{error.message}</button>
                </div>
            )}

            <div className="flex justify-center p-4 mt-4">
                <Avatar src={user.picture.large} />

                <div className="ml-4">
                    <p className="text-xl font-bold">
                        {user.name.title}. {user.name.first} {user.name.last}
                    </p>
                    
                    <p className="italic text-grey-600">{user.email}</p>
                </div>
            </div>
        </section>
    )
} // RemoteUserTest

