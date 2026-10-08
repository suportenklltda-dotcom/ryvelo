import VslPlayer from "./VslPlayer";
import * as React from "react";
import {
  ArrowUpRight as IconArrowUpRight,
  Building2 as IconBuilding2,
  CalendarDays as IconCalendarDays,
  ChartNoAxesCombined as IconChartNoAxesCombined,
  Check as IconCheck,
  ChevronRight as IconChevronRight,
  CircleCheck as IconCircleCheck,
  Clock as IconClock,
  FileText as IconFileText,
  House as IconHouse,
  Info as IconInfo,
  Menu as IconMenu,
  MessageCircle as IconMessageCircle,
  Minus as IconMinus,
  MoveUpRight as IconMoveUpRight,
  Phone as IconPhone,
  Plus as IconPlus,
  RotateCcw as IconRotateCcw,
  Search as IconSearch,
  Settings as IconSettings,
  ShieldCheck as IconShieldCheck,
  Users as IconUsers,
  Wallet as IconWallet,
  X as IconX,
} from "lucide-react";
function Modal({ title: N, onClose: E, children: L }) {
  const y = React.useRef(null),
    H = React.useRef(E);
  return (
    React.useEffect(() => {
      H.current = E;
    }, [E]),
    React.useEffect(() => {
      const Y = y.current;
      Y.showModal();
      const cl = (jl) => {
        (jl.preventDefault(), H.current());
      };
      return (
        Y.addEventListener("cancel", cl),
        () => {
          (Y.removeEventListener("cancel", cl), Y.close());
        }
      );
    }, []),
    (
      <dialog
        ref={y}
        onClick={(Y) => {
          Y.target === y.current && E();
        }}
      >
        <header className={"modal-head"}>
          <h2>{N}</h2>
          <button className={"icon-button"} aria-label={"Fechar"} onClick={E}>
            <IconX size={21} />
          </button>
        </header>
        {L}
      </dialog>
    )
  );
}
const firstNames = [
    "Mariana",
    "Rafael",
    "Juliana",
    "André",
    "Beatriz",
    "Lucas",
    "Fernanda",
    "Carla",
    "Gabriel",
    "Patrícia",
    "Renato",
    "Letícia",
    "Daniel",
    "Paula",
    "Thiago",
    "Simone",
    "João",
    "Ana",
    "Bruno",
    "Camila",
    "Diego",
    "Luiza",
    "Eduardo",
    "Priscila",
    "Vinícius",
  ],
  lastNames = [
    "Santos",
    "Oliveira",
    "Costa",
    "Lima",
    "Almeida",
    "Pereira",
    "Souza",
    "Mendes",
    "Ribeiro",
    "Carvalho",
    "Martins",
    "Rocha",
    "Barbosa",
    "Azevedo",
    "Machado",
    "Vieira",
    "Gomes",
    "Moreira",
    "Teixeira",
    "Nunes",
    "Cardoso",
    "Silva",
    "Freitas",
    "Correia",
    "Pinto",
  ],
  Vi = Array.from(
    {
      length: 150,
    },
    (N, E) => ({
      id: `p${E + 1}`,
      name: `${firstNames[E % 25]} ${lastNames[((E % 25) + Math.floor(E / 25) * 4) % 25]}`.replace(
        /^João Pinto$/,
        "João Machado",
      ),
      age: E === 0 ? 38 : 24 + ((E * 7) % 49),
      preference:
        E % 3 === 0
          ? "Prefere manhã"
          : E % 3 === 1
            ? "Prefere tarde"
            : "Horário flexível",
      optOut: E === 38,
    }),
  ),
  ly = [
    "Retorno de prevenção",
    "Manutenção ortodôntica",
    "Revisão de implante",
    "Acompanhamento de clareamento",
  ],
  ay = [8500, 12500, 6500, 4200, 9800, 5500, 7200, 3800, 11e3, 6e3, 4700, 5300],
  ty = [
    ...Array.from(
      {
        length: 40,
      },
      (N, E) => ({
        id: `r${E + 1}`,
        patientId: `p${E === 0 ? 1 : E + 3}`,
        kind: "retorno",
        reason: ly[E % 4],
        days: E === 0 ? 32 : 8 + ((E * 7) % 65),
        amount: 0,
        stage: "a-contatar",
        dueToday: E < 7,
      }),
    ),
    ...ay.map((N, E) => ({
      id: `o${E + 1}`,
      patientId: `p${E === 0 ? 2 : 60 + E}`,
      kind: "orcamento",
      reason: E === 0 ? "Implante e coroa" : "Tratamento pendente",
      days: 14 + E * 3,
      amount: N,
      stage: "a-contatar",
      dueToday: E < 11,
    })),
  ],
  ey = Array.from(
    {
      length: 5,
    },
    (N, E) =>
      Array.from(
        {
          length: 8,
        },
        (L, y) => ({
          id: `a${E}-${y}`,
          patientId: `p${75 + E * 8 + y}`,
          date: `2026-10-${String(5 + E).padStart(2, "0")}`,
          time: `${String(8 + Math.floor(y / 2)).padStart(2, "0")}:00`,
          dentist: y % 2 === 0 ? "Dra. Camila" : "Dr. Felipe",
          chair: y % 2 === 0 ? (Math.floor(y / 2) % 2 === 0 ? "1" : "3") : "2",
          reason: ["Avaliação", "Prevenção", "Manutenção", "Restauração"][
            Math.floor(y / 2)
          ],
          status: y % 3 === 0 ? "Agendada" : "Confirmada",
        }),
      ),
  ).flat(),
  ny = [
    {
      month: "Mai",
      value: 48e3,
    },
    {
      month: "Jun",
      value: 52e3,
    },
    {
      month: "Jul",
      value: 49e3,
    },
    {
      month: "Ago",
      value: 58e3,
    },
    {
      month: "Set",
      value: 61e3,
    },
    {
      month: "Out",
      value: 64e3,
    },
  ],
  je = (N) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(N),
  ou = "2026-10-06",
  Hf = (N) =>
    N.split(" ")
      .map((E) => E[0])
      .slice(0, 2)
      .join(""),
  DEMO_STORAGE_KEY = "ryvelo-demo-v1",
  createInitialState = () => ({
    followups: ty,
    appointments: ey,
    contacts: [],
  });
function loadDemoState() {
  try {
    const N = JSON.parse(localStorage.getItem(DEMO_STORAGE_KEY) || "null");
    if (
      N &&
      Array.isArray(N.followups) &&
      Array.isArray(N.appointments) &&
      Array.isArray(N.contacts)
    )
      return N;
  } catch {}
  return createInitialState();
}
const navigationItems = [
  {
    name: "Início",
    icon: IconHouse,
  },
  {
    name: "Acompanhamento",
    icon: IconChartNoAxesCombined,
  },
  {
    name: "Agenda",
    icon: IconCalendarDays,
  },
  {
    name: "Pacientes",
    icon: IconUsers,
  },
  {
    name: "Orçamentos",
    icon: IconFileText,
  },
  {
    name: "Financeiro",
    icon: IconWallet,
  },
  {
    name: "Configurações",
    icon: IconSettings,
  },
];
function ClinicDemo() {
  const [N, E] = React.useState(loadDemoState),
    [L, y] = React.useState(""),
    [H, Y] = React.useState("todos"),
    [cl, jl] = React.useState(!1),
    [sl, yl] = React.useState(!1),
    [C, j] = React.useState(null),
    [G, El] = React.useState(""),
    [$, Ml] = React.useState(null),
    [A, ol] = React.useState(Vi[0]),
    [pl, va] = React.useState(""),
    [Yl, ta] = React.useState("2026-10-07"),
    [Gl, F] = React.useState("10:00"),
    [nl, Aa] = React.useState("Dra. Camila"),
    [la, ca] = React.useState("1"),
    [Ql, Kl] = React.useState(""),
    [Oa, Al] = React.useState(""),
    [O, X] = React.useState("");
  (React.useEffect(() => {
    try {
      (localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(N)), X(""));
    } catch {
      X(
        "Não foi possível salvar neste navegador. As alterações duram apenas nesta sessão.",
      );
    }
  }, [N]),
    React.useEffect(() => {
      if (!Oa) return;
      const v = window.setTimeout(() => Al(""), 4500);
      return () => clearTimeout(v);
    }, [Oa]));
  const Q = N.followups.filter((v) => v.stage !== "agendado"),
    ul = (v) => Vi.find((D) => D.id === v),
    ll = React.useMemo(
      () =>
        Q.filter(
          (v) =>
            (sl || v.dueToday) &&
            (H === "todos" ||
              (H === "retornos"
                ? v.kind === "retorno"
                : H === "orcamentos"
                  ? v.kind === "orcamento"
                  : v.stage === "contatado")) &&
            `${ul(v.patientId).name} ${v.reason}`
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
              .includes(
                L.normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase(),
              ),
        ).sort((v, D) => D.amount - v.amount || D.days - v.days),
      [N, H, L, sl],
    ),
    sa = N.appointments
      .filter((v) => v.date === ou)
      .sort((v, D) => v.time.localeCompare(D.time)),
    _a = Q.filter((v) => v.dueToday).length,
    Ga = Q.filter((v) => v.kind === "orcamento");
  function r(v, D) {
    const al = ul(v.patientId);
    (ol(al),
      Ml(v),
      Kl(""),
      va(`Olá, ${al.name.split(" ")[0]}! Aqui é a equipe da Dra. Camila. ${v.kind === "retorno" ? "Estamos entrando em contato para organizar sua consulta de acompanhamento. Qual período costuma ser melhor para você?" : "Gostaríamos de saber se ficou alguma dúvida sobre o seu plano de tratamento. Podemos ajudar?"}

Se preferir não receber mensagens de acompanhamento, avise nossa equipe.`),
      j(D));
  }
  function T() {
    if (A.optOut) {
      Kl("Este paciente solicitou não receber mensagens.");
      return;
    }
    if (!pl.trim()) {
      Kl("Escreva a mensagem antes de registrar.");
      return;
    }
    (E((v) => ({
      ...v,
      contacts: [
        ...v.contacts,
        {
          patientId: A.id,
          message: pl,
          date: ou,
        },
      ],
      followups: v.followups.map((D) =>
        D.id === ($ == null ? void 0 : $.id)
          ? {
              ...D,
              stage: "contatado",
            }
          : D,
      ),
    })),
      Al("Contato registrado. O acompanhamento continua pendente."),
      j(null));
  }
  function q(v) {
    if ((v.preventDefault(), !A)) return;
    if (
      N.appointments.some(
        (_) =>
          _.date === Yl &&
          _.time === Gl &&
          _.status !== "Faltou" &&
          (_.dentist === nl || _.chair === la || _.patientId === A.id),
      )
    ) {
      Kl(
        "Horário ocupado para o profissional, a cadeira ou o paciente. Escolha outro horário.",
      );
      return;
    }
    const al = {
      id: crypto.randomUUID(),
      patientId: A.id,
      date: Yl,
      time: Gl,
      dentist: nl,
      chair: la,
      reason: ($ == null ? void 0 : $.reason) || "Avaliação",
      status: "Agendada",
      followupId: $ == null ? void 0 : $.id,
    };
    (E((_) => ({
      ..._,
      appointments: [..._.appointments, al],
      followups: _.followups.map((V) =>
        V.id === ($ == null ? void 0 : $.id)
          ? {
              ...V,
              stage: "agendado",
            }
          : V,
      ),
    })),
      Al(
        `Consulta de ${A.name.split(" ")[0]} agendada para ${Yl.split("-").reverse().join("/")} às ${Gl}.`,
      ),
      j(null));
  }
  const U = () => {
    (j(null), Kl(""));
  };
  return (
    <div className={"app"}>
      <aside className={`sidebar ${cl ? "open" : ""}`}>
        <div className={"brand"}>
          {"ryvelo"}
          <span>{"."}</span>
        </div>
        <button
          className={"mobile-close icon-button"}
          aria-label={"Fechar menu"}
          onClick={() => jl(!1)}
        >
          <IconX />
        </button>
        <div className={"workspace-label"}>{"GESTÃO DA CLÍNICA"}</div>
        <nav aria-label={"Navegação principal"}>
          {navigationItems.map(({ name: v, icon: D }) => (
            <button
              className={v === "Início" ? "nav-item active" : "nav-item"}
              onClick={() => {
                (jl(!1),
                  v === "Início"
                    ? (Y("todos"), yl(!1), y(""))
                    : v === "Agenda"
                      ? (ta(ou), j("agenda"))
                      : (El(v), j("module")));
              }}
              key={v}
            >
              <D size={20} />
              {v}
              {v === "Acompanhamento" && (
                <span className={"nav-count"}>{_a}</span>
              )}
            </button>
          ))}
        </nav>
        <div className={"sidebar-bottom"}>
          <div className={"clinic"}>
            <IconBuilding2 size={21} />
            <div>
              <b>{"Clínica Horizonte"}</b>
              <small>{"2 profissionais · 3 cadeiras"}</small>
            </div>
          </div>
          <div className={"user"}>
            <span className={"avatar"}>{"DC"}</span>
            <div>
              <b>{"Dra. Camila"}</b>
              <small>{"Administradora"}</small>
            </div>
          </div>
          <div className={"demo-badge"}>{"PROTÓTIPO · DADOS FICTÍCIOS"}</div>
        </div>
      </aside>
      {cl && (
        <button
          className={"scrim"}
          aria-label={"Fechar menu"}
          onClick={() => jl(!1)}
        />
      )}
      <main>
        <header className={"topbar"}>
          <button
            className={"mobile-menu icon-button"}
            aria-label={"Abrir menu"}
            onClick={() => jl(!0)}
          >
            <IconMenu />
          </button>
          <label className={"search"}>
            <IconSearch size={19} />
            <input
              aria-label={"Buscar paciente ou procedimento"}
              placeholder={"Buscar paciente ou procedimento…"}
              value={L}
              onChange={(v) => y(v.target.value)}
            />
            {L && (
              <button
                className={"icon-button"}
                aria-label={"Limpar busca"}
                onClick={() => y("")}
              >
                <IconX size={16} />
              </button>
            )}
          </label>
          <span className={"date-label"}>
            <IconCalendarDays size={17} />
            {"6 de outubro de 2026"}
          </span>
          <button
            className={"primary"}
            onClick={() => {
              (Ml(null), ol(Vi[0]), Kl(""), j("schedule"));
            }}
          >
            <IconPlus size={18} />
            <span>{"Nova consulta"}</span>
          </button>
        </header>
        <section className={"page-heading"}>
          <div>
            <div className={"eyebrow"}>{"TERÇA-FEIRA, 6 DE OUTUBRO"}</div>
            <h1>
              {"O que fazer "}
              <em>{"hoje"}</em>
            </h1>
            <p>
              {"Sua equipe tem "}
              <strong>
                {_a}
                {" pacientes"}
              </strong>
              {" para acompanhar."}
            </p>
          </div>
          <button className={"text-button reset"} onClick={() => j("reset")}>
            <IconRotateCcw size={15} />
            {"Restaurar demonstração"}
          </button>
        </section>
        {O && (
          <p role={"alert"} className={"error"}>
            {O}
          </p>
        )}
        <section className={"metrics"} aria-label={"Indicadores da clínica"}>
          <button
            className={"metric pale"}
            onClick={() => {
              (Y("retornos"), yl(!0));
            }}
          >
            <div className={"metric-top"}>
              <span className={"metric-icon"}>
                <IconClock size={20} />
              </span>
              <IconArrowUpRight size={18} />
            </div>
            <strong>{Q.filter((v) => v.kind === "retorno").length}</strong>
            <h2>{"Retornos vencidos"}</h2>
            <p>{"Pacientes que precisam voltar"}</p>
          </button>
          <button
            className={"metric"}
            onClick={() => {
              (Y("orcamentos"), yl(!0));
            }}
          >
            <div className={"metric-top"}>
              <span className={"metric-icon"}>
                <IconFileText size={20} />
              </span>
              <IconArrowUpRight size={18} />
            </div>
            <strong>{Ga.length}</strong>
            <h2>{"Orçamentos em aberto"}</h2>
            <p className={"quote-value"}>
              {je(Ga.reduce((v, D) => v + D.amount, 0))}
            </p>
          </button>
          <button className={"metric navy"} onClick={() => j("result")}>
            <div className={"metric-top"}>
              <span className={"metric-icon"}>
                <IconChartNoAxesCombined size={20} />
              </span>
              <IconArrowUpRight size={18} />
            </div>
            <strong className={"money"}>{je(18450)}</strong>
            <h2>{"Recebido após acompanhamento"}</h2>
            <p>{"Neste mês · exemplo demonstrativo"}</p>
          </button>
          <button className={"metric"} onClick={() => j("result")}>
            <div className={"metric-top"}>
              <span className={"metric-icon"}>
                <IconUsers size={20} />
              </span>
              <IconArrowUpRight size={18} />
            </div>
            <strong>{"16"}</strong>
            <h2>{"Pacientes recuperados"}</h2>
            <p>{"Retornaram neste mês"}</p>
          </button>
        </section>
        <div className={"content-grid"}>
          <section className={"panel followup-panel"}>
            <div className={"panel-heading"}>
              <div>
                <h2>{"Pacientes para acompanhar"}</h2>
                <p>
                  {sl ? "Todas as pendências" : "Próximas ações de hoje"}
                  {" · "}
                  {ll.length} {ll.length === 1 ? "paciente" : "pacientes"}
                </p>
              </div>
              <button className={"text-button"} onClick={() => yl((v) => !v)}>
                {sl ? "Somente hoje" : "Ver todos"}
              </button>
            </div>
            <div className={"tabs"} aria-label={"Filtrar acompanhamento"}>
              {[
                ["todos", "Todos"],
                ["retornos", "Retornos"],
                ["orcamentos", "Orçamentos"],
                ["contatados", "Contatados"],
              ].map(([v, D]) => (
                <button
                  aria-pressed={H === v}
                  className={H === v ? "selected" : ""}
                  onClick={() => Y(v)}
                  key={v}
                >
                  {D}
                </button>
              ))}
            </div>
            <div className={"table-wrap"}>
              <table>
                <thead>
                  <tr>
                    <th>{"Paciente"}</th>
                    <th>{"Motivo"}</th>
                    <th>{"Atraso"}</th>
                    <th>{"Próxima ação"}</th>
                  </tr>
                </thead>
                <tbody>
                  {ll.slice(0, sl ? 52 : 6).map((v) => {
                    const D = ul(v.patientId);
                    return (
                      <tr key={v.id}>
                        <td>
                          <button
                            className={"patient-button"}
                            onClick={() => r(v, "patient")}
                          >
                            <span className={"avatar"}>{Hf(D.name)}</span>
                            <span>
                              <b>{D.name}</b>
                              <small>
                                {v.stage === "contatado"
                                  ? "Contato registrado"
                                  : "A contatar"}
                              </small>
                            </span>
                          </button>
                        </td>
                        <td>
                          <span>{v.reason}</span>
                          {v.amount > 0 && (
                            <small className={"amount"}>{je(v.amount)}</small>
                          )}
                        </td>
                        <td>
                          <span
                            className={`delay ${v.days > 25 ? "late" : ""}`}
                          >
                            {v.days}
                            {" dias"}
                          </span>
                        </td>
                        <td>
                          <button
                            className={"outline compact"}
                            disabled={D.optOut}
                            onClick={() => r(v, "contact")}
                          >
                            <IconMessageCircle size={15} />
                            {D.optOut ? "Sem mensagens" : "Chamar"}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {!ll.length && (
                <div className={"empty"}>
                  <IconCircleCheck size={30} />
                  <h3>{"Nenhum paciente nesta seleção"}</h3>
                  <p>{"Tente outro filtro ou termo de busca."}</p>
                  <button
                    className={"outline"}
                    onClick={() => {
                      (Y("todos"), y(""));
                    }}
                  >
                    {"Limpar filtros"}
                  </button>
                </div>
              )}
            </div>
            {!sl && ll.length > 6 && (
              <button className={"list-more"} onClick={() => yl(!0)}>
                {"Ver todas as pendências"}
              </button>
            )}
          </section>
          <section className={"panel agenda-panel"}>
            <div className={"panel-heading"}>
              <div>
                <h2>{"Agenda de hoje"}</h2>
                <p>
                  {sa.length}
                  {" consultas · 2 profissionais"}
                </p>
              </div>
              <button
                className={"text-button"}
                onClick={() => {
                  (ta(ou), j("agenda"));
                }}
              >
                {"Ver agenda"}
              </button>
            </div>
            <div className={"appointments"}>
              {sa.slice(0, 5).map((v) => (
                <button
                  className={"appointment"}
                  onClick={() => {
                    (ol(ul(v.patientId)), Ml(null), j("patient"));
                  }}
                  key={v.id}
                >
                  <time>{v.time}</time>
                  <span
                    className={`timeline-dot ${v.dentist === "Dr. Felipe" ? "blue" : ""}`}
                  />
                  <div>
                    <b>{ul(v.patientId).name}</b>
                    <p>{v.reason}</p>
                    <small>
                      {v.dentist}
                      {" · Cadeira "}
                      {v.chair}
                    </small>
                    <span
                      className={`status ${v.status === "Confirmada" ? "confirmed" : ""}`}
                    >
                      {v.status}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <div className={"agenda-footer"}>
              <IconCalendarDays size={18} />
              <span>{"Acompanhe confirmações e horários na agenda."}</span>
            </div>
          </section>
        </div>
        <div className={"bottom-grid"}>
          <section className={"panel revenue"}>
            <div className={"panel-heading"}>
              <div>
                <h2>{"Recebimentos da clínica"}</h2>
                <p>{"Histórico demonstrativo dos últimos 6 meses"}</p>
              </div>
              <b className={"revenue-total"}>
                {je(64e3)}
                <small>{"Outubro"}</small>
              </b>
            </div>
            <div className={"chart"} aria-label={"Recebimentos mensais"}>
              {ny.map((v, D) => (
                <div className={"bar-column"} key={v.month}>
                  <span>{je(v.value)}</span>
                  <div
                    className={`bar ${D === 5 ? "current" : ""}`}
                    style={{
                      height: `${(v.value / 64e3) * 96}px`,
                    }}
                  />
                  <small>{v.month}</small>
                </div>
              ))}
            </div>
          </section>
          <section className={"panel explanation"}>
            <div className={"info-icon"}>
              <IconInfo size={22} />
            </div>
            <h2>{"Do contato ao cuidado"}</h2>
            <p>
              {
                "O acompanhamento reúne a próxima ação e o histórico de cada paciente."
              }
            </p>
            <div className={"process"}>
              <span>
                <IconCheck size={14} />
                {"Chamar"}
              </span>
              <IconChevronRight size={13} />
              <span>{"Agendar"}</span>
              <IconChevronRight size={13} />
              <span>{"Retornar"}</span>
            </div>
            <small>
              {
                "Recebimentos associados ao acompanhamento são apresentados separadamente dos orçamentos pendentes."
              }
            </small>
          </section>
        </div>
        <footer className={"page-footer"}>
          <span>{"Ryvelo · Clínica Horizonte"}</span>
          <span>
            {
              "Demonstração com dados fictícios · alterações salvas neste navegador"
            }
          </span>
        </footer>
      </main>
      {Oa && (
        <div className={"toast"} role={"status"}>
          <IconCircleCheck size={19} />
          {Oa}
        </div>
      )}
      {C && (
        <Modal
          title={
            C === "contact"
              ? "Preparar contato"
              : C === "schedule"
                ? "Agendar consulta"
                : C === "patient"
                  ? "Resumo do paciente"
                  : C === "agenda"
                    ? "Agenda demonstrativa"
                    : C === "result"
                      ? "Resultados do acompanhamento"
                      : C === "reset"
                        ? "Restaurar demonstração"
                        : G
          }
          onClose={U}
        >
          {C === "contact" && (
            <div className={"modal-body"}>
              <div className={"patient-summary"}>
                <span className={"avatar big"}>{Hf(A.name)}</span>
                <div>
                  <h3>{A.name}</h3>
                  <p>
                    {$ == null ? void 0 : $.reason}
                    {" · "}
                    {$ == null ? void 0 : $.days}
                    {" dias de atraso"}
                  </p>
                </div>
              </div>
              <label className={"field"}>
                {"Mensagem editável"}
                <textarea
                  rows={7}
                  value={pl}
                  onChange={(v) => va(v.target.value)}
                />
              </label>
              <div className={"callout"}>
                <IconPhone size={18} />
                <p>
                  {
                    "Sem envio real nesta demonstração. Abrir o WhatsApp não registra o contato automaticamente."
                  }
                </p>
              </div>
              {Ql && (
                <p className={"error"} role={"alert"}>
                  {Ql}
                </p>
              )}
              <div className={"modal-actions"}>
                <button
                  className={"outline"}
                  onClick={() => {
                    Kl(
                      "Prévia demonstrativa: revise a mensagem acima. Nenhum contato real foi aberto.",
                    );
                  }}
                >
                  <IconMessageCircle size={18} />
                  {"Prévia do WhatsApp"}
                </button>
                <button className={"primary"} disabled={A.optOut} onClick={T}>
                  {"Registrar contato"}
                </button>
                <button
                  className={"text-button"}
                  onClick={() => {
                    (Kl(""), j("schedule"));
                  }}
                >
                  {"Agendar retorno"}
                </button>
              </div>
            </div>
          )}
          {C === "schedule" && (
            <form className={"modal-body"} onSubmit={q}>
              <label className={"field"}>
                {"Paciente"}
                <select
                  value={A.id}
                  onChange={(v) => {
                    (ol(ul(v.target.value)), Ml(null));
                  }}
                >
                  {Vi.map((v) => (
                    <option value={v.id} key={v.id}>
                      {v.name}
                    </option>
                  ))}
                </select>
              </label>
              <div className={"callout"}>
                <IconInfo size={18} />
                <p>
                  {A.preference}
                  {". Consultas duram 60 minutos nesta demonstração."}
                </p>
              </div>
              <div className={"form-grid"}>
                <label className={"field"}>
                  {"Data"}
                  <input
                    type={"date"}
                    min={ou}
                    required={!0}
                    value={Yl}
                    onChange={(v) => ta(v.target.value)}
                  />
                </label>
                <label className={"field"}>
                  {"Horário"}
                  <select value={Gl} onChange={(v) => F(v.target.value)}>
                    {Array.from(
                      {
                        length: 10,
                      },
                      (v, D) => `${String(D + 8).padStart(2, "0")}:00`,
                    ).map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </label>
                <label className={"field"}>
                  {"Profissional"}
                  <select value={nl} onChange={(v) => Aa(v.target.value)}>
                    <option>{"Dra. Camila"}</option>
                    <option>{"Dr. Felipe"}</option>
                  </select>
                </label>
                <label className={"field"}>
                  {"Cadeira"}
                  <select value={la} onChange={(v) => ca(v.target.value)}>
                    {["1", "2", "3"].map((v) => (
                      <option value={v} key={v}>
                        {"Cadeira "}
                        {v}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              {Ql && (
                <p className={"error"} role={"alert"}>
                  {Ql}
                </p>
              )}
              <div className={"modal-actions"}>
                <button type={"button"} className={"outline"} onClick={U}>
                  {"Cancelar"}
                </button>
                <button className={"primary"} type={"submit"}>
                  {"Confirmar agendamento"}
                </button>
              </div>
            </form>
          )}
          {C === "patient" && (
            <div className={"modal-body"}>
              <div className={"patient-summary"}>
                <span className={"avatar big"}>{Hf(A.name)}</span>
                <div>
                  <h3>{A.name}</h3>
                  <p>
                    {A.age}
                    {" anos · "}
                    {A.preference}
                  </p>
                </div>
              </div>
              <h4>{"Acompanhamentos"}</h4>
              {N.followups
                .filter((v) => v.patientId === A.id)
                .map((v) => (
                  <div className={"detail-row"} key={v.id}>
                    <span>
                      {v.reason}
                      <small>
                        {v.stage === "agendado"
                          ? "Agendado"
                          : v.stage === "contatado"
                            ? "Contato registrado"
                            : "A contatar"}
                      </small>
                    </span>
                    <button
                      className={"outline compact"}
                      onClick={() => r(v, "schedule")}
                    >
                      {"Agendar"}
                    </button>
                  </div>
                ))}
              <h4>{"Próximas consultas"}</h4>
              {N.appointments
                .filter((v) => v.patientId === A.id)
                .map((v) => (
                  <p key={v.id}>
                    {v.date.split("-").reverse().join("/")}
                    {" · "}
                    {v.time}
                    {" · "}
                    {v.dentist}
                  </p>
                ))}
              <h4>{"Histórico de contatos"}</h4>
              {N.contacts.filter((v) => v.patientId === A.id).length ? (
                N.contacts
                  .filter((v) => v.patientId === A.id)
                  .map((v, D) => (
                    <div className={"history"} key={D}>
                      <small>{v.date.split("-").reverse().join("/")}</small>
                      <p>{v.message}</p>
                    </div>
                  ))
              ) : (
                <p className={"muted"}>
                  {"Nenhum contato registrado neste protótipo."}
                </p>
              )}
              <div className={"callout"}>
                <IconInfo size={18} />
                <p>
                  {
                    "A ficha clínica completa e o odontograma serão construídos na etapa de Pacientes."
                  }
                </p>
              </div>
            </div>
          )}
          {C === "agenda" && (
            <div className={"modal-body"}>
              <label className={"field"}>
                {"Selecionar dia"}
                <input
                  type={"date"}
                  value={Yl}
                  onChange={(v) => ta(v.target.value)}
                />
              </label>
              {N.appointments
                .filter((v) => v.date === Yl)
                .sort((v, D) => v.time.localeCompare(D.time))
                .map((v) => (
                  <div className={"detail-row"} key={v.id}>
                    <span>
                      <b>
                        {v.time}
                        {" · "}
                        {ul(v.patientId).name}
                      </b>
                      <small>
                        {v.dentist}
                        {" · Cadeira "}
                        {v.chair}
                        {" · "}
                        {v.reason}
                      </small>
                    </span>
                    <span className={"status"}>{v.status}</span>
                  </div>
                ))}
              {!N.appointments.some((v) => v.date === Yl) && (
                <p>{"Nenhuma consulta neste dia."}</p>
              )}
              <p className={"muted"}>
                {
                  "Visão resumida. A agenda completa será construída na etapa correspondente."
                }
              </p>
            </div>
          )}
          {C === "result" && (
            <div className={"modal-body"}>
              <div className={"result-number"}>{je(18450)}</div>
              <h3>{"Recebido após acompanhamento"}</h3>
              <p>
                {
                  "Exemplo de recebimentos vinculados a acompanhamentos registrados. Não representa receita garantida ou resultados reais de uma clínica."
                }
              </p>
              <div className={"detail-row"}>
                <span>{"Pacientes que retornaram no mês"}</span>
                <b>{"16"}</b>
              </div>
              <div className={"detail-row"}>
                <span>{"Orçamentos ainda em aberto"}</span>
                <b>{je(Ga.reduce((v, D) => v + D.amount, 0))}</b>
              </div>
              <p className={"muted"}>
                {
                  "Os resultados financeiros permanecem fixos nesta primeira tela. Agendar uma consulta não aumenta o faturamento."
                }
              </p>
            </div>
          )}
          {C === "module" && (
            <div className={"modal-body"}>
              <h3>
                {G}
                {": próxima etapa"}
              </h3>
              <p>
                {"Esta entrega contém o Início/Painel funcional. O módulo de "}
                {G.toLowerCase()}
                {
                  " será construído após a aprovação das etapas correspondentes."
                }
              </p>
              <p className={"muted"}>
                {
                  "Você já pode buscar pacientes, filtrar pendências, registrar contatos e agendar pela tela inicial."
                }
              </p>
              <button className={"primary"} onClick={U}>
                {"Voltar ao painel"}
              </button>
            </div>
          )}
          {C === "reset" && (
            <div className={"modal-body"}>
              <p>
                {
                  "Isso remove os contatos e agendamentos feitos nesta demonstração e restaura os dados iniciais."
                }
              </p>
              <div className={"modal-actions"}>
                <button className={"outline"} onClick={U}>
                  {"Cancelar"}
                </button>
                <button
                  className={"primary"}
                  onClick={() => {
                    (E(createInitialState()),
                      y(""),
                      Y("todos"),
                      yl(!1),
                      U(),
                      Al("Demonstração restaurada."));
                  }}
                >
                  {"Restaurar dados"}
                </button>
              </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}
const questions = [
    {
      icon: IconCalendarDays,
      title: "Uma agenda conectada.",
      text: "Consultas, profissionais e cadeiras organizados. Do acompanhamento ao horário marcado, com contexto.",
    },
    {
      icon: IconUsers,
      title: "O paciente, por inteiro.",
      text: "Cadastro, histórico e preferências reunidos para sua equipe continuar de onde parou.",
    },
    {
      icon: IconFileText,
      title: "Tratamentos em movimento.",
      text: "Orçamentos e próximas ações visíveis para que cada avaliação tenha acompanhamento.",
    },
    {
      icon: IconWallet,
      title: "Resultado que você enxerga.",
      text: "Separe tratamentos pendentes de valores recebidos e acompanhe a evolução da clínica.",
    },
  ],
  fy = [
    [
      "A Ryvelo é só um CRM?",
      "A proposta é conectar gestão e acompanhamento: agenda, pacientes, ficha clínica, orçamentos e financeiro em uma mesma rotina. O acompanhamento de retornos e tratamentos pendentes é o centro da operação.",
    ],
    [
      "Qual a diferença entre assinatura e implantação?",
      "Na assinatura, sua equipe configura e opera a plataforma. Na implantação, a Ryvelo conduz o diagnóstico, a configuração dos processos, a personalização do ambiente e o treinamento dentro do escopo contratado.",
    ],
    [
      "Por que a implantação tem uma mensalidade de R$197?",
      "É a condição de assinatura do ambiente personalizado contratado. O investimento inicial cobre o projeto de implantação. A mensalidade cobre o uso e a manutenção; expansões e serviços adicionais são orçados separadamente.",
    ],
    [
      "Minha clínica pode usar sua própria marca?",
      "Na implantação personalizada, o ambiente recebe a logo e as cores da clínica, com a identificação discreta “Powered by Ryvelo”. A personalização é de identidade e configuração; não inclui propriedade do código-fonte.",
    ],
    [
      "Como funciona o WhatsApp?",
      "O início prevê mensagens editáveis e abertura do WhatsApp pela equipe. Conexão, envios automáticos e agentes estão previstos para evolução do produto e dependem de disponibilidade técnica. Consumo de IA, provedor e mensagens serão informados e cobrados separadamente.",
    ],
    [
      "Já posso contratar e usar com pacientes reais?",
      "A Ryvelo está em fase de demonstração. O painel público usa dados fictícios; os módulos completos, login, banco de dados e integrações ainda estão em desenvolvimento. Solicite uma apresentação para conhecer o projeto e as condições de lançamento.",
    ],
    [
      "Como será a migração?",
      "A proposta inclui importação por planilha, com associação de colunas e revisão dos dados. Na implantação, a importação é assistida dentro do limite contratado. Limpeza extensa de dados e migrações complexas terão orçamento próprio.",
    ],
  ];
function SalesPage() {
  const [N, E] = React.useState(!1),
    [L, y] = React.useState(!1),
    [H, Y] = React.useState("Demonstração"),
    [cl, jl] = React.useState(""),
    [sl, yl] = React.useState(""),
    [C, j] = React.useState(""),
    [G, El] = React.useState(!1),
    $ = (A) => {
      (Y(A), y(!0), El(!1));
    };
  function Ml(A) {
    A.preventDefault();
    const ol = encodeURIComponent(`Ryvelo — ${H}`),
      pl = encodeURIComponent(`Olá! Quero conhecer a Ryvelo.

Nome: ${cl}
Clínica: ${sl}
E-mail: ${C}
Interesse: ${H}

Gostaria de agendar uma demonstração e conhecer o diagnóstico gratuito da base.`);
    ((window.location.href = `mailto:nklnegociosdigitais@gmail.com?subject=${ol}&body=${pl}`),
      El(!0));
  }
  return (
    <div className={"sales"}>
      <div className={"s-shell"}>
        <nav className={"s-nav"} aria-label={"Menu principal"}>
          <a className={"s-logo"} href={"#"}>
            {"ryvelo"}
            <span>{"."}</span>
          </a>
          <div className={N ? "s-links visible" : "s-links"}>
            {[
              ["#produto", "O produto"],
              ["#como-funciona", "Como funciona"],
              ["#planos", "Planos"],
              ["#implantacao", "Implantação"],
            ].map(([A, ol]) => (
              <a href={A} onClick={() => E(!1)} key={A}>
                {ol}
              </a>
            ))}
          </div>
          <button
            className={"s-btn s-btn-light nav-cta"}
            onClick={() => $("Demonstração")}
          >
            {"Agendar demonstração"}
          </button>
          <button
            className={"s-mobile"}
            aria-label={N ? "Fechar menu" : "Abrir menu"}
            onClick={() => E(!N)}
          >
            {N ? <IconX /> : <IconMenu />}
          </button>
        </nav>
        <section className={"s-hero"}>
          <div className={"s-hero-copy"}>
            <span className={"s-tag"}>
              {"GESTÃO + ACOMPANHAMENTO PARA CLÍNICAS"}
            </span>
            <h1>
              {"Sua clínica organizada."}
              <br />
              {"Seus pacientes "}
              <em>{"acompanhados."}</em>
            </h1>
            <p>
              {
                "Agenda, pacientes e financeiro em um só lugar. E clareza sobre quem chamar para voltar ou dar continuidade ao tratamento."
              }
            </p>
            <div className={"s-actions"}>
              <button
                className={"s-btn s-btn-dark"}
                onClick={() => $("Demonstração")}
              >
                {"Conhecer a Ryvelo "}
                <IconArrowUpRight size={18} />
              </button>
              <a className={"s-btn s-btn-outline"} href={"/demo"}>
                {"Explorar demonstração"}
              </a>
            </div>
            <div className={"s-hero-note"}>
              <span className={"s-tiny-icons"}>
                <IconCalendarDays size={15} />
                <IconMessageCircle size={15} />
                <IconUsers size={15} />
              </span>
              <span>{"Uma rotina conectada. Uma equipe com direção."}</span>
            </div>
          </div>
          <div className={"s-hero-art"}>
            <VslPlayer />
          </div>
        </section>
        <div className={"s-brand-line"}>
          <span>{"PARA A ROTINA REAL DA SUA CLÍNICA"}</span>
          <b>{"Odontologia"}</b>
          <b>{"Ortodontia"}</b>
          <b>{"Implantes"}</b>
          <b>{"Harmonização"}</b>
          <b>{"Clínicas de saúde"}</b>
        </div>
        <section className={"s-section"} id={"produto"}>
          <div className={"s-section-heading"}>
            <span className={"s-tag"}>
              {"O QUE NÃO PODE FICAR PELO CAMINHO"}
            </span>
            <h2>
              {"O atendimento termina."}
              <br />
              <em>{"O acompanhamento continua."}</em>
            </h2>
            <p>
              {
                "Retornos passam da data. Orçamentos ficam sem resposta. A Ryvelo foi pensada para transformar essas pendências em próximos passos."
              }
            </p>
          </div>
          <div className={"s-bento"}>
            <div className={"s-bento-large"}>
              <span className={"s-number"}>{"01"}</span>
              <h3>
                {"Quem precisa"}
                <br />
                {"voltar?"}
              </h3>
              <p>
                {
                  "Retornos de prevenção, manutenção e revisão reunidos em uma lista de acompanhamento."
                }
              </p>
              <div className={"s-example"}>
                <IconClock size={19} />
                <span>{"Mariana · retorno vencido há 32 dias"}</span>
              </div>
            </div>
            <div className={"s-bento-middle"}>
              <div className={"s-white-card"}>
                <span className={"s-number"}>{"02"}</span>
                <h3>
                  {"Qual tratamento"}
                  <br />
                  {"ficou pendente?"}
                </h3>
                <p>
                  {
                    "Orçamentos visíveis, com histórico de contato e próxima tentativa."
                  }
                </p>
              </div>
              <div className={"s-teal-card"}>
                <span className={"s-number"}>{"03"}</span>
                <h3>{"O que fazer agora?"}</h3>
                <p>
                  {"Chamar, registrar a resposta e organizar o agendamento."}
                </p>
              </div>
            </div>
            <div className={"s-bento-last"}>
              <div className={"s-big-figure"}>
                {"Uma"}
                <br />
                {"rotina."}
              </div>
              <h3>{"Toda a equipe na mesma página."}</h3>
              <p>
                {
                  "Contexto e responsabilidades para o acompanhamento não depender da memória de uma pessoa."
                }
              </p>
            </div>
          </div>
        </section>
        <section className={"s-section"}>
          <div className={"s-split-heading"}>
            <span className={"s-tag"}>{"A ESTRUTURA DO PRODUTO"}</span>
            <h2>
              {"Gestão completa."}
              <br />
              <em>{"Com direção para agir."}</em>
            </h2>
            <p>
              {
                "O projeto conecta os registros da clínica ao acompanhamento dos pacientes. Conheça a proposta de cada módulo."
              }
            </p>
          </div>
          <div className={"s-feature-grid"}>
            {questions.map(({ icon: A, title: ol, text: pl }, va) => (
              <article key={ol}>
                <div className={`s-feature-visual visual-${va}`}>
                  <A size={45} strokeWidth={1.2} />
                  <span>
                    {["Agenda", "Pacientes", "Orçamentos", "Financeiro"][va]}
                  </span>
                  <div className={"s-visual-lines"}>
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className={"s-feature-copy"}>
                  <h3>{ol}</h3>
                  <p>{pl}</p>
                </div>
              </article>
            ))}
          </div>
          <div className={"s-stage-note"}>
            <Brand />
            <p>
              <b>{"Conheça o produto em construção."}</b>
              {
                " O painel já tem uma demonstração funcional. Os demais módulos e integrações estão em desenvolvimento."
              }
            </p>
            <a href={"/demo"}>
              {"Explorar o painel "}
              <IconMoveUpRight size={16} />
            </a>
          </div>
        </section>
        <section className={"s-human"}>
          <img
            src={"/clinica.webp"}
            alt={
              "Ilustração fotográfica de dentista e recepcionista organizando o atendimento"
            }
            loading={"lazy"}
            width={"1000"}
            height={"667"}
          />
          <div>
            <span className={"s-tag"}>{"FEITA PARA QUEM CUIDA"}</span>
            <h2>
              {"Mais contexto para a equipe."}
              <br />
              <em>{"Mais atenção para o paciente."}</em>
            </h2>
            <p>
              {
                "Uma rotina organizada deixa claro quem precisa de acompanhamento, qual foi a última conversa e o próximo passo."
              }
            </p>
            <small>{"Imagem ilustrativa gerada por IA."}</small>
          </div>
        </section>
        <section className={"s-process-section"} id={"como-funciona"}>
          <span className={"s-tag"}>{"DA PENDÊNCIA AO PRÓXIMO PASSO"}</span>
          <h2>
            {"Quatro passos."}
            <br />
            <em>{"Um cuidado que continua."}</em>
          </h2>
          <div className={"s-steps"}>
            {[
              [
                "01",
                "Identifique",
                "Veja retornos vencidos e tratamentos aguardando acompanhamento.",
              ],
              [
                "02",
                "Entre em contato",
                "Revise a mensagem e converse com o paciente pelo WhatsApp.",
              ],
              [
                "03",
                "Organize o retorno",
                "Registre a resposta e agende com o contexto disponível.",
              ],
              [
                "04",
                "Acompanhe o resultado",
                "Mantenha o histórico e diferencie pendências de recebimentos.",
              ],
            ].map(([A, ol, pl]) => (
              <div key={A}>
                <span>{A}</span>
                <h3>{ol}</h3>
                <p>{pl}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={"s-section s-custom"} id={"implantacao"}>
          <div className={"s-custom-art"}>
            <div className={"s-custom-window"}>
              <div className={"s-custom-brand"}>
                <span>{"H"}</span>
                <div>
                  {"Clínica Horizonte"}
                  <small>{"Powered by Ryvelo"}</small>
                </div>
              </div>
              <h3>
                {"Sua operação."}
                <br />
                {"Sua identidade."}
              </h3>
              <div className={"s-custom-progress"}>
                <span>
                  <IconCheck size={15} />
                  {"Identidade aplicada"}
                </span>
                <span>
                  <IconCheck size={15} />
                  {"Processos configurados"}
                </span>
                <span>
                  <IconCheck size={15} />
                  {"Equipe treinada"}
                </span>
              </div>
              <small>{"Representação da proposta de personalização"}</small>
            </div>
            <span className={"s-custom-caption"}>
              {"FEITA PARA A SUA ROTINA"}
            </span>
          </div>
          <div className={"s-custom-copy"}>
            <span className={"s-tag"}>{"IMPLANTAÇÃO PERSONALIZADA"}</span>
            <h2>
              {"A tecnologia é Ryvelo."}
              <br />
              <em>{"A operação é sua."}</em>
            </h2>
            <p>
              {
                "Implantamos uma estrutura de acompanhamento feita para a sua clínica: processos, mensagens, responsabilidades e um ambiente com sua marca."
              }
            </p>
            <ul>
              {[
                "Diagnóstico e configuração da operação",
                "Funis e mensagens personalizados",
                "Logo e cores da clínica no ambiente",
                "Importação assistida e treinamento inicial",
                "Acompanhamento durante a implantação",
              ].map((A) => (
                <li key={A}>
                  <IconCheck size={17} />
                  {A}
                </li>
              ))}
            </ul>
            <button
              className={"s-btn s-btn-light"}
              onClick={() => $("Implantação personalizada")}
            >
              {"Quero minha operação implantada "}
              <IconArrowUpRight size={18} />
            </button>
          </div>
        </section>
        <section className={"s-pricing"} id={"planos"}>
          <div className={"s-section-heading"}>
            <span className={"s-tag"}>{"PLANOS E IMPLANTAÇÃO"}</span>
            <h2>
              {"Escolha como começar."}
              <br />
              <em>{"Cresça com estrutura."}</em>
            </h2>
            <p>
              {
                "Configure com sua equipe ou conte com a Ryvelo para implantar a operação. Condições propostas para o lançamento."
              }
            </p>
          </div>
          <div className={"s-price-grid"}>
            <PlanCard
              title={"Starter"}
              value={"197"}
              desc={"Para organizar a rotina."}
              features={[
                "Até 2 profissionais e 5 usuários",
                "Agenda, pacientes e financeiro",
                "Retornos e orçamentos acompanhados",
                "Mensagens prontas e editáveis",
                "Configuração padrão",
              ]}
              cta={"Conhecer o Starter"}
              onClick={() => $("Starter — R$197/mês")}
            />
            <PlanCard
              title={"Pro"}
              value={"297"}
              desc={"Para ampliar o acompanhamento."}
              features={[
                "Até 5 profissionais e 12 usuários",
                "Tudo do Starter",
                "Até 5 funis configuráveis",
                "Até 10 regras internas automáticas",
                "Relatórios e suporte prioritário",
              ]}
              cta={"Conhecer o Pro"}
              onClick={() => $("Pro — R$297/mês")}
              featured={!0}
            />
            <article className={"s-price s-price-custom"}>
              <span className={"s-price-label"}>
                {"PROJETO DE IMPLANTAÇÃO"}
              </span>
              <h3>{"Personalizada"}</h3>
              <p>{"Para começar com a operação pronta."}</p>
              <div className={"s-setup-price"}>
                <small>{"A partir de"}</small>
                <span>
                  {"R$"}
                  <b>{"1.297"}</b>
                </span>
                <small>{"de implantação + R$197/mês"}</small>
              </div>
              <ul>
                {[
                  "Ambiente com a marca da clínica",
                  "Processos e funis configurados",
                  "Mensagens personalizadas",
                  "Importação e treinamento assistidos",
                  "Acompanhamento na implantação",
                ].map((A) => (
                  <li key={A}>
                    <IconCheck size={16} />
                    {A}
                  </li>
                ))}
              </ul>
              <button
                className={"s-btn s-btn-dark"}
                onClick={() => $("Implantação personalizada")}
              >
                {"Definir minha implantação"}
              </button>
            </article>
          </div>
          <p className={"s-price-footnote"}>
            {
              "Sem cobrança por paciente cadastrado. Limites de equipe, arquivos e escopo variam por plano. WhatsApp conectado, mensagens e consumo de IA têm custos separados, conforme disponibilidade."
            }
          </p>
          <div className={"s-setup-details"}>
            <div>
              <span className={"s-tag"}>
                {"O QUE O INVESTIMENTO INICIAL ENTREGA"}
              </span>
              <h3>
                {"Configuração, treinamento"}
                <br />
                {"e acompanhamento."}
              </h3>
              <p>
                {
                  "Você contrata o trabalho de organizar e implantar a operação. A mensalidade mantém o uso da plataforma dentro dos limites contratados."
                }
              </p>
            </div>
            <div className={"s-setup-options"}>
              <div>
                <b>
                  {"Essencial "}
                  <span>{"R$1.297"}</span>
                </b>
                <p>
                  {
                    "Até 2 funis, 5 regras, 8 mensagens, 1 treinamento e 15 dias de acompanhamento."
                  }
                </p>
              </div>
              <div>
                <b>
                  {"Completa "}
                  <span>{"R$1.997"}</span>
                </b>
                <p>
                  {
                    "Até 5 funis, 10 regras, 15 mensagens, 2 treinamentos e 30 dias de acompanhamento."
                  }
                </p>
                <small>
                  {
                    "Configuração de 1 número WhatsApp e 1 agente quando disponíveis. Consumo separado."
                  }
                </small>
              </div>
            </div>
          </div>
          <details className={"s-comparison"}>
            <summary>
              {"Comparar recursos e limites "}
              <IconPlus size={18} />
            </summary>
            <div className={"s-compare-scroll"}>
              <table>
                <thead>
                  <tr>
                    <th>{"Recurso"}</th>
                    <th>{"Starter"}</th>
                    <th>{"Pro"}</th>
                    <th>{"Personalizada"}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Unidades", "1", "1", "1"],
                    ["Profissionais", "2", "5", "5"],
                    ["Cadeiras/salas", "3", "5", "5"],
                    ["Usuários", "5", "12", "12"],
                    ["Arquivos", "2 GB", "10 GB", "10 GB"],
                    [
                      "Funis",
                      "2 padrão",
                      "Até 5 configuráveis",
                      "Até 5 configurados",
                    ],
                    ["Marca da clínica", "—", "—", "Incluída"],
                    ["Importação", "Pela equipe", "Pela equipe", "Assistida"],
                    [
                      "Treinamento",
                      "Tutoriais",
                      "Tutoriais + encontro coletivo",
                      "Individual",
                    ],
                    ["Mensalidade", "R$197", "R$297", "R$197 + implantação"],
                  ].map((A) => (
                    <tr key={A[0]}>
                      {A.map((ol, pl) =>
                        pl === 0 ? (
                          <th key={pl}>{ol}</th>
                        ) : (
                          <td key={pl}>{ol}</td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </section>
        <section className={"s-section s-faq"}>
          <div>
            <span className={"s-tag"}>{"ANTES DE COMEÇAR"}</span>
            <h2>
              {"Clareza desde"}
              <br />
              <em>{"a primeira conversa."}</em>
            </h2>
            <p>
              {"Entenda a assinatura, a implantação e a fase atual do produto."}
            </p>
          </div>
          <div>
            {fy.map(([A, ol]) => (
              <details key={A}>
                <summary>
                  {A}
                  <IconPlus size={18} className={"plus"} />
                  <IconMinus size={18} className={"minus"} />
                </summary>
                <p>{ol}</p>
              </details>
            ))}
          </div>
        </section>
        <section className={"s-final"}>
          <div>
            <span className={"s-tag"}>{"VAMOS CONVERSAR"}</span>
            <h2>
              {"Quais pacientes"}
              <br />
              {"precisam da sua"}
              <br />
              <em>{"atenção hoje?"}</em>
            </h2>
            <button
              className={"s-btn s-btn-dark"}
              onClick={() => $("Demonstração e diagnóstico gratuito")}
            >
              {"Agendar demonstração "}
              <IconArrowUpRight size={18} />
            </button>
          </div>
          <div className={"s-final-card"}>
            <span className={"s-tag"}>{"PRIMEIRA CONVERSA"}</span>
            <strong>
              {"Diagnóstico"}
              <br />
              {"gratuito."}
            </strong>
            <p>
              {
                "Conheça a proposta da Ryvelo e como organizar o acompanhamento da sua base."
              }
            </p>
            <small>{"Sem enviar dados de pacientes pelo formulário."}</small>
          </div>
        </section>
        <footer className={"s-footer"}>
          <div>
            <a className={"s-logo"} href={"#"}>
              {"ryvelo"}
              <span>{"."}</span>
            </a>
            <p>
              {"Sua clínica organizada."}
              <br />
              {"Seus pacientes acompanhados."}
            </p>
          </div>
          <div>
            <b>{"Conheça"}</b>
            <a href={"#produto"}>{"O produto"}</a>
            <a href={"#planos"}>{"Planos"}</a>
            <a href={"/demo"}>{"Demonstração"}</a>
          </div>
          <div>
            <b>{"Personalize"}</b>
            <a href={"#implantacao"}>{"Implantação"}</a>
            <button onClick={() => $("Implantação personalizada")}>
              {"Conversar com a equipe"}
            </button>
          </div>
          <div>
            <b>{"Contato"}</b>
            <a href={"mailto:nklnegociosdigitais@gmail.com"}>
              {"E-mail comercial"}
            </a>
            <span>{"Ryvelo · fase de demonstração"}</span>
          </div>
          <div className={"s-footer-bottom"}>
            <span>{"© 2026 Ryvelo"}</span>
            <span>
              {"Imagens do produto e números apresentados são demonstrativos."}
            </span>
          </div>
        </footer>
      </div>
      {L && (
        <Modal title={"Conheça a Ryvelo"} onClose={() => y(!1)}>
          <form className={"modal-body"} onSubmit={Ml}>
            <p className={"muted"}>
              {"Interesse: "}
              {H}
            </p>
            <label className={"field"}>
              {"Seu nome"}
              <input
                required={!0}
                autoComplete={"name"}
                value={cl}
                onChange={(A) => jl(A.target.value)}
              />
            </label>
            <label className={"field"}>
              {"Nome da clínica"}
              <input
                required={!0}
                value={sl}
                onChange={(A) => yl(A.target.value)}
              />
            </label>
            <label className={"field"}>
              {"E-mail"}
              <input
                required={!0}
                type={"email"}
                autoComplete={"email"}
                value={C}
                onChange={(A) => j(A.target.value)}
              />
            </label>
            <p className={"muted"}>
              {
                "Ao continuar, seu aplicativo de e-mail abrirá uma mensagem para a equipe. O envio será feito por você. Estes dados não são armazenados pela página."
              }
            </p>
            {G && (
              <div className={"callout"}>
                <p>
                  {
                    "Mensagem preparada. Finalize o envio no seu aplicativo de e-mail. Se ele não abriu, escreva para "
                  }
                  <a href={"mailto:nklnegociosdigitais@gmail.com"}>
                    {"nklnegociosdigitais@gmail.com"}
                  </a>
                  {"."}
                </p>
              </div>
            )}
            <button className={"primary"} type={"submit"}>
              {"Preparar solicitação por e-mail"}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
function Brand() {
  return <IconShieldCheck size={24} />;
}
function PlanCard({
  title: N,
  value: E,
  desc: L,
  features: y,
  cta: H,
  onClick: Y,
  featured: cl = !1,
}) {
  return (
    <article className={`s-price ${cl ? "s-featured" : ""}`}>
      <span className={"s-price-label"}>
        {cl ? "MAIS AUTONOMIA" : "PLATAFORMA ESSENCIAL"}
      </span>
      <h3>{N}</h3>
      <p>{L}</p>
      <div className={"s-plan-value"}>
        <span>{"R$"}</span>
        <b>{E}</b>
        <small>{"/mês"}</small>
      </div>
      <ul>
        {y.map((jl) => (
          <li key={jl}>
            <IconCheck size={16} />
            {jl}
          </li>
        ))}
      </ul>
      <button
        className={`s-btn ${cl ? "s-btn-light" : "s-btn-outline"}`}
        onClick={Y}
      >
        {H}
      </button>
    </article>
  );
}
export { ClinicDemo, SalesPage };
