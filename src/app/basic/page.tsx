export default function Basic() {
    function foo() {
        console.log("Hello world")
        return "Hello world"
    }
    const objA = {
        age: 23,
    }
    
    const person = {
    name : "Asmin",
    surname : "Min",
    myObject: objA,
    myarray: [1, 2, 3],
    myFoo: foo,
    myBar : function() {
        return "bar"
    },
    myBaz: () => { 
        return "baz"
    }
}

    

    return (<div>
        {person.name} 
        {person.surname}
        {person.myObject.age} 
        {person.myarray[2]}
        {JSON.stringify(person)}
        {person.myFoo()}
        {person.myBar()}
        {person.myBaz()}
        </div>)
    
}