import type { DragEvent } from "react"


// Functional Component.
export default
function DragDrop() {
    const onDragStart = (e: DragEvent<HTMLElement>) => {
        console.log("onDragStart:", e.dataTransfer)

        // setData(format: string, data: string): void
        e.dataTransfer.setData("name", "Yoseph")
    } // onDragStart

    const onDragEnd   = (e: DragEvent<HTMLElement>) => console.log("onDragEnd  :", e.dataTransfer)
    const onDragEnter = (e: DragEvent<HTMLElement>) => console.log("onDragEnter:", e.dataTransfer)
    const onDragLeave = (e: DragEvent<HTMLElement>) => console.log("onDragLeave:", e.dataTransfer)

    // ----------------------------
    // The most import event handler #1 in Drag & Drop to enable `drop` event.
    // ----------------------------
    const onDragOver  = (e: DragEvent<HTMLElement>) => {
        e.preventDefault()                                  // To enable `drop` event, ①.
        console.log("onDragOver:", e.dataTransfer)
    } // onDragOver

    // ----------------------------
    // The most import event handler #2 in Drag & Drop to enable `drop` event.
    // ----------------------------
    const onDrop      = (e: DragEvent<HTMLElement>) => {
        e.preventDefault()                                  // To enable `drop` event, ②.

        console.log("onDrop:", e.dataTransfer)
        console.log("\t+ data:", e.dataTransfer.getData("name"))
    } // onDrop

    // ----------------------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div>
            <p>DragDrop</p>

            <div draggable 
                onDragStart={ onDragStart }
                onDragEnter={ onDragEnter }
                onDragLeave={ onDragLeave }
                onDragEnd={ onDragEnd } >
                <h3>Drag Me</h3>
            </div>

            <div
                onDrop={ onDrop }
                onDragOver={onDragOver}>
                <h3>Drop Over Me</h3>
            </div>
        </div>
    )
} // DragDrop


