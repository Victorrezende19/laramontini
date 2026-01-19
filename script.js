const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector(".icon");

        const isOpen = answer.classList.contains("active");

        document.querySelectorAll(".faq-answer").forEach(a => {
            a.classList.remove("active");
        });

        document.querySelectorAll(".icon").forEach(i => {
            i.textContent = "▼";
        });

        if (!isOpen) {
            answer.classList.add("active");
            icon.textContent = "▲";
        }
    });
});
