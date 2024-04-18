export default function Array({stationary})
{
    return( <div>{
        stationary.map(stationary=> <l1> key={stationary}>{stationary}</l1>)
}</div>
            );
}