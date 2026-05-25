

const arr = [
    {
        profileUrl:'https://i.pinimg.com/736x/c1/5d/02/c15d020633bd1f59d15979ae9219912c.jpg',
        name:'Priya roy',
        email:'priyamirja123@gmail.com'
    },
    {
        profileUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMFwaEec4cH-991Q9UXL-aDXAEHsyocLe6g&s',
        name:'Manish Malohtra',
        email:'manish mlhotra1946@gmail.com'
    },
    {
        profileUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghkdNbrFKxO0_knbpzObEsYNVKPoeefOTqA&s',
        name:'Shella Joshi',
        email:'sheelajoshi@gmail.com'
    },
    {
        profileUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURvh_riskeQBVByxuZUCAkZ0KXsEwPjtYAg&s',
        name:'Dhinchak pooja',
        email:'dhinchakpooja@gmail.com'
    },
    {
        profileUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EaMT_iXIAAYaSopJyVnnqUpFjG--ALru3A&s',
        name:'Richa Mishra',
        email:'richamishra@gmail.com'
    }

];

const searchInput = document.getElementById("searchInput");
const users = document.querySelectorAll(".userItem");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  users.forEach((user) => {
    const name = user.querySelector("h3").innerText.toLowerCase();
    const email = user.querySelector("p").innerText.toLowerCase();

    if (name.includes(value) || email.includes(value)) {
      user.style.display = "flex";   // show
    } else {
      user.style.display = "none";   // hide
    }
  });
});

