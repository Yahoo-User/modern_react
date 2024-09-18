import type { DragEvent } from "react"


// Functional Component.
export default
function FileDrop() {
    const onDragOver = (e: DragEvent<HTMLElement>) => e.preventDefault()
    const onDrop = (e: DragEvent) => {
        e.preventDefault()
        
        const files: FileList = e.dataTransfer.files

        // -----------------------------------
        // ts(2802) - Type 'FileList' can only be iterated through
        //            when using the '--downlevelIteration' flag or with a '--target' of 'es2015' or higher.
        // -----------------------------------
        // Compile option is appended in `tsconfig.json` file:
        //      "downlevelIteration": true
        // -----------------------------------
        // ts(2483) - The left-hand side of a 'for...of' statement cannot use a `type annotation`.
        // -----------------------------------
        for (const file of files) {
            const { lastModified, name, webkitRelativePath } = file
            console.log(`file: lastModified(${new Date(lastModified)}), name(${name}), webkitRelativePath(${webkitRelativePath})`)

            const arrayBuffer = file.arrayBuffer()
            arrayBuffer?.then(console.log)
        } // for...of
    } // onDrop

    // ----------------------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <li>
            <p>FileDrop</p>

            <div onDrop={ onDrop } onDragOver={ onDragOver }>
                <h2>Drop Image Files Over Me</h2>
            </div>
        </li>
    )
} // FileDrop

