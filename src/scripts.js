document.getElementById("akanfm").addEventListener("submit", function(e){
    e.preventDefault();

    const dateInput = document.getElementById("birthday").value;
    const genderInput = document.querySelector("input[name='gender']:checked");

    if (!dateInput || !genderInput) {
        alert("Fill in all fields.");
        return;
    }

    const gender = genderInput.value;
    const date = new Date(dateInput);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    if (day < 1 || day > 31 || month < 1 || month > 12) {
        alert("Enter valid date.");
        return;
    }

    const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

    const dayOfWeek = date.getDay();
    const akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek]

    document.getElementById("result").textContent = 
    `Your Akan Name is ${akanName}.`;
})