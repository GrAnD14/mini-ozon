import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { LeafletContainer } from './LeafletMap.styled';
import 'leaflet/dist/leaflet.css';

export const SetViewOnChange: React.FC<{ center?: [number, number]; zoom?: number }> = ({ center, zoom }) => {
	const map = useMap();
	useEffect(() => {
		if (!center) return;
		map.setView(center, zoom ?? map.getZoom(), { animate: true });
	}, [center?.[0], center?.[1], zoom, map]);
	return null;
};

export const ClickToAddMarker: React.FC<{ onMapClick: (latlng: { lat: number; lng: number }) => void }> = ({ onMapClick }) => {
	useMapEvents({
		click(e) {
			onMapClick(e.latlng);
		}
	});
	return null;
};

interface Props {
	center: [number, number];
	zoom: number;
	children?: React.ReactNode;
}

const LeafletMap: React.FC<Props> = ({ center, zoom, children }) => {
	return (
		<LeafletContainer>
			<MapContainer center={center} zoom={zoom} scrollWheelZoom style={{ width: '100%', height: '100%' }}>
				<TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' attribution='© OpenStreetMap contributors © CARTO' />
				{children}
			</MapContainer>
		</LeafletContainer>
	);
};

export default LeafletMap;
