type Props = {
  name: string
  area: number
  price: number
  imageLink: string
  _id: string
}

function Listing({ name, area, price, imageLink, _id }: Props) {
  return (
    <div className="col-sm-6 col-md-3 p0">
      <div className="box-two proerty-item">
        <div className="item-thumb">
          <a href={'details/' + name + '/' + _id}>
            <img src="assets/img/demo/property-1.jpg" />
          </a>
        </div>
        <div className="item-entry overflow">
          <h5>
            <a href={'details/' + name + '/' + _id}>{name}</a>
          </h5>
          <div className="dot-hr" />
          <span className="pull-left">
            <b>Area :</b> {area}m{' '}
          </span>
          <span className="proerty-price pull-right">$ {price}</span>
        </div>
      </div>
    </div>
  )
}

export default Listing
