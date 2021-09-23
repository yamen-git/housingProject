import React from 'react'

type Props = {
  builtInYear: number
  parking: string
  view: string
}

function AdditionalDetails({ builtInYear, parking, view }: Props) {
  return (
    <div className="section additional-details">
      <h4 className="s-property-title">Additional Details</h4>
      <ul className="additional-details-list clearfix">
        <li>
          <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
            Built In
          </span>
          <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
            {builtInYear}
          </span>
        </li>
        <li>
          <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
            Parking
          </span>
          <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
            {parking}
          </span>
        </li>
        <li>
          <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">View</span>
          <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">{view}</span>
        </li>
      </ul>
    </div>
  )
}

export default AdditionalDetails
