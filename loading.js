gsap.from(".h1", {
    duration: 3, 
    ease: "power1.out",
    opacity: 0, 
    y: -400, 
    onComplete: function() {

        document.querySelector(".page1").style.display = "none";
        var existingElement = document.querySelector(".page2");

        // Add a new class to the existing element
        if (existingElement) {
            existingElement.classList.add("hover");
        }
    }
});