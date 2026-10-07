export type Patient={id:string;name:string;age:number;preference:string;optOut:boolean};
export type Followup={id:string;patientId:string;kind:'retorno'|'orcamento';reason:string;days:number;amount:number;stage:'a-contatar'|'contatado'|'agendado';dueToday:boolean};
export type Appointment={id:string;patientId:string;date:string;time:string;dentist:string;chair:string;reason:string;status:'Agendada'|'Confirmada'|'Compareceu'|'Faltou';followupId?:string};
const first=['Mariana','Rafael','Juliana','André','Beatriz','Lucas','Fernanda','Carla','Gabriel','Patrícia','Renato','Letícia','Daniel','Paula','Thiago','Simone','João','Ana','Bruno','Camila','Diego','Luiza','Eduardo','Priscila','Vinícius'];
const last=['Santos','Oliveira','Costa','Lima','Almeida','Pereira','Souza','Mendes','Ribeiro','Carvalho','Martins','Rocha','Barbosa','Azevedo','Machado','Vieira','Gomes','Moreira','Teixeira','Nunes','Cardoso','Silva','Freitas','Correia','Pinto'];
export const patients:Patient[]=Array.from({length:150},(_,i)=>({id:`p${i+1}`,name:`${first[i%25]} ${last[(i%25+Math.floor(i/25)*4)%25]}`.replace(/^João Pinto$/,'João Machado'),age: i===0?38:24+(i*7)%49,preference:i%3===0?'Prefere manhã':i%3===1?'Prefere tarde':'Horário flexível',optOut:i===38}));
const reasons=['Retorno de prevenção','Manutenção ortodôntica','Revisão de implante','Acompanhamento de clareamento'];
const values=[8500,12500,6500,4200,9800,5500,7200,3800,11000,6000,4700,5300];
export const followups:Followup[]=[...Arr���q�^