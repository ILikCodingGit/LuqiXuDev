const achievements=[

{year:2023,title:"VEX IQ Season Opener",preview:"Teamwork Champion Award",desc:"VEX IQ robotics competition focused on teamwork and autonomous robot challenges.",link:"https://www.vexrobotics.com/viqc"},

{year:2023,title:"VRC Nationals",preview:"Nationals Invitation",desc:"The VEX Robotics Competition where teams design and build robots for engineering-based games.",link:"https://www.vexrobotics.com/v5"},

{year:2023,title:"FLL Macquarie Qualifier",preview:"Core Values 2nd Place",desc:"FIRST Lego League robotics competition combining innovation projects and robot missions.",link:"https://www.firstlegoleague.org"},

{year:2023,title:"FLL Nationals",preview:"Nationals Invitation",desc:"National level of the FIRST Lego League robotics competition.",link:"https://www.firstlegoleague.org"},

{year:2023,title:"FTC Participation",preview:"Competition Participant",desc:"FIRST Tech Challenge robotics competition building advanced robots.",link:"https://www.firstinspires.org/robotics/ftc"},


{year:2024,title:"VEX V5RC Nationals",preview:"Nationals Invitation",desc:"Advanced robotics competition where teams build robots for strategic games.",link:"https://www.vexrobotics.com/v5"},

{year:2024,title:"FLL Wollongong Qualifier",preview:"Robot Game 1st Place",desc:"Regional FIRST Lego League robotics tournament.",link:"https://www.firstlegoleague.org"},

{year:2024,title:"FLL Nationals",preview:"Nationals Invitation",desc:"Top FIRST Lego League teams compete nationally.",link:"https://www.firstlegoleague.org"},

{year:2024,title:"FLL Asia Pacific",preview:"World Invitation",desc:"Asia-Pacific international FIRST Lego League championship.",link:"https://www.firstlegoleague.org"},

{year:2024,title:"Botball International",preview:"Outstanding Rookie Award",desc:"Autonomous robotics programming competition.",link:"https://www.botball.org"},


{year:2024,title:"Botball Defense Record",preview:"Highest Rookie Defense Score",desc:"Highest defense score in the rookie bracket at Botball International.",link:"https://www.botball.org"},

{year:2024,title:"GCER Conference",preview:"2 Papers Published",desc:"Computing and engineering research conference.",link:"https://www.kipr.org/gcer"},

{year:2024,title:"CoderZ",preview:"2nd Place USA",desc:"International robotics coding competition.",link:"https://gocoderz.com"},

{year:2024,title:"OUCC",preview:"Round 1 Merit Award",desc:"Programming contest testing algorithmic thinking.",link:"https://amt.edu.au"},

{year:2024,title:"Grok NCSS",preview:"Perfect Score HD",desc:"Programming competition focused on computational thinking.",link:"https://groklearning.com"},


{year:2024,title:"Grok Web Competition",preview:"Perfect Score HD",desc:"Web development programming competition.",link:"https://groklearning.com"},

{year:2024,title:"Math Olympiad",preview:"Top 25%",desc:"Mathematics competition testing advanced problem solving.",link:"https://apsmo.edu.au"},

{year:2024,title:"CAT",preview:"Credit Award",desc:"Australian Computational and Algorithmic Thinking competition.",link:"https://amt.edu.au/cat"},

{year:2025,title:"ICO",preview:"Top Score Oceania",desc:"International Cybersecurity Olympiad cybersecurity competition.",link:"https://ico2026.au"},

{year:2025,title:"ICO",preview:"Top 50% Globally - 370 Points",desc:"International Cybersecurity Olympiad cybersecurity competition.",link:"https://ico2026.au"},

{year:2025,title:"FRC DDU",preview:"8th & 11th Place",desc:"FIRST Robotics Competition regional event.",link:"https://www.firstinspires.org/robotics/frc"},

{year:2025,title:"AIO",preview:"Gold Medal - 400 Points",desc:"Australian Informatics Olympiad competitive programming contest.",link:"https://aio.edu.au"},

{year:2025,title:"PCTC Round 1",preview:"Distinction Top 25%",desc:"Perse Coding Team Competition international contest.",link:"https://pctc.perse.co.uk"},

{year:2025,title:"PCTC Round 2",preview:"Distinction Top 25%",desc:"Advanced Perse Coding Team Competition round.",link:"https://pctc.perse.co.uk"},

{year:2025,title:"IMC Prosperity 3",preview:"Ranked 81st",desc:"Algorithmic trading challenge by IMC.",link:"https://prosperity.imc.com"},

{year:2025,title:"IOAI Selection",preview:"Round 2 Invitation",desc:"International Olympiad in Artificial Intelligence selection round.",link:"https://ioai.org.au/"},

{year:2025,title:"AMC",preview:"Distinction Top 4%",desc:"Australian Mathematics Competition.",link:"https://www.amt.edu.au"},


{year:2026,title:"Battlecode",preview:"Top 25 High School",desc:"MIT AI programming strategy competition.",link:"https://battlecode.org"},

{year:2026,title:"PCTC Round 0",preview:"Full Score",desc:"Qualification round of the Perse Coding Team Competition.",link:"https://pctc.perse.co.uk"},

{year:2026,title:"PCTC Round 1",preview:"9/10 Questions",desc:"Competitive programming contest.",link:"https://pctc.perse.co.uk"}

];


const timeline=document.getElementById("timeline");

function render(){

let rows=[];
for(let i=0;i<achievements.length;i+=5){
rows.push(achievements.slice(i,i+5));
}

rows.forEach((row,rowIndex)=>{

const rowDiv=document.createElement("div");
rowDiv.className="timeline-row";

const cards=document.createElement("div");
cards.className="cards";

const line=document.createElement("div");
line.className="line";

row.forEach((a,i)=>{

const wrapper=document.createElement("div");
wrapper.className="card-wrapper";

const year=document.createElement("div");
year.className="year";
year.textContent=a.year;

const card=document.createElement("div");
card.className="card hidden";

card.onclick=()=>window.open(a.link,"_blank");

card.innerHTML=`
<h3>${a.title}</h3>
<div class="preview">${a.preview}</div>
<div class="description">${a.desc}<br><b>Click to view competition ↗</b></div>
`;

wrapper.appendChild(year);
wrapper.appendChild(card);
cards.appendChild(wrapper);

const dot=document.createElement("div");
dot.className="dot hidden";
dot.style.left=`${((i+0.5)*(100/row.length))}%`;

line.appendChild(dot);

const connector=document.createElement("div");
connector.className="connector hidden";
connector.style.left=`${((i+0.5)*(100/row.length))}%`;

line.appendChild(connector);

let baseDelay=rowIndex*1200;

setTimeout(()=>line.classList.add("line-animate"),baseDelay);

setTimeout(()=>{
dot.classList.remove("hidden");
dot.classList.add("dot-animate");
},baseDelay+400+i*200);

setTimeout(()=>{
connector.classList.remove("hidden");
connector.classList.add("connector-animate");
},baseDelay+700+i*200);

setTimeout(()=>{
card.classList.remove("hidden");
card.classList.add("card-animate");
},baseDelay+1000+i*200);

});

rowDiv.appendChild(cards);
rowDiv.appendChild(line);
timeline.appendChild(rowDiv);

});

}

render();