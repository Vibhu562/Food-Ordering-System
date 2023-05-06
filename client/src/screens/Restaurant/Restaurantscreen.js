import React from 'react'
import { useEffect , useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Restaurant from '../../components/Restaurant/Restaurant';
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Filter from '../../components/Filter/Filter';
import { useGeolocated } from "react-geolocated";
import {getAllRestaurants} from '../../actions/restaurantAction';
import ScrollToTop from "react-scroll-to-top";

export default function Restaurantscreen() {
    const getallrestaurantsstate = useSelector(state=>state.getAllRestaurantsReducer)
    const {loading , restaurants ,error} =  getallrestaurantsstate
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllRestaurants())
    }, [dispatch])
    function calculateDistance(lattitude1, longittude1,lattitude2,longittude2) 
  {
    
const toRadian = n => (n * Math.PI) / 180

    let lat2 = lattitude2
    let lon2 = longittude2
    let lat1 = lattitude1
    let lon1 = longittude1

    console.log(lat1, lon1+"==="+lat2, lon2)
    let R = 6371  // km
    let x1 = lat2 - lat1
    let dLat = toRadian(x1)
    let x2 = lon2 - lon1
    let dLon = toRadian(x2)
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c
    console.log("distance==?",d)
    return d
      }
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  });
   // Triggered when the value gets updated while scrolling the slider:
   const [ distance, setdistance ] = useState(100);
   const handleInput = (e)=>{
    setdistance( e.target.value );
     }  
     

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
) : coords ? (
  <div>
  <Filter/>
    
      <div className='col mt-3 justify-content-center align-items-center table-responsive'>
      <p className='text-center mb-0'>Distance Range</p>
      <input className='' type="range" onInput={ handleInput } min={0} max = {100} />
      <h2 className=''>{distance}</h2>
      </div>
      <div className="row justify-content-center mt-4 ms-2 me-2">
   {loading ? (
   <Loader/>
   ) : error ? (
   <Error error='Something Went Wrong'/>
   ) : (  
    restaurants.filter( restaurant => { return  calculateDistance(coords.latitude , coords.longitude, restaurant.latitude,restaurant.longitude) <= parseInt(distance, 10) }).map(restaurant=> {
    return (calculateDistance(coords.latitude , coords.longitude, restaurant.latitude,restaurant.longitude)  < 100 && restaurant.approval == true
    ?(
      <div className="col-md-3 m-2 p-2 mb-3 bg-white " key={restaurant._id}>
     <Restaurant  restaurant={restaurant}/>
      </div>
    ):(
      ''
    ))
   })  
   )}        

      </div>     
      <ScrollToTop smooth />
       </div>
    ) : (
        <div>Getting the location data&hellip; </div>
    )
  
}

