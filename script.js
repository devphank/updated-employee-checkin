function submitForm() {
    let id = document.getElementById("id").value.trim();
    let name = document.getElementById("name").value.trim();
    let department = document.getElementById("department").value.trim();
    let checkin = document.getElementById("checkin").value.trim();

    if (!id || !name || !department || !checkin) {
        alert("Please fill out all required fields.");
        return;
    }

    let checkInData = {
        employeeID: id,
        name: name,
        department: department,
        checkInTime: checkin
    };

    db.ref("check-ins/" + id).set(checkInData)
        .then(() => {
            alert("Check-in successful!");
        })
        .catch(error => {
            alert("Error saving data: " + error);
        });
}
