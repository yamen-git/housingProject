type Props = {
  propertyName: string
  price: string | number
  beds: number
  baths: number
  area: string | number
}

function DetailSideBar({ propertyName, price, area, beds, baths }: Props) {
  return (
    <div className="col-md-4 p0">
      <aside className="sidebar blog-asside-right property-style2">
        <div className="dealer-widget">
          <div className="dealer-content">
            <div className="inner-wrapper">
              <div className="single-property-header">
                <h1 className="property-title">{propertyName}</h1>
                <span className="property-price">${price}</span>
              </div>
              <div className="property-meta entry-meta clearfix ">
                <div className="col-xs-4 col-sm-4 col-md-4 p-b-15">
                  <span className="property-info icon-area">
                    <img src="/assets/img/icon/room-orange.png" />
                  </span>
                  <span className="property-info-entry">
                    <span className="property-info-label">Area</span>
                    <span className="property-info-value">
                      {area}
                      <b className="property-info-unit">Sq Ft</b>
                    </span>
                  </span>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 p-b-15">
                  <span className="property-info-icon icon-bed">
                    <img src="/assets/img/icon/bed-orange.png" />
                  </span>
                  <span className="property-info-entry">
                    <span className="property-info-label">Bedrooms</span>
                    <span className="property-info-value">{beds}</span>
                  </span>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 p-b-15">
                  <span className="property-info-icon icon-bath">
                    <img src="/assets/img/icon/cars-orange.png" />
                  </span>
                  <span className="property-info-entry">
                    <span className="property-info-label">Bathrooms</span>
                    <span className="property-info-value">{baths}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default DetailSideBar
