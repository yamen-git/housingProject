
type Props = {
  title: string
  subHeading: string
}

function Header({ title, subHeading }: Props) {
  return (
    <div className="row">
      <div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
        <h2>{title}</h2>
        <p style={{ fontSize: 25 }}>{subHeading}</p>
      </div>
    </div>
  )
}

export default Header
