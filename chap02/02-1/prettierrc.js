// ts(80001) - File is a "CommonJS" module; it may be converted to an "ES module" (ESM).

// --------------------------------------------
// 1. By "CommonJS" module system.
// --------------------------------------------
module.exports = {
        bracketSpacing: false,
        jsxBracketSameLine: true,
        singleQuote: false,
        trailingComma: "none",
        arrowParens: "avoid",
        semi: false,
        printWidth: 180,
        tabWidth: 2
}

// --------------------------------------------
// 2. But "*.ts" file follows "ESM" (ES6 module system)
// --------------------------------------------

// NOTE : ts(8010) - "Type Annotations" can only be used in "TypeScript" files.         <--- ***
// Caution: If "ESM" applied, "Prettier Formatter" extension does *NOT* work.           <--- ***

// export const bracketSpacing = false
// export const jsxBracketSameLine = true
// export const singleQuote = false
// export const trailingComma = "none"
// export const arrowParens = "avoid"
// export const semi = false
// export const printWidth = 180
// export const tabWidth = 2

