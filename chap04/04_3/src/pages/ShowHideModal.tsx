import { useCallback } from "react";

import { Title, Subtitle } from "../components"
import { Button, Modal, ModalContent, ModalAction } from "../theme/daisyui"
import { useToggle } from "../hooks"
import * as D from "../data"


/**
 * React Hook "useMemo" cannot be called at the top level.
 * React Hooks must be called in a React function component or a custom React Hook function.    <--- ***
 * 
 * const jobTitles3 = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle), [])
 */

// Functional Component.
export default
function ShowHideModal(): JSX.Element {
    // console.clear()
    console.group("●●● (src/pages/ShowHideModal) ●●●")

    // Using custom hook, named "useToggle"             <--- ***
    const [open, toggleOpen] = useToggle(false)
    // console.log("1. open:", open)
    // console.log("2. toggleOpen: %s", toggleOpen)

    // -----------------------

    // The specified "callback" depends on the "setter", "toggleOpen"
    const onAccept = useCallback(() => toggleOpen(), [toggleOpen])
    // console.log("3. onAccept: %s", onAccept)

    // -----------------------
    console.groupEnd()
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-2xl italic">ShowHideModal</Title>
            
            <div className="flex justify-center p-4">
                <Button className="text-lg btn-primary" onClick={toggleOpen}>Open Modal</Button>
            </div>

            <Modal open={open}>
                <ModalContent closeIconClassName="btn-primary btn-outline" onCloseIconClicked={toggleOpen}>
                    <Subtitle className="p-2 text-lg italic text-center text-white bg-sky-500">Modal Sub Title</Subtitle>
                    <br />
                    <p>{D.randomParagraphs()}</p>

                    <ModalAction>
                        <button className="btn btn-primary" onClick={onAccept}>Accept</button>
                        <button className="btn" onClick={toggleOpen}>Close</button>
                    </ModalAction>
                </ModalContent>
            </Modal>
        </section>
    )
} // ShowHideModal

