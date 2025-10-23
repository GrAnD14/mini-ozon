import React from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { LeafletContainer } from './LeafletMap.styled';
import 'leaflet/dist/leaflet.css';

interface LeafletMapProps {
	center: [number, number];
	zoom: number;
	children?: React.ReactNode;
}

export const ClickToAddMarker = ({ onMapClick }: { onMapClick: (latlng: { lat: number; lng: number }) => void }) => {
	useMapEvents({
		click(e) {
			onMapClick(e.latlng);
		}
	});
	return null;
};

const LeafletMap: React.FC<LeafletMapProps> = ({ center, zoom, children }) => {
	return (
		<LeafletContainer>
			<MapContainer center={center} zoom={zoom} scrollWheelZoom attributionControl={false} style={{ width: '100%', height: '100%' }}>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='© OpenStreetMap contributors' />
				{children}
			</MapContainer>
		</LeafletContainer>
	);
};

export default LeafletMap;
