import ReactMapGL, { Marker, Popup } from "react-map-gl";

import getCenter from "geolib/es/getCenter";
import { useState } from "react";

const Map = ({ searchResult }) => {
  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.latitude,
  });

  const [selectLoc, setSlectedLoc] = useState("");

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/shamaz/cktadil8i3q4k18phgl8m0f8t"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewPort}
      onViewPortChange={(nextViewPort) => setViewPort(nextViewPort)}
    >
      {searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetTop={-10}
            offsetLeft={-20}
          >
            <p
              onClick={() => setSlectedLoc(result)}
              className="cursor-pointer text-2xl animate-bounce "
              aria-label="push-pin"
            >
              🏗️
            </p>
          </Marker>
          {selectLoc.long === result.long ? (
            <Popup
              onClose={() => setSlectedLoc({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
