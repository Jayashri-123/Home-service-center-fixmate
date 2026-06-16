import { useState } from "react";
function Count(){
    const[count,setcount]=useState('');
    return(
        <>
        {/* <p>{count}</p>
        <button onClick={()=>setcount('successfully added')}>Add to cart</button> */}
        </>
    );
}
export default Count;
