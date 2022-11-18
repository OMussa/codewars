//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(d) {
    const dog = d.filter(e =>  typeof e == 'number' )
    return dog
   }
   