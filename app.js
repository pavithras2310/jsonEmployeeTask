fetch("http://127.0.0.1:5500/emplyees.json")
    .then((res) => res.json())
    .then((datalist) => {
        let cardBody = document.getElementById("displayEmployeedivMap");
        let data = "";
        datalist.map((index) => {
            data += `<div class="col-lg-4 col-md-6 col-sm-12"> 
            <div class="card cardMain" style="width: 18rem;> 
            <div class="card-body"> 
            <h4>Name: ${index.Name}</h4> 
            <p>Age: ${index.age}</p>
            <p>Designation: ${index.Destignation}</p> 
            </div></div></div>`
        })
        cardBody.innerHTML = data;
    })

    fetch("http://127.0.0.1:5500/emplyees.json")
    .then((res) => res.json())
    .then((datalist) => {
        let cardBody = document.getElementById("displayEmployeedivForEach");
        let data = "";
        datalist.forEach((index) => {
            data += `<div class="col-lg-4 col-md-6 col-sm-12"> 
            <div class="card cardMain" style="width: 18rem;> 
            <div class="card-body"> 
            <h4>Name: ${index.Name}</h4> 
            <p>Age: ${index.age}</p>
            <p>Designation: ${index.Destignation}</p> 
            </div></div></div>`
        })
        cardBody.innerHTML = data;
    })