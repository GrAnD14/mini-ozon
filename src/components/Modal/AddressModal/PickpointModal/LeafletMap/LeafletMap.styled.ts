import styled, { createGlobalStyle } from 'styled-components';

export const LeafletContainer = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 12px;
	background: #f6f7fb;
`;

export const LeafletGlobalStyles = createGlobalStyle`
  .leaflet-container {
    border-radius: 12px;
    background: #f6f7fb;
  }
  
  .leaflet-popup-content-wrapper {
    border-radius: 8px;
  }

  .leaflet-marker-icon {
    filter: drop-shadow(0 2px 6px rgba(0,0,0,0.2));
  }
`;
