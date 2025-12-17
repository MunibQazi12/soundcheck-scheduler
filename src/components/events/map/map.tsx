import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '290px'
};


const MapImage = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
  })

  const [map, setMap] = React.useState(null)

  const center = {
    lat: 51.5072,
    lng: 0.1276
  };

  const onUnmount = React.useCallback(function callback() {
    setMap(null)
  }, [])

  return (

    // <div className="mt-4 w-full ">
    //   <iframe 
    //   className="w-full h-[226px]" 
    //   src="https://www.google.com/maps/embed/v1/place?q=https://www.google.com/maps/place/2100+Wickersham+Ln+%232079,+Austin,+TX+78741,+USA/@30.2320502,-97.7213995,17z/data=!3m1!4b1!4m5!3m4!1s0x8644b5f820d33cfd:0x15e99dc4b3ff8633!8m2!3d30.2320502!4d-97.7213995?entry=ttu&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
    //   // src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4277.439850503864!2d-74.00896214536952!3d40.704661048774106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1722868190333!5m2!1sen!2s"
    //    >
    //   </iframe>
    // </div>

    <div className="mt-4 w-full">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onUnmount={onUnmount}
        >
          <Marker onLoad={() => { }} position={center} />
        </GoogleMap>
      ) : null}
    </div>
  )
}

export default MapImage
