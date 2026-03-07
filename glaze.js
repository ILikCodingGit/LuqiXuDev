const achievements = [

/* 2023 */

{year:2023,title:"VEX IQ Season Opener",desc:"Teamwork Champion Award"},
{year:2023,title:"VRC Nationals",desc:"Invitation"},
{year:2023,title:"FLL Macquarie University Qualifier",desc:"Core Values 2nd Place"},
{year:2023,title:"FLL Nationals",desc:"Invitation"},
{year:2023,title:"FTC",desc:"Participation"},

/* 2024 */

{year:2024,title:"VEX V5RC Nationals",desc:"Invitation"},
{year:2024,title:"FLL Wollongong Qualifier",desc:"Robot Game 1st Place"},
{year:2024,title:"FLL Nationals",desc:"Invitation"},
{year:2024,title:"FLL Asia Pacific Worlds",desc:"Invitation"},
{year:2024,title:"Botball International Tournament",desc:"Outstanding Rookie Award"},
{year:2024,title:"Botball International Tournament",desc:"Highest Defense Score Rookie Bracket"},
{year:2024,title:"GCER Conference Journal",desc:"2 Published Papers"},
{year:2024,title:"CoderZ",desc:"2nd Place USA"},
{year:2024,title:"OUCC Round 1",desc:"Merit Award"},
{year:2024,title:"Grok NCSS",desc:"Perfect Score High Distinction"},
{year:2024,title:"Grok Web Comp",desc:"Perfect Score High Distinction"},
{year:2024,title:"Math Olympiad",desc:"Top 25%"},
{year:2024,title:"CAT",desc:"Credit Award"},

/* 2025 */

{year:2025,title:"FRC DDU",desc:"8th and 11th Place"},
{year:2025,title:"Australian Informatics Olympiad",desc:"Gold Medal 400 points"},
{year:2025,title:"PCTC Round 1",desc:"Invitation"},
{year:2025,title:"PCTC Round 1",desc:"Distinction Top 25%"},
{year:2025,title:"PCTC Round 2",desc:"Invitation"},
{year:2025,title:"PCTC Round 2",desc:"Distinction Top 25%"},
{year:2025,title:"IMC Prosperity 3",desc:"Ranked 81st"},
{year:2025,title:"ICO",desc:"National Camp Invitation"},
{year:2025,title:"ICO",desc:"Australia National Team Invitation"},
{year:2025,title:"ICO",desc:"Top Score in Oceania"},
{year:2025,title:"ICO",desc:"Top 50% Globally"},
{year:2025,title:"IOAI Selection",desc:"Round 2 Invitation"},
{year:2025,title:"AMC",desc:"Distinction Top 4%"},

/* 2026 */

{year:2026,title:"Battlecode 2026",desc:"Top 25 High School Bracket"},
{year:2026,title:"PCTC Round 1",desc:"9/10 Questions"},
{year:2026,title:"PCTC Round 0",desc:"Full Score"}

];

const timeline = document.getElementById("timeline");

function render(){

let rows=[];
for(let i=0;i<achievements.length;i+=5){
rows.push(achievements.slice(i,i+5));
}

rows.forEach(row=>{

const rowDiv=document.createElement("div");
rowDiv.className="timeline-row";

const cards=document.createElement("div");
cards.className="cards";

row.forEach(a=>{

const card=document.createElement("div");
card.className="card";

card.onclick=()=>window.open(a.link,"_blank");

card.innerHTML=`
<h3>${a.title}</h3>
<div class="year">${a.year}</div>

<div class="extra">
<p>${a.desc}</p>
<p><b>Click to view competition ↗</b></p>
</div>
`;

});

rowDiv.appendChild(cards);

const line=document.createElement("div");
line.className="line";

row.forEach((_,i)=>{

const dot=document.createElement("div");
dot.className="dot";
dot.style.left=`${(i+0.5)*(100/row.length)}%`;

line.appendChild(dot);

});

rowDiv.appendChild(line);

timeline.appendChild(rowDiv);

});

}

render();