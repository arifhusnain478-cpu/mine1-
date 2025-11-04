/*let name ="husnain" ;
let job = "IT";
let experience = "2 years"
let sum = ` my name is ${name}  from ${job} with the ${experience}`;
console.log(sum)*/
/*let age =12;
if(age>=18){
    console.log("you elibal for the vote,thanks")
}else{ 
    console.log(` you should wait ${18-age} years`)
}*/
/*console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(false));
const halmat = ""
if(halmat){
    console.log("fired")
}else{
    console.log("close your halmat")
}
const y = "full";//energy level
const x = "close";//helmat state
if ( x && y  ){
    console.log("Fired")
}
const level = Number(prompt("checking oxygen level"))
if( level=== 28){
    console.log("Nano tec is deactivated")
} else if (level>28) {console.log("pressurize environment")}
else if(level < 28){
    console.log("insufficient oxygen level")
}*/
const oxy =Number (prompt("what is oxygen level"));
const stuts =(19.5<=oxy && 23.5>=oxy)?"Inhalation system: No filter needed":(oxy<19.5)?"Activate O₂ filter + oxygen pipe 🚨":"Use filter only, block extra oxygen";
console.log(stuts);
    