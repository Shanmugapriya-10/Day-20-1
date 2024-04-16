//This is the first API call which I've used from the public API's. 
//This API will generate a different phrase for each and every hit. 
async function generatorApi() { 
try {// Will fetch the data from the endpoint and await will used to wait until the promise completes its work. 
    const response = await fetch('https://corporatebs-generator.sameerkumar.website/', 
    { method: 'GET', headers: { accept: 'application/json', }, 
}); // Check whether the response returned with success code or not. 
// If its not success then we should throw the error. 
if (!response.ok) { throw new Error(`Error! status: ${response.status}`); 
} // If the response is success we can parse the response and await is used to wait until the parsing 
//operation completes. And store the response into variable result. 
const result = await response.json(); 
console.log('result', result.phrase); 
const divelement = document.createElement('div'); 
divelement.setAttribute('class', 'phrase') 
divelement.innerHTML = result.phrase; document.body.appendChild(divelement); return result; } 
catch (err) { console.log(err); } 
} 
generatorApi();
