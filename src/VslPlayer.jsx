import { useRef, useState } from 'react';
import { Volume2, Play, RotateCcw } from 'lucide-react';

export default function VslPlayer() {
  const video = useRef(null);
  const [sound, setSound] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ended, setEnded] = useState(false);
  const [progress, setProgress] = useState(0);

  async function start() {
    const player = video.current;
    if (!player) return;
    if (failed) player.load();
    if (!sound || ended) player.currentTime = 0;
    player.muted = false;
    setSound(true);
    setEnded(false);
    setFailed(false);
    try { await player.play(); setBlocked(false); }
    catch { setBlocked(true); }
  }

  return <section className="ry-vsl-section" aria-labelledby="ry-vsl-title">
    <span className="s-tag">CONHEÇA A RYVELO</span>
    <h2 id="ry-vsl-title">Veja sua clínica com <em>uma rotina conectada.</em></h2>
    <p>Assista à apresentação e descubra como acompanhar seus pacientes e organizar os próximos passos.</p>
    <div className="ry-vsl-player">
      <video ref={video} src="/ryvelo-apresentacao.mp4" poster="/ryvelo-vsl-poster.webp"
        autoPlay muted playsInline preload="metadata" controlsList="nodownload noremoteplayback"
        disablePictureInPicture aria-label="Apresentação da Ryvelo"
        onContextMenu={event => event.preventDefault()}
        onCanPlay={() => { if (!sound) video.current?.play().catch(() => setBlocked(true)); }}
        onPlaying={() => { setBlocked(false); setFailed(false); }}
        onError={() => setFailed(true)} onEnded={() => setEnded(true)}
        onTimeUpdate={() => { const player = video.current; setProgress(player.duration ? player.currentTime / player.duration * 100 : 0); }}>
        Seu navegador não suporta vídeos HTML5.
      </video>
      {(!sound || blocked || failed || ended) && <button type="button" className="ry-vsl-overlay" onClick={start}>
        <span>{failed ? <RotateCcw size={24}/> : ended || blocked ? <Play size={24}/> : <Volume2 size={24}/>}
          {failed ? 'Tentar novamente' : ended ? 'Assistir novamente' : blocked ? 'Reproduzir com som' : 'Clique para ativar o som'}</span>
      </button>}
      <div className="ry-vsl-progress" aria-hidden="true"><span style={{width: `${progress}%`}} /></div>
    </div>
    <small>Ative o som para acompanhar a apresentação.</small>
  </section>;
}
