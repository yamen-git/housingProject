import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Description from './components/DetailComponents/description'
import AdditionalDetails from './components/DetailComponents/additionalDetails'
import DetailSideBar from './components/DetailComponents/detailSideBar'
import { API_URL } from './constants'

interface InitialState {
  _id: string
  name: string
  area: number
  price: number
  imageLink: string
  beds: number
  baths: number
  builtInYear: number
  parking: string
  view: string
  description: string
}
type Params = {
  id: string
}

function Detail() {
  let initialData = {
    _id: '',
    name: '',
    area: 0,
    price: 0,
    imageLink: '',
    beds: 0,
    baths: 0,
    builtInYear: 0,
    parking: '',
    view: '',
    description: '',
  }
  let [data, setData] = useState<InitialState>(initialData)
  let { id } = useParams<Params>()
  useEffect(() => {
    const reqBody = {
      query: `{
        listings(getListingInput:{_id:"${id}"}){
          name
          _id
          area
          price
          imageLink
          baths
          beds
          builtInYear
          parking
          view
          description
        }
      }`,
    }
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setData(res.data.listings[0])
      })
      .catch((err) => {
        console.log('error is', err)
      })
  }, [id])

  const { builtInYear, parking, view } = data
  const additionalDetails = {
    builtInYear,
    parking,
    view,
  }
  return (
    <div
      className="content-area home-area-1 recent-property"
      style={{ backgroundColor: '#FCFCFC', paddingBottom: '55px' }}
    >
      <div className="container" style={{ marginTop: 20 }}>
        <div className="page-head">
          <div className="container">
            <div className="row">
              <div className="page-head-content">
                <h1 className="page-title">
                  {data.name}{' '}
                  <a style={{ float: 'right', marginRight: '10%' }} href="/">
                    HOME
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="content-area single-property"
        style={{ backgroundColor: '#FFF' }}
      >
        &nbsp;
        <div className="container">
          <div className="clearfix padding-top-40">
            <div
              className="col-md-8"
              style={{ backgroundColor: 'rgb(251, 251, 251)' }}
            >
              <div>
                <div className="single-property-wrapper">
                  {/* Description start area  */}
                  {data.description && (
                    <Description description={data.description} />
                  )}
                  {/* End description area  */}
                  <AdditionalDetails {...additionalDetails} />
                  {/* End additional-details area  */}
                </div>
              </div>
            </div>
            <DetailSideBar
              propertyName={data.name}
              price={data.price}
              area={data.area}
              beds={data.beds}
              baths={data.baths}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
