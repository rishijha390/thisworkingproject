let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
let userList = document.querySelector("#userList");

const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this)); 
    },
    submitForm: function(e) {
        e.preventDefault();
        this.addUser();
        this.renderUi();
        form.reset();
    },
    addUser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });
    },
    removeUser: function (usernameToDelete) {
        this.users = this.users.filter(user => user.username !== usernameToDelete);
        this.renderUi();
    },
    renderUi: function () {
        userList.innerHTML = "";

        this.users.forEach((user) => {
            const card = document.createElement("div");
            card.className = "user-card bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

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

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "🗑️ Delete";
            deleteBtn.className = "mt-4 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition";
            deleteBtn.addEventListener("click", () => {
                userManager.removeUser(user.username);
            });

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(role);
            card.appendChild(bio);
            card.appendChild(deleteBtn);

            userList.appendChild(card);
        });
    }
};

userManager.init();
