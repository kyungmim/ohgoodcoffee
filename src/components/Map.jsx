import { Map, MapMarker, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import PropTypes from 'prop-types';

Location.propTypes = {
  data: PropTypes.shape({
    extra: PropTypes.shape({
      coordinates: PropTypes.shape({
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
      }),
      address: PropTypes.string,
    }),
  }),
};

function Location({ data }) {
  if (!data || !data.extra || !data.extra.coordinates) {
    return null;
  }

  const { lat, lng } = data.extra.coordinates;
  return (
    <>
      <Map className="map" center={{ lat, lng }} style={{ width: '100%', height: '400px' }} level={1}>
        <MapTypeControl position={'TOPRIGHT'} />
        <ZoomControl position={'RIGHT'} />
        <MapMarker position={{ lat, lng }}></MapMarker>
      </Map>
    </>
  );
}

export default Location;
