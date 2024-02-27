const NotShow =({options})=>{
    return(
        <ul>
            {options.map((item)=>(
                <li>
                    {item}
                </li>
            ))}
        </ul>
    )
}
export default NotShow;