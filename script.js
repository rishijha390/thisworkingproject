let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
let userList = document.querySelector("#userList"); // ⬅️ make sure this div exists in HTML

const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this)); 
    },
    submitForm: function(e) {
        e.preventDefault();
        this.addUser();
        console.log(this.users);
        this.renderUi(); // ⬅️ forgot to call this
        form.reset();
    },
    renderUi: function () {
        userList.innerHTML = ""; // clear old cards

        this.users.forEach(function(user){
            const card = document.createElement("div");
            card.className = 
            "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

            const img = document.createElement("img");
            img.src = user.photo;
            img.alt = user.username;
            img.className = "w-16 h-16 rounded-full object-cover mb-4 border-2 border-blue-300 shadow-sm";


            const name = document.createElement("h3");
            name.textContent = user.username;
            name.className = "text-xl font-semibold text-gray-800";

            const role = document.createElement("p");
            role.textContent = user.role;
            role.className = "text-sm text-blue-500 font-medium";

            const bio = document.createElement("p");
            bio.textContent = user.bio;
            bio.className = "text-gray-600 mt-2 text-center text-sm";

            // Append to card
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(role);
            card.appendChild(bio);

            // ✅ Append card to userList (missing in your code)
          // document.querySelector("users").innerHTML = ""; 
            userList.appendChild(card);
        });
    },
    addUser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });
    },
    removeUser: function () {},
};

userManager.init();
