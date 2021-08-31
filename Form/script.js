let database = [];
// Add Profile Details EXCEPT the Image
const addProfile = (ev) => {
    ev.preventDefault();
    let profile = {
        username: document.getElementById("username").nodeValue,
        age: document.getElementById("age").nodeValue,
        dob: document.getElementById("dob").nodeValue,
        bio: document.getElementById("bio").nodeValue,
    }
    database.push(profile);
    // [(usename: somehing, age: 18, dob: 12/12/2021, bio: also somthing)]
    document.forms[0].reset();

    localStorage.setItem("myProfile", JSON.stringify(database));
    window.open("../Profile/index.html");
}

document.querySelector("#img").addEventListener("change", function() {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("saved_img",reader.result)
    })

    reader.readAsDataURL(this.files[0])
})

document.getElementById("submit").addEventListener("click", addProfile);
