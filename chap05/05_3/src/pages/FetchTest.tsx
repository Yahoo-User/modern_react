import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Title, Avatar } from "../components"
import { Button } from "../theme/daisyui";

import * as D from "../data"
import * as F from "../store/fetchUser"                     // <--- ***
import * as L from "../store/loading"
import * as E from "../store/errorMessage"

import type { AppState } from "../store";


// Functional Component.
let renderCount: number = 0

export default
function FetchTest(): JSX.Element {
    /*
        In this variant of "useEffect", the following message will be printed
        when the component is "mounted" and every time the component "state" or "props" is updated.
        
        If you want to see logs only when the component re-renders,
        the simplest way is to make a "useEffect" hook *Without* a "dependency array",
        this will make it run after each component render.
    */
    useEffect(() => {
        console.log(`☞ [ FetchTest ] Component is Mounted or Re-rendered(${++renderCount}) <=====================`);
    })

    // -----------------------
    console.group("●●● (src/pages/FetchTest) ●●●")
    console.groupEnd()

    const dispatch = useDispatch()

    // -----------------------

    /*
    const {
        loading,
        errorMessage,

        // user is the "alias" of "fetchUser".
        // Thus, use "alias" instead of "fetchUser" variable name. otherwise, an error occured.
        fetchUser: user                                                 // <--- ***

        //  *Error*: Selector unknown returned the "root state" when called.
        //  This can lead to unnecessary "re-renders".
        //  Selectors that return the "entire state" are almost certainly a mistake,
        //  as they will cause a "re-render" whenever *anything* in "state changes".
    } = useSelector<AppState, AppState>(appState => appState)           // <--- ***
    */

    const loading = useSelector<AppState, L.State>(({loading}) => loading)
    const errorMessage = useSelector<AppState, E.State>(({errorMessage}) => errorMessage)
    const user = useSelector<AppState, F.State>(({ fetchUser }) => fetchUser)

    // -----------------------

    const getRemoteUser = useCallback(() => {
        dispatch<any>(F.getRemoteUser())                                // <--- ***
    }, [dispatch])

    // -----------------------

    const changeName = useCallback(() => {
        dispatch<any>(F.changeNameByFetching())                         // <--- ***
    }, [dispatch])

    // -----------------------

    const changeEmail = useCallback(() => {
        dispatch(F.changeEmail(D.randomEmail()))
    }, [dispatch])

    // -----------------------

    const changePicture = useCallback(() => {
        dispatch(F.changePicture({ large: D.randomAvatar() }))
    }, [dispatch])

    // -----------------------

    useEffect(getRemoteUser, [getRemoteUser])

    // -----------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-2xl font-bold text-center">4. FetchTest</Title>

            <div className="flex justify-center mt-4">
                <Button className="btn-sm btn-primary" onClick={getRemoteUser}>
                    get remote user
                </Button>

                <Button className="ml-4 btn-sm btn-accent" onClick={changeName}>
                    change name
                </Button>

                <Button className="ml-4 btn-sm btn-success" onClick={changeEmail}>
                    change email
                </Button>

                <Button className="ml-4 btn-sm btn-secondary" onClick={changePicture}>
                    change picture
                </Button>
            </div>

            {loading && (
                <div className="flex items-center justify-center">
                    <button className="btn btn-circle loading"></button>
                </div>
            )}

            {errorMessage && (
                <div className="p-4 mt-4 bg-red-200">
                    <p className="text-3xl font-bold text-red-500">{errorMessage}</p>
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
} // FetchTest



