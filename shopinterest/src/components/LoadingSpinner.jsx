const LoadingSpinner=()=>{
    return <><button className="btn btn-primary btn-danger loading-spinner" type="button" disabled>
    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Loading...</span>
  </button></>
}
export default LoadingSpinner