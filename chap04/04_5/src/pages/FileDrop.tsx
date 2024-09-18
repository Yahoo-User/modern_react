import type {ChangeEvent, DragEvent, SyntheticEvent} from "react"
import {useState, useRef, useCallback, useMemo} from "react"

import {useToggle} from "../hooks"
import {Title, Div} from "../components"
import {imageFileReaderP} from "../utils"


/**
 * React Hook "useMemo" cannot be called at the top level.
 * React Hooks must be called in a React function component or a custom React Hook function.    <--- ***
 * 
 * const jobTitles3 = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle),[])
 */

// Functional Component.
export default
function FileDrop(): JSX.Element {
    console.group("●●● (src/pages/FileDrop) ●●●")

    // -----------------------
    const [imageUrls, setImageUrls] = useState<string[]>([])
    // console.log("01. imageUrls:", imageUrls)

    // -----------------------
    const [error, setError] = useState<Error | null>(null)
    // console.log("02. error:", error)

    // -----------------------
    const [loading, toggleLoading] = useToggle(false)
    // console.log("03. loading:", loading)

    // -----------------------
    const inputRef = useRef<HTMLInputElement>(null)
    // console.log("04. inputRef:", inputRef)

    // -----------------------
    const onDivClick = 
        useCallback((e: SyntheticEvent) => {
            console.group("▲▲▲ onDivClick callback ▲▲▲")
            console.log("SyntheticEvent:", e)
            
            try { inputRef.current?.click() }
            finally { console.groupEnd() }
        }, [])

    // -----------------------
    const makeImageUrls: (files: File[]) => void = 
        useCallback((files: File[]) => {
            console.group("▲▲▲ makeImageUrls callback ▲▲▲")
            
            try {
                // console.log("01. files:", files)
                // files.forEach(console.log)
                
                const promises: Promise<string>[] = 
                    Array.from<File>(files).map<Promise<string>>(imageFileReaderP)
                // console.log("02. promises:", promises)

                // const [loading, toggleLoading] = useToggle(false)
                toggleLoading()
                
                // console.log("03. loading:", loading)
                // console.log("04. imageUrls:", imageUrls)
                
                Promise.all(promises)
                    // const [imageUrls, setImageUrls] = useState<string[]>([])
                    .then(urls => setImageUrls(imageUrls => [...urls, ...imageUrls]))
                    // const [error, setError] = useState<Error | null>(null)
                    .catch(setError)
                    // const [loading, toggleLoading] = useToggle(false)
                    .finally(toggleLoading)
            } finally { console.groupEnd() }
        }, [toggleLoading, loading, imageUrls]) // makeImageUrls

    // -----------------------
    const onInputChange = 
        useCallback((e: ChangeEvent<HTMLInputElement>) => {
            console.group("▲▲▲ onInputChange callback ▲▲▲")
            // console.log("01. ChangeEvent:", e)
            
            try {
                setError(null)

                // files : "FileList" type,  array-like object
                const selectedfiles = e.target.files
                
                // console.log("02. selectedfiles:", selectedfiles)
                // Array.from(selectedfiles).forEach(console.log)

                // Array.from(selectedfiles): "FileList" array-like object -> Array, [File, File, ...].
                // console.log("03. Array.from(selectedfiles):", Array.from(selectedfiles as FileList))
                
                selectedfiles && makeImageUrls(Array.from(selectedfiles))
            } finally { console.groupEnd() }
        }, [makeImageUrls])

    // -----------------------
    const onDivDragOver =
        useCallback((e: DragEvent) => {
            console.group("▲▲▲ onDivDragOver callback ▲▲▲")
            // console.log("DragEvent:", e)
            
            try { e.preventDefault() }
            finally { console.groupEnd() }
        }, [])

    // -----------------------
    const onDivDrop = 
        useCallback((e: DragEvent) => {   // There is *NO* DropEvent.     (***)
            console.group("▲▲▲ onDivDrop callback ▲▲▲")
            // console.log("01. DragEvent:", e)
            
            try {
                // To disable default operation of web browser 
                // when dropping a file into viewport.
                e.preventDefault()

                // const [error, setError] = useState<Error | null>(null)
                setError(null)

                // When files dropped,
                //  ① e.dataTransfer.files : "FileList" type's array-like object.      (***)
                //  ② The element of "FileList" type is a "File" type.                  (***)
                const files = e.dataTransfer?.files
                
                // console.log("02. files:", files)
                // Array.from(files).forEach(console.log)

                // Array.from(files): FileList object -> [File, File, ...] array
                // console.log("03. Array.from(files):", Array.from(files))
                
                files && makeImageUrls(Array.from(files))
            } finally {
                console.groupEnd()
            } // try-finally
        }, [makeImageUrls])

    // -----------------------
    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    
    const images =
        useMemo(() => imageUrls.map((url, index) => (
            <Div
                key={index}
                src={url}
                className="m-2 bg-transparent bg-center bg-no-repeat bg-contain"
                width="5rem"
                height="5rem" />
        )), [imageUrls])
    
    // console.log("10. imageUrls:", imageUrls)
    // console.log("11. images:", images)

    console.groupEnd()
    
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-3xl font-bold text-center text-green-500">FileDrop</Title>

            {error && (
                <div className="p-4 mt-4 bg-red-200">
                    <p className="text-3xl text-red-500 text-bold">{error.message}</p>
                </div>
            )}

            {/* 
                The core of this component: four event handler as follows:
                
                (1) onClick = {onDivClick}      on "<div>"   element
                (2) onDragOver={onDivDragOver}  on "<div>"   element
                (3) onDrop={onDivDrop}          on "<div>"   element
                (4) onChange={onInputChange}    on "<input>" element
             */}
             
            <div
                onClick={onDivClick}
                className="w-full mt-4 bg-gray-200 border border-gray-500">
                {loading && (
                    <div className="flex items-center justify-center">
                        <button className="btn btn-circle loading"></button>
                    </div>
                )}

                <div onDragOver={onDivDragOver} onDrop={onDivDrop}
                    className="flex flex-col items-center justify-center h-40 cursor-pointer">
                    <p className="text-3xl font-bold">Drop Images or Click Me</p>
                </div>

                <input type="file" ref={inputRef} onChange={onInputChange}
                    multiple className="hidden" accept="image/*" />
            </div>

            <div className="flex flex-wrap justify-center">{images}</div>
        </section>
    )
} // FileDrop

