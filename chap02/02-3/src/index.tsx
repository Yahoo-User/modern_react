import ReactDOM from "react-dom/client"
import App from "./App"


/**
 * -------------------------------------------------------------
 * function createRoot(
 *    ① container: Element | DocumentFragment,
 *    ② options?: ReactDOM.RootOptions | undefined
 * ): ReactDOM.Root
 * -------------------------------------------------------------
 * Replaces `ReactDOM.render` when the `.render` method is called and enables `Concurrent Mode`.
 * 
 */
const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)

// const root: ReactDOM.Root
// (method) ReactDOM.Root.render(children: React.ReactNode): void
root.render(<App />)

