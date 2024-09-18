import type { ChangeEvent } from "react"


// Functional Component.
export default
function FileInput() {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = e.target.files
        if (files) {
            /*
                interface `File` extends `Blob` {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                }

                interface `Blob` {
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer(): Promise<ArrayBuffer>;
                    slice(start ?: number, end ?: number, contentType ?: string): Blob;
                    stream(): ReadableStream<Uint8Array>;
                    text(): Promise<string>;
                }
             */

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
        } // if
    } // onChange

    // ----------------------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <li>
            <p>FileInput</p>
            <input type="file" onChange={ onChange } multiple accept="image/*" />
        </li>
    )
} // FileInput

