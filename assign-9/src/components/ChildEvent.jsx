export default function ChildEvent ()
{
    function info()
    {console.log("You clicked");}
    function info1()
    {console.log("Over");}
    return(
    <div>
    <button onClick={info}>Click Me</button>
    <button onClick={info1}>Pass Over Me</button>
    </div>
    )
}