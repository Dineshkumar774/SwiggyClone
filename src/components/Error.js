import { useRouteError } from "react-router-dom"
const Error=()=>{
     const err=useRouteError();
    return(
        <div>
            <h1>Something Went Wrong!!!</h1>
            <h2>We will get back to you very soon</h2>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}
export default Error;