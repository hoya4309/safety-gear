// 앱 화면 파일을 캐시해 설치형 앱처럼 빠르게 열리게 합니다.
// 데이터(Firebase)는 캐시하지 않고 항상 실시간으로 받아옵니다.
const CACHE = 'safety-gear-v2';
const SHELL = ['./', './index.html', './config.js', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
const LIBS = ['cdnjs.cloudflare.com', 'www.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  if (url.origin === location.origin) {
    // 앱 파일: 네트워크 우선(새 버전 즉시 반영), 오프라인이면 캐시
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
  } else if (LIBS.includes(url.hostname) && /\.js$/.test(url.pathname)) {
    // 버전이 고정된 라이브러리: 캐시 우선
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
    })));
  }
});
