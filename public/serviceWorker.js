self.addEventListener('install', () => {
	console.log('Service Worker установлен');
});

self.addEventListener('fetch', () => {
	// Заглушка — без кэша пока
});
