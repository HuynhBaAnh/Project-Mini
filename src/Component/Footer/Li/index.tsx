function Li({span, p}:{span?:string, p:string}){
    return(
        <>
            <li>
                <span><strong>{span}</strong></span>
                <p style={{margin:"2px"}}><a href="" style={{textDecoration:"none",color:"white"}}>{p}</a></p>
            </li>
        </>
    )
}
export default Li