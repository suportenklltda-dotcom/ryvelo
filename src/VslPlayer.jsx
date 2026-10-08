import { useEffect, useRef, useState } from "react";
import {
  LoaderCircle,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
} from "lucide-react";
import "./vsl-player.css";

// Player de VSL: começa mudo em autoplay com o aviso "Toque para ouvir",
// retoma de onde parou e mostra controles temporários ao tocar.
//
// Props:
// - src, poster: arquivo do vídeo e imagem de capa (opcional);
// - ariaLabel: descrição do vídeo para leitores de tela;
// - progressKey: chave do localStorage que guarda de onde a pessoa parou;
// - avisoSom: "destaque" (cartão grande "Seu vídeo já começou") ou
//   "discreto" (pílula pequena).
export function VslPlayer({
  src,
  poster,
  ariaLabel,
  progressKey,
  avisoSom = "destaque",
}) {
  const videoRef = useRef(null);
  const controlesTimeoutRef = useRef(null);
  const progressoCarregadoRef = useRef(false);
  const reproducaoAtivadaRef = useRef(false);
  const [tocando, setTocando] = useState(false);
  const [iniciado, setIniciado] = useState(false);
  const [carregandoVideo, setCarregandoVideo] = useState(true);
  const [controlesVisiveis, setControlesVisiveis] = useState(false);
  const [mudo, setMudo] = useState(true);
  const [aguardandoSom, setAguardandoSom] = useState(true);
  const [tempoAtual, setTempoAtual] = useState(0);
  const [tempoSalvo, setTempoSalvo] = useState(0);
  const [duracao, setDuracao] = useState(0);
  const [mostrarRetomada, setMostrarRetomada] = useState(false);

  useEffect(() => {
    try {
      const salvo = Number(window.localStorage.getItem(progressKey));

      if (Number.isFinite(salvo) && salvo >= 5) {
        setTempoSalvo(salvo);
        setTempoAtual(salvo);
        setMostrarRetomada(true);
        setCarregandoVideo(false);
      }
    } catch {
      // O carregamento inicial não depende do armazenamento local.
    }

    const inicializacaoTimeout = window.setTimeout(() => {
      setCarregandoVideo(false);
    }, 2000);

    videoRef.current?.load();

    return () => {
      window.clearTimeout(inicializacaoTimeout);

      if (controlesTimeoutRef.current !== null) {
        window.clearTimeout(controlesTimeoutRef.current);
      }
    };
  }, [progressKey]);

  function prepararVideo(video) {
    setCarregandoVideo(false);

    if (Number.isFinite(video.duration)) {
      setDuracao(video.duration);
    }

    if (progressoCarregadoRef.current) return;
    progressoCarregadoRef.current = true;

    try {
      const salvo = Number(window.localStorage.getItem(progressKey));
      const duracaoVideo = video.duration;

      if (
        Number.isFinite(salvo) &&
        salvo >= 5 &&
        Number.isFinite(duracaoVideo) &&
        salvo < duracaoVideo - 5
      ) {
        setTempoSalvo(salvo);
        setTempoAtual(salvo);
        setMostrarRetomada(true);
      } else if (Number.isFinite(duracaoVideo)) {
        setTempoSalvo(0);
        setMostrarRetomada(false);

        try {
          window.localStorage.removeItem(progressKey);
        } catch {
          // Mantém o player disponível mesmo sem acesso ao armazenamento local.
        }
      }
    } catch {
      // O player continua funcionando caso o navegador bloqueie o armazenamento local.
    }
  }

  async function reproduzir(tempo, ativarSom = false) {
    const video = videoRef.current;
    if (!video) return;

    if (ativarSom) {
      reproducaoAtivadaRef.current = true;
      video.muted = false;
      setMudo(false);
      setAguardandoSom(false);
    }

    if (typeof tempo === "number") {
      video.currentTime = tempo;
      setTempoAtual(tempo);
    }

    setMostrarRetomada(false);
    setIniciado(true);
    setControlesVisiveis(false);
    setCarregandoVideo(true);

    try {
      await video.play();
    } catch {
      setTocando(false);
      setIniciado(false);
      setCarregandoVideo(false);

      if (ativarSom) {
        reproducaoAtivadaRef.current = false;
        video.muted = true;
        setMudo(true);
        setAguardandoSom(true);
      }
    }
  }

  function exibirControlesTemporariamente() {
    if (controlesTimeoutRef.current !== null) {
      window.clearTimeout(controlesTimeoutRef.current);
    }

    setControlesVisiveis(true);
    controlesTimeoutRef.current = window.setTimeout(() => {
      if (!videoRef.current?.paused) {
        setControlesVisiveis(false);
      }
    }, 2500);
  }

  function interagirComVideo() {
    const video = videoRef.current;
    if (!video || mostrarRetomada) return;

    if (aguardandoSom) {
      void reproduzir(0, true);
      return;
    }

    if (!iniciado || video.paused) {
      void reproduzir();
      return;
    }

    exibirControlesTemporariamente();
  }

  function alternarPausa() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void reproduzir();
      return;
    }

    video.pause();
    setControlesVisiveis(true);
  }

  function alternarSom() {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setMudo(video.muted);
    exibirControlesTemporariamente();
  }

  function atualizarProgresso(video) {
    setTempoAtual(video.currentTime);

    if (Number.isFinite(video.duration)) {
      setDuracao(video.duration);
    }

    if (!reproducaoAtivadaRef.current || video.currentTime < 2 || video.ended) {
      return;
    }

    try {
      window.localStorage.setItem(progressKey, String(video.currentTime));
    } catch {
      // Ignora apenas a persistência quando ela não estiver disponível.
    }
  }

  function finalizarVideo() {
    setTocando(false);
    setControlesVisiveis(false);

    try {
      window.localStorage.removeItem(progressKey);
    } catch {
      // O encerramento do vídeo não depende do armazenamento local.
    }
  }

  const fracaoReal = duracao > 0 ? Math.min(tempoAtual / duracao, 1) : 0;
  // Curva que faz a barra andar mais rápido no começo, para dar sensação de progresso.
  const progressoVisual = (1 - Math.pow(1 - fracaoReal, 1.65)) * 100;

  return (
    <div className="vsl">
      <div className="vsl-glow" aria-hidden="true" />
      <div className="vsl-frame" onClick={interagirComVideo}>
        <video
          ref={videoRef}
          className="vsl-video"
          src={src}
          poster={poster}
          playsInline
          autoPlay
          muted={mudo}
          preload="auto"
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          aria-label={ariaLabel}
          onContextMenu={(event) => event.preventDefault()}
          onLoadedMetadata={(event) => prepararVideo(event.currentTarget)}
          onLoadedData={(event) => prepararVideo(event.currentTarget)}
          onCanPlay={(event) => prepararVideo(event.currentTarget)}
          onTimeUpdate={(event) => atualizarProgresso(event.currentTarget)}
          onPlay={() => {
            setTocando(true);
            setIniciado(true);
            setCarregandoVideo(false);
            setControlesVisiveis(false);
          }}
          onPlaying={() => {
            setTocando(true);
            setCarregandoVideo(false);
            setControlesVisiveis(false);
          }}
          onPause={() => setTocando(false)}
          onEnded={finalizarVideo}
          onError={() => {
            setTocando(false);
            setIniciado(false);
            setCarregandoVideo(false);
          }}
          onVolumeChange={(event) => setMudo(event.currentTarget.muted)}
        >
          Seu navegador não suporta a reprodução de vídeos em HTML5.
        </video>

        {carregandoVideo && !mostrarRetomada && (
          <div className="vsl-camada vsl-carregando">
            <span className="vsl-carregando-icone">
              <LoaderCircle className="vsl-spinner" aria-hidden="true" />
            </span>
          </div>
        )}

        {aguardandoSom && !mostrarRetomada && avisoSom === "discreto" && (
          <div className="vsl-camada vsl-aviso-camada">
            <span className="vsl-aviso-discreto">
              <span className="vsl-aviso-discreto-icone">
                <VolumeX aria-hidden="true" />
              </span>
              Toque para ouvir
            </span>
          </div>
        )}

        {aguardandoSom && !mostrarRetomada && avisoSom === "destaque" && (
          <div className="vsl-camada vsl-aviso-camada">
            <div className="vsl-aviso-destaque">
              <p className="vsl-aviso-destaque-titulo">Seu vídeo já começou</p>
              <VolumeX
                className="vsl-aviso-destaque-icone"
                aria-hidden="true"
              />
              <p className="vsl-aviso-destaque-acao">Toque para ouvir</p>
            </div>
          </div>
        )}

        {!carregandoVideo &&
          !mostrarRetomada &&
          !aguardandoSom &&
          !iniciado &&
          !tocando && (
            <div className="vsl-camada vsl-play-camada">
              <span className="vsl-play">
                <Play aria-hidden="true" />
              </span>
            </div>
          )}

        {mostrarRetomada && (
          <div
            className="vsl-retomada"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="vsl-retomada-titulo">
              Você já começou a assistir este vídeo
            </p>
            <div className="vsl-retomada-botoes">
              <button
                type="button"
                onClick={() => void reproduzir(tempoSalvo, true)}
                className="vsl-botao vsl-botao-primario"
              >
                <Play aria-hidden="true" />
                Continuar assistindo
              </button>
              <button
                type="button"
                onClick={() => {
                  try {
                    window.localStorage.removeItem(progressKey);
                  } catch {
                    // Reinicia normalmente mesmo sem armazenamento local.
                  }
                  void reproduzir(0, true);
                }}
                className="vsl-botao vsl-botao-secundario"
              >
                <RotateCcw aria-hidden="true" />
                Assistir do início
              </button>
            </div>
          </div>
        )}

        {controlesVisiveis && iniciado && !mostrarRetomada && (
          <div
            className="vsl-controles"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={alternarPausa}
              aria-label={tocando ? "Pausar vídeo" : "Continuar vídeo"}
              className="vsl-controle"
            >
              {tocando ? (
                <Pause className="vsl-icone-cheio" aria-hidden="true" />
              ) : (
                <Play className="vsl-icone-cheio" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={alternarSom}
              aria-label={mudo ? "Ativar som" : "Silenciar vídeo"}
              aria-pressed={mudo}
              className="vsl-controle"
            >
              {mudo ? (
                <VolumeX aria-hidden="true" />
              ) : (
                <Volume2 aria-hidden="true" />
              )}
            </button>
          </div>
        )}

        <div className="vsl-barra" aria-hidden="true">
          <div
            className="vsl-barra-preenchimento"
            style={{ width: `${progressoVisual}%` }}
          />
        </div>
      </div>
    </div>
  );
}
