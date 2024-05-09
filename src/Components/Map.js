import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Map = () => {
    const mapContainerStyle = {
        width: '600px',
        height: '400px',
    };

    const center = {
        lat: 59.95665920965943, 
        lng: 11.050633426236235
    };

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_TOKEN}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={13}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;