function AllProperties() {
  return (
    <div className="col-sm-6 col-md-3 p0">
      <div className="box-tree more-proerty text-center">
        <div className="item-tree-icon">
          <i className="fa fa-th" />
        </div>
        <div className="more-entry overflow">
          <h5>
            <a href="property-1.html">CAN'T DECIDE ? </a>
          </h5>
          <h5 className="tree-sub-ttl">Call us now!!</h5>
          <button
            className="btn border-btn more-black"
            value="All properties"
            disabled
          >
            Click Here
          </button>
        </div>
      </div>
    </div>
  )
}

export default AllProperties
