
//PascalCasing
function Message() {
    //JSX: JavaScript XML
    //JSX is a syntax extension for JavaScript that looks similar to XML or HTML.
    const name = "Deshika";
    if(name){
        return <h1>Hello {name}</h1>; //Using curly braces to embed JavaScript expressions in JSX
    }
    return <h1>Hello World</h1>;
}

export default Message;
//Exporting the Message component as the default export of this module