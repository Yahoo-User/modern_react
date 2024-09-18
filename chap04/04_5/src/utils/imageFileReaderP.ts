/**
 * ------------------------------
 * 1. interface "Blob"
 * ------------------------------
 * A "file-like" object of "immutable", "raw" data.
 * Blobs represent data that isn't necessarily in a JavaScript-native format.
 * 
 * The "File" interface is based on "Blob", inheriting blob functionality
 * and expanding it to support files on the user's system.
 
	interface Blob {
		readonly size: number;
		readonly type: string;
		arrayBuffer(): Promise<ArrayBuffer>;
		slice(start?: number, end?: number, contentType?: string): Blob;
		stream(): ReadableStream<Uint8Array>;
		text(): Promise<string>;
	}

 * ------------------------------
 * 2. interface "FileReader"
 * ------------------------------
 * Lets web applications "asynchronously" read the contents of files (or raw data buffers)
 * stored on the user's computer, using "File" or "Blob" objects to specify the "file" or "data to read".

	interface FileReader extends EventTarget {
		readonly error: DOMException | null;
		readonly readyState: typeof FileReader.EMPTY | typeof FileReader.LOADING | typeof FileReader.DONE;
		readonly result: string | ArrayBuffer | null;
		readonly EMPTY: 0;
		readonly LOADING: 1;
		readonly DONE: 2;

		onabort: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
		onerror: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
		onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
		onloadend: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
		onloadstart: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
		onprogress: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;

		abort(): void;
		readAsArrayBuffer(blob: Blob): void;
		readAsBinaryString(blob: Blob): void;
		readAsDataURL(blob: Blob): void;
		readAsText(blob: Blob, encoding?: string): void;

		addEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
		addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
		removeEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
		removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
	}

 * ------------------------------
 * 3. interface "ProgressEvent"
 * ------------------------------
 * Events measuring progress of an underlying process, like an HTTP request
 * (for an XMLHttpRequest, or the loading of the underlying resource of an <img>, <audio>, <video>, <style> or <link>).
 *
	interface ProgressEvent<T extends EventTarget = EventTarget> extends Event {
		readonly lengthComputable: boolean;
		readonly loaded: number;
		readonly target: T | null;
		readonly total: number;
	}
 */

export
const imageFileReaderP = (file: Blob) =>
	// returns the "Promise<string>" object.
	new Promise<string>((resolve, reject) => {
		const fileReader = new FileReader()

		// ① To set an event handler into the "FileReader.onload" event property.	(***)
		fileReader.onload = (e: ProgressEvent<FileReader>) => {	// ③ When file reading completed, triggered. 
			const result = e.target?.result						// ④ Get base64 encoded image data by string.

			// ⑤ According to the condition, resolve or reject the Promise.
			if(result && typeof result === 'string') resolve(result)
			else reject(new Error("imageFileReaderP: can't read the image file"))
		} // onload

		fileReader.readAsDataURL(file)		// ② To read the file, this takes some time.
	}) // imageFileReaderP







