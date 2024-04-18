export default function Inventory({Item})
{
    return( <div>{
        <h1>
            <li>Desc: {Item.Desc}</li>
            <li>Age: {Item.Age}</li>
            <li>Room: {Item.Room}</li>
            <li>How Acquired: {Item.How_Acquired}</li>
            <li>Value: {Item.Value}</li>
        </h1>
        
}</div>
    );
}