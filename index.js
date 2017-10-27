function Wrapper() {
    this.wrap = function(string = '', column = 0) {
        if (column < 1) { column = 1; }
        methodLogger('Regular Expression', regexMethod(string, column));
        methodLogger('Strings and Recursion', stringsAndRecursion(string, column));
    }

    const methodLogger = (methodName, methodResult) => {
        console.log(`- ${methodName} -`);
        console.log(methodResult + '\n\n');
    }

    const regexMethod = (string, column = 1) => {
        const regexString = `(.{0,${column}})\\s+|(.{${column}})`;
        const wrapRegex = new RegExp(regexString, "g");
        return string.replace(wrapRegex, '$1$2\n');
    }

    const stringsAndRecursion = (string = '', column = 1) => {
        string = string.trim();
        if (string.length <= column) { return string; }
        const subStr = string.substr(0, column +1);

        const lastSpace = subStr.lastIndexOf(' ');
        return lastSpace !== -1
            ? subStr.slice(0, lastSpace) + '\n' + stringsAndRecursion(string.slice(lastSpace), column)
            : subStr.slice(0, column)    + '\n' + stringsAndRecursion(string.slice(column), column)
    }
}


const w = new Wrapper();
w.wrap("Type your absolute most favorite string right here!!!!!!!!!!!!!!!!!!!", 15 );
