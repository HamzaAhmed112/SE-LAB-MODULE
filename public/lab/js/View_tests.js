url = "http://localhost:3000/prescription/1"

const getData = async () => {

    const res = await fetch(url);
    const data = await res.json();

    document.getElementById('PName').textContent = data[0].PatientName;
    document.getElementById('DName').textContent = data[0].DoctorName;
    document.getElementById('PresID').textContent = data[0].PrescriptionID;
    document.getElementById('Date').textContent = data[0].PrescriptionDate.slice(0, 10);

    console.log(data);
}

getData()



urlTotalCost = "http://localhost:3000/cost/1"

const getTotalCost = async () => {

    const res = await fetch(urlTotalCost);
    const data = await res.json();

    document.getElementById('totalCost').textContent = data[0].TotalCost;
    console.log(data);
}

getTotalCost()





// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     document.getElementById('PName').textContent = data[0].PatientName;
//     document.getElementById('DName').textContent = data[0].DoctorName;
//     document.getElementById('PresID').textContent = data[0].PrescriptionID;
//     document.getElementById('Date').textContent = data[0].PrescriptionDate;
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


// const test = document.createElement("div");
// const testName = document.createElement("div");
// const testCost = document.createElement("div");
// testName.innerHTML = TestName
// testCost.innerHTML = TestCost
// test.appendChild(testName)
// test.appendChild(testCost)

// document.body.appendChild(para);