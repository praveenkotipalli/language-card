import { useState } from "react";
import Show from "./Show";
import NotShow from "./NotShow";

const Language = ({name,img,options}) =>{
    const[show,setShow]=useState(true);
    console.log(show)
    return(
        <div className="cardWrapper" onClick={()=>setShow(!show)}>
            {show? <Show img={img} name={name} /> : <NotShow options={options} />}
        </div>
    );
};
export default Language;