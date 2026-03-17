import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';
import 'leaflet/dist/leaflet.css';

// Helper to jitter a point slightly (simulating vehicle movement)
const jitter = (coord) => [
  coord[0] + (Math.random() - 0.5) * 0.005, // Reduced jitter distance for smoother animation
  coord[1] + (Math.random() - 0.5) * 0.005,
  coord[2],
];

// 1. Indian Data: High-density clusters in Delhi NCR
const baseTrafficPoints = [
  [28.6304, 77.2177, 1.0], [28.6310, 77.2180, 0.9], [28.6290, 77.2150, 0.9],
  [28.6320, 77.2190, 0.8], [28.6280, 77.2140, 0.8], 
  [28.4906, 77.0888, 0.9], [28.4920, 77.0900, 0.8], [28.4880, 77.0850, 0.7],
  [28.4595, 77.0266, 0.6], [28.4600, 77.0280, 0.5],
  [28.5708, 77.3206, 0.8], [28.5720, 77.3220, 0.7], [28.5690, 77.3180, 0.6],
  [28.5677, 77.2113, 0.5], [28.5500, 77.2000, 0.4], [28.5400, 77.1900, 0.4],
];

// Dynamic version of points; jittered to simulate movement
const useDynamicPoints = (initial) => {
  const [points, setPoints] = useState(initial);

  useEffect(() => {
    const timer = setInterval(() => {
      setPoints((prev) => prev.map(jitter));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return points;
};

// --- UBER/ZOMATO STYLE VEHICLE ICON ---
// Creates a clean, highly visible custom SVG icon
const createCarIcon = () => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
      </defs>
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" fill="#111827" stroke="#ffffff" stroke-width="1.5" filter="url(#shadow)"/>
    </svg>
  `;
  return L.divIcon({
    className: 'uber-car-icon',
    html: svg,
    iconSize: [28, 28],
    iconAnchor: [14, 14], // Centers the icon perfectly on the coordinate
  });
};

const carIcon = createCarIcon();

// 2. The Custom Heat Layer
const HeatmapLayer = ({ points }) => {
  const map = useMap();
  const layerRef = useRef();

  useEffect(() => {
    if (layerRef.current) {
      layerRef.current.setLatLngs(points);
    } else {
      const heatLayer = L.heatLayer(points, {
        radius: 30, // Slightly larger radius
        blur: 25,   // Higher blur for smooth Zomato-style heat clusters
        maxZoom: 15,
        max: 1.0,
        gradient: {
          0.2: '#4facfe', // Cool blue for low density
          0.6: '#00f2fe',
          0.8: '#f093fb',
          1.0: '#f5576c', // Punchy red/pink for high congestion
        },
      });
      layerRef.current = heatLayer;
      heatLayer.addTo(map);
    }
  }, [map, points]);

  return null;
};

// 3. The Main Map Widget
const FleetHeatmap = () => {
  const newDelhiCenter = [28.6139, 77.2090];
  const dynamicPoints = useDynamicPoints(baseTrafficPoints);
  const [showMarkers, setShowMarkers] = useState(true); // Default to showing vehicles

  return (
    <div className="heatmap-container shadow-sm rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 h-full w-full relative">
      
      {/* Clean UI Toggle Button */}
      <div className="absolute top-4 right-4 z-[400] flex space-x-2 shadow-md rounded-lg overflow-hidden">
        <button
          className={`px-4 py-2 text-sm font-semibold transition-colors ${showMarkers ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-800'}`}
          onClick={() => setShowMarkers(!showMarkers)}
        >
          {showMarkers ? 'Hide Fleet' : 'Show Fleet'}
        </button>
      </div>

      <MapContainer
        center={newDelhiCenter}
        zoom={12} // Zoomed in slightly more for better vehicle visibility
        style={{ height: '100%', width: '100%', zIndex: 1 }}
        zoomControl={false} // Hides default zoom controls for a cleaner app feel
      >
        {/* CartoDB Voyager Tiles: This is the secret to the clean Google Maps/Uber look */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />

        <HeatmapLayer points={dynamicPoints} />

        {/* React-Leaflet handles marker position updates automatically! */}
        {showMarkers && dynamicPoints.map((pt, idx) => (
          <Marker 
            key={idx} 
            position={[pt[0], pt[1]]} 
            icon={carIcon} 
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default FleetHeatmap;