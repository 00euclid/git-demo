const greet = () => {
    const response = confirm("Are you ready to enter?");

    let status;

    if (response) {
        status = document.querySelector(".status.success");
    } else {
        status = document.querySelector(".status.failure");
    }

    Array.from(document.querySelectorAll(".status")).forEach(sbox => sbox.classList.remove("visible"));
    status.classList.add("visible");
}

document.getElementsByClassName("greeter")[0].addEventListener("click", greet);