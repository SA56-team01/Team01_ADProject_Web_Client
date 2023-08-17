import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import DotMapTooltip from "./DotMapTooltip";

const SingaporePlaylistDotMap = () => {
  const coordinates = [
    [103.851959, 1.29027], // Downtown Singapore
    [103.817255, 1.280095], // Sentosa

    [103.834441, 1.290756], // Chinatown
    [103.845436, 1.299617], // Bugis
    [103.876591, 1.311495], // Geylang
    [103.847502, 1.308108], // Little India
    [103.848958, 1.28251], // Clarke Quay
    [103.876383, 1.355149], // Tampines
    [103.902704, 1.311312], // Bedok
    [103.838217, 1.319725], // Orchard Road
    [103.774083, 1.292929], // HarbourFront
    [103.793381, 1.443708], // Woodlands

    // ... other coordinates
  ];

  const geoUrl = "/data/sg.topojson";
  const [tooltipContent, setTooltipContent] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  return (
    // the styling is what forces the box to adapt to the map size, which is ok ig
    <DashboardBox
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
      }}
    >
      <BoxHeader
        title="Map of Playlists Generated"
        subtitle="Playlists Generated in Singapore by Location"
        sideText="+4%"
      />

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 90000,
          center: [103.8198, 1.3],
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                tabIndex={-1}
                style={{
                  default: { fill: "#F8F8F8", outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        {coordinates.map(([longitude, latitude], index) => (
          <Marker key={index} coordinates={[longitude, latitude]}>
            <circle
              r={3}
              fill="#F53"
              onClick={(event) => {
                // On marker click, set the tooltip content and position
                setTooltipContent(
                  `Longitude: ${longitude}, Latitude: ${latitude}`
                );
                setTooltipPosition({ x: event.clientX, y: event.clientY });
              }}
            />
          </Marker>
        ))}
      </ComposableMap>

      {/* Render the tooltip if there's content to display */}
      {tooltipContent && tooltipPosition && (
        <DotMapTooltip
          content={tooltipContent}
          x={tooltipPosition.x}
          y={tooltipPosition.y}
        />
      )}
    </DashboardBox>
  );
};

export default SingaporePlaylistDotMap;
