document.getElementById("collectionForm").addEventListener("submit", function(e){

    e.preventDefault();

    const business = document.getElementById("business").value;
    const person = document.getElementById("person").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const quantity = document.getElementById("quantity").value;
    const message = document.getElementById("message").value;

    const text =
`Hello Reoil Brothers,

Business Name: ${business}

Contact Person: ${person}

Phone: ${phone}

Location: ${location}

Oil Quantity: ${quantity}

Message: ${message}`;

    window.open(
`https://wa.me/917041238858?text=${encodeURIComponent(text)}`,
"_blank");

});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

