function south()
{
    const a = 10;
    function north()
    {
        console.log(a);
    }
    north();
}
south();

//op is 10;///coz a is in lexical scope of north (coz south is norths parent)

console.clear()
function east()
{
    const a =15;
    function west()
    {
        console.log(a);
    }
    return west;
}


const direction = east(); // 
// function west()
// {
//     console.log(a);
// }
console.log(direction) //[Function: west]
direction(); // 15 ..............lexical scope was bundled with west which was returned by east()...so, a ka value is remembered in direction function