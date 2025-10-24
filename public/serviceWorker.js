self.addEventListener('install', () => {
	console.log('Service Worker установлен');
	self.skipWaiting();
});

self.addEventListener('activate', () => {
	console.log('Service Worker активирован');
});

self.addEventListener('fetch', event => {
	// Пропускаем всё, но указываем, что SW обрабатывает запросы
	event.respondWith(fetch(event.request));
});
