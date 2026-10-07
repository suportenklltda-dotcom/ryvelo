import {useMemo,useState,useEffect} from 'react';
import {Home,ChartNoAxesCombined,CalendarDays,Users,FileText,Wallet,Settings,Search,Plus,Clock,ArrowUpRight,Check,Menu,X,MessageCircle,RotateCcw,Building2,ChevronRight,Info,Phone,CheckCircle2} from 'lucide-react';
import Modal from './components/Modal';
import {patients,followups as initialFollowups,appointments as initialAppointments,revenue,money,initials,DEMO_DATE,type Followup,type Appointment,type Patient} from './data/demo';
type State={followups:Followup[];appointments:Appointment[];contacts:{patientId:string;message:string;date:string}[]};
const key='ryvelo-demo-v1';
const initial=()=>({followups:initialFollowups,appointments:initialAppointments,contacts:[]});
function read():State{try{const s=JSON.parse(localStorage.getItem(key)||'null');if(s&&Array.isArray(s.followups)&&Array.isArray(s.appointments)&&Array.isArray(s.contacts))return s}catch{}return initial()}
const navigation=[{name:'In√≠cio',icon:Home},{name:'Acompanhamento',icon:ChartNoAxesCombined},{name:'Agenda',icon:CalendarDays},{name:'Pacientes',icon:Users},{name:'Or√ßamentos',icon:FileText},{name:'Financeiro',icon:Wallet},{name:'Configura√ß√µes',icon:Settings}];
export default function App(){
 const [state,setState]=useState<State>(read);const [query,setQuery]=useState('');const [filter,setFilter]=useState('todos');const [menu,setMenu]=useState(false);const [showAll,setShowAll]=useState(false);
 const [modal,setModal]=useState<'patient'|'contact'|'schedule'|'∂ªßq´^