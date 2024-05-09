import { GoogleMap, Marker, LoadScript } from 'react-google-maps/api';

const Map = () => {
    const mapContainerStyle = {
        width: '800px',
        height: '400px',
    };

    const center = {
        lat: 40.712776,
        lng: -74.005974
    };

    return (
        <LoadScript googleMapsApiKey={process.env.GOOGLE_API_TOKEN}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;