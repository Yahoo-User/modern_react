// ts(80001) - File is a "CommonJS" module; it may be converted to an "ES module" (ESM).

// --------------------------------------------
// 1. The following code is "CommonJS" module.
// --------------------------------------------
module.exports = {
  singleQuote: false,
  semi: false,
}

// --------------------------------------------
// 2. But *.ts file follows "ESM" (ES6 module)
// --------------------------------------------

// NOTE : ts(8010) - "Type Annotations" can only be used in "TypeScript" files.     <--- ***
// Caution: If ESM applied, "Prettier Formatter" extension does *NOT* work.         <--- ***

// export const singleQuote = false
// export const semi = false
