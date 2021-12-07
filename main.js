function getDegrees() {
    // This function runs when button is clicked and returns a table of degrees found in college_degrees.json

    //Disable button after it is clicked
    document.getElementById("button").disabled = true;

    //Fetching the json data as a promise, checking response, and processing
    fetch("college_degrees.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then(data => processData(data))

        .catch(err => {
            console.error("error msg: ", err);
        })

    //Processing the json data such that it creates rows in a table. 
    const processData = function (data) {

        let table = document.getElementById("mySchools");
        let length = data.my_college_degrees.length;

        for (let i = 0; i < length; i++) {
            let row = table.insertRow(-1);
            row.insertCell(0).innerHTML = data.my_college_degrees[i].degree.School;
            row.insertCell(1).innerHTML = data.my_college_degrees[i].degree.Program;
            row.insertCell(1).innerHTML = data.my_college_degrees[i].degree.Type;
            row.insertCell(1).innerHTML = data.my_college_degrees[i].degree.Year;
        }

    }

}

