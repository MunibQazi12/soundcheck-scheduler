import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '290px'
};


const MapImage = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
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
