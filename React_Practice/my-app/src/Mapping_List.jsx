import react from 'react'
function Mapping_List()
{
    const fruits=["Apple" , "Banana" , "Pear"]
    return (
           <ul>
            {
                fruits.map((fru,i)=>(
                    <li key={i}>{fru}</li>
                ))
            }
           </ul>
    )

}
export default Mapping_List