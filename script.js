let medicines = JSON.parse(localStorage.getItem("medicines")) || [];

function addMedicine() {
    const name = document.getElementById("medicineName").value;
    const type = document.getElementById("medicineType").value;
    const time = document.getElementById("medicineTime").value;

    if (name === "" || type === "" || time === "") {
        alert("Please fill all fields!");
        return;
    }

    medicines.push({
        name: name,
        type: type,
        time: time
    });

    localStorage.setItem("medicines", JSON.stringify(medicines));

    document.getElementById("medicineName").value = "";
    document.getElementById("medicineType").value = "";
    document.getElementById("medicineTime").value = "";

    displayMedicines();
}

function displayMedicines() {
    const list = document.getElementById("medicineList");
    list.innerHTML = "";

    medicines.forEach((medicine, index) => {
        list.innerHTML += `
            <div class="medicine-item">
                <div>
                    <strong>${medicine.name}</strong><br>
                    ${medicine.type} | ⏰ ${medicine.time}
                </div>
                <button class="delete-btn" onclick="deleteMedicine(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

function deleteMedicine(index) {
    medicines.splice(index, 1);
    localStorage.setItem("medicines", JSON.stringify(medicines));
    displayMedicines();
}

displayMedicines();
