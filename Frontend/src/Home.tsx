import { useState, useEffect } from 'react'
import Header from './components/HomeComponents/Header'
import Listing from './components/HomeComponents/Listing'
import AllProperties from './components/HomeComponents/AllProperties'
import { API_URL } from './constants'
interface InitialState {
  _id: string
  name: string
  area: number
  price: number
  imageLink: string
}

function Home() {
  let [data, setData] = useState<InitialState[]>([])

  useEffect(() => {
    const reqBody = {
      query: `{
        listings{
          name
          _id
          area
          price
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
        setData(res.data.listings)
      })
      .catch((err) => {
        console.log('error is', err)
      })
  }, [])

  return (
    <div
      className="content-area home-area-1 recent-property"
      style={{ backgroundColor: '#FCFCFC', paddingBottom: '55px' }}
    >
      <div className="container">
        <Header title={'HPL'} subHeading={'Trusted Place to Find a Home'} />
        <div className="row adjustHeight">
          <div className="proerty-th">
            {data.length === 0 && (
              <div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
                No Data Available
              </div>
            )}
            {data.map((item) => {
              return (
                <span key={item._id}>
                  <Listing
                    _id={item._id}
                    name={item.name}
                    area={item.area}
                    price={item.price}
                    imageLink={item.imageLink}
                  />
                </span>
              )
            })}
            {data.length !== 0 && <AllProperties />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
