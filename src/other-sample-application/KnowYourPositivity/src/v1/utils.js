export function updateContent(currentIndex, data) {
    const sectionEl = document.getElementById("sectionName");
    const sentenceEl = document.getElementById("sentence");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    sectionEl.textContent = data[currentIndex].section;
    sentenceEl.textContent = data[currentIndex].sentence;

    // Trigger fade-in animation
    sentenceEl.classList.remove("fade-enter-active");
    void sentenceEl.offsetWidth; // Forces reflow
    sentenceEl.classList.add("fade-enter-active");

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === data.length - 1;
}
