const stationTitle = document.querySelector('h1')
const totalBike = document.querySelector('#total-bike')
const availableBike = document.querySelector('#available-bike')
const eBike = document.querySelector('#ebike')
const mecaBike = document.querySelector('#meca-bike')
const valueStation = document.querySelector('input')
const button = document.querySelector('button')
const url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=100&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes'
console.log(valueStation)

button.addEventListener("click", ()=>{



fetch(url)
.then(response =>response.json())
.then(data => { 
    const funcstations = function () {
        const station1 = data.records[parseInt(valueStation.value)+1].fields
        stationTitle.innerText = station1.name
        totalBike.innerText = station1.capacity
        availableBike.innerText = station1.numbikesavailable
        eBike.innerText = station1.ebike
        mecaBike.innerText = station1.mechanical
       
    }
    funcstations()
 })
})


    
    






