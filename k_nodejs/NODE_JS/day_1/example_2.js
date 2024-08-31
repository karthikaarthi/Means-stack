
console.log("Process Start ..."); 

setTimeout(() => {
  console.log("Set Timeout worked ...");
}, 3000);

setTimeout((name) => {
  console.log("Name : ", name);
}, 4000, "Balaji");

for(let i=1;i<=100;i++){
  console.log(i)
}
console.log("Process End ....");