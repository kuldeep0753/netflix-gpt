import { useRouteError } from "react-router-dom";
function Error() {
  const err = useRouteError()
  //console.log(err)
  return <div className="text-red-500">
    <h1>OOPS! Something went wrong</h1>
    <h2>{`${err.status} ${err.statusText}`}</h2>
    <h2>{` ${err.data} `}</h2>
    <b><a href="/">Go to Home</a></b>
  </div>
}

export default Error;