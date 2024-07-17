function search(){
    document.getElementById("button").innerHTML = "Loading..."
    Ordercode = document.getElementById("code").value
    console.log(Ordercode)
    fetch('https://servicescout.pythonanywhere.com/request/', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "code": Ordercode})
})
.then(response => response.json())
.then(response => update(response))
}

function update(response){
    document.getElementById("button").innerHTML = "Search"
    if (response[0] == "Not valid"){
        document.getElementById("name").innerHTML = "Order number not found. Please try again, or contact us at klmarinaservice@gmail.com"
    } else {
        /* maybe dont show name? */
        document.getElementById("name").innerHTML = "Name: " + response[1]
        document.getElementById("make").innerHTML = "Make: " + response[2] + ", " + response[3]
        /*document.getElementById("model").innerHTML = "Model: " + response[3]*/
        document.getElementById("date-completed").innerHTML = "Estimated Date of Completion: " + response[4]
        document.getElementById("current-status").innerHTML = "Current Status: " + response[5]
        document.getElementById("service-type").innerHTML = "Service Type: " + response[6]
    }
}
