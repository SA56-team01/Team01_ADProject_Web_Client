import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const UserPlaylistDotMap = () => {
  const coordinates = [
    [-75.3372987731628, 45.383321536272049],
    [-45.546518086577947, 45.467134581917357],
    [25.898610599532319, 45.295014379864874],
  ];

  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  return (
    <ComposableMap
      projection="geoMercator"
      height={500}
      width={500}
      projectionConfig={{ scale: 100 }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{ default: { fill: "#F8F8F8" } }}
            />
          ))
        }
      </Geographies>
      {coordinates.map(([longitude, latitude], index) => (
        <Marker key={index} coordinates={[longitude, latitude]}>
          <circle r={6} fill="#F53" />
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default UserPlaylistDotMap;
