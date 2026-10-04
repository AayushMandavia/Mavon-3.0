// Local offline stub for Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'LOCAL-DEV');
console.log('[Analytics] Localhost mock active - no external telemetry.');
