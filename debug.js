function showDebugInfo() {
  const d = document.createElement('div');
  d.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);color:#0f0;font-family:monospace;font-size:12px;z-index:9999;padding:20px;overflow-y:auto;box-sizing:border-box;word-wrap:break-word;';
  
  const getRect = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return 'Not found';
    const r = el.getBoundingClientRect();
    return `top:${Math.round(r.top)} h:${Math.round(r.height)} w:${Math.round(r.width)}`;
  };

  const getStyle = (sel, prop) => {
    const el = document.querySelector(sel);
    if (!el) return 'Not found';
    return window.getComputedStyle(el)[prop];
  };

  const info = [
    `UA: ${navigator.userAgent}`,
    `Screen: ${window.screen.width}x${window.screen.height}`,
    `Window: ${window.innerWidth}x${window.innerHeight}`,
    `Body: height=${document.body.scrollHeight}`,
    `#page-player: ${getRect('#page-player')} (disp:${getStyle('#page-player','display')} pos:${getStyle('#page-player','position')})`,
    `.vid-wrap: ${getRect('.vid-wrap')} (pos:${getStyle('.vid-wrap','position')})`,
    `.ctrl-card: ${getRect('.ctrl-card')} (pos:${getStyle('.ctrl-card','position')})`,
    `.col-right: ${getRect('.col-right')} (disp:${getStyle('.col-right','display')})`,
    `.sub-list: ${getRect('.sub-list')}`,
    `dvh check: ${getStyle('body', 'height')} vs ${window.innerHeight}`
  ].join('\n\n');

  d.innerText = "请截图发给AI：\n\n" + info + "\n\n(点击此处关闭)";
  d.onclick = () => d.remove();
  document.body.appendChild(d);
}

// Add a hidden trigger to the logo
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  if (logo) {
    let clicks = 0;
    let timer;
    logo.addEventListener('click', () => {
      clicks++;
      clearTimeout(timer);
      timer = setTimeout(() => { clicks = 0; }, 1000);
      if (clicks >= 3) {
        clicks = 0;
        showDebugInfo();
      }
    });
  }
});
