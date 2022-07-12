var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
request.send();
request.onload = function() {
    var nations = JSON.parse(request.response)
    console.log(nations);

    // //Q1
    var q1 = nations.filter((ele) => ele.region === 'Asia')
    console.log(q1);

    // //Q2

    var q2 = nations.filter((ele) => ele.population < 200000)
    console.log(q2);

    // //Q3
    nations.forEach((ele) =>{
        console.log(ele.name);
        console.log(ele.capital);
        console.log(ele.flag);
    })
    
    // //Q4
    var poparr = nations.map((ele) => ele.population)
    var q4 = poparr.reduce((acc, ele) => acc + ele)
    console.log('total population is', q4)

    // //Q5

    var Q5 = nations.filter((ele) => ele.currencies[0].name === 'United States dollar')
    console.log(Q5);
    
}