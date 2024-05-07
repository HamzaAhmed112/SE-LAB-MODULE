document.addEventListener("DOMContentLoaded", function() {
    var proceedButton = document.querySelector("button");

    proceedButton.addEventListener("click", function() {
        var prescriptionId = document.getElementById("pres_id").value;

        // Create data object
        var data = {
            prescriptionId: prescriptionId
        };

        // location.href='../HTML/loading.html';
        console.log(data)
        // // Fetch request
        // fetch("your_backend_endpoint_here", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error("Network response was not ok");
        //     }
        //     return response.json();
        // })
        // .then(data => {
        //     // Handle response from the backend
        //     console.log(data);
        // })
        // .catch(error => {
        //     // Handle errors
        //     console.error("There was a problem with the fetch operation:", error);
        // });
    });
});
