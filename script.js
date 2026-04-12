function askQuestion() {
  document.getElementById("box").style.display = "flex";
}

// Close modal if clicked outside
document.getElementById("box").addEventListener("click", function(e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});

function submitQuestion() {
  let question = document.getElementById("questionInput").value;
  if (question.trim() == "") {
    alert("Please type something first! 😄");
  } else {
    addQuestionToPage(question);
    document.getElementById("questionInput").value = "";
    document.getElementById("box").style.display = "none";
  }
}

function addQuestionToPage(question) {
  let list = document.getElementById("questionsList");
  let divider = document.createElement("div");
  divider.className = "divider";

  let card = document.createElement("div");
  card.className = "question-card";
  card.innerHTML = `
    <div class="anon-label">🕵️ Anonymous asked</div>
    <p class="question-text">${question}</p>
    <button class="reply-btn" onclick="replyTo(this)">💬 Give Advice</button>
    <div class="reply-box" style="display:none;">
      <textarea placeholder="Share your honest advice... 💜"></textarea>
      <button class="submit-btn" onclick="submitReply(this)">Send Advice 🚀</button>
    </div>
  `;
  list.appendChild(divider);
  list.appendChild(card);
}

function replyTo(btn) {
  let replyBox = btn.nextElementSibling;
  replyBox.style.display = "block";
  btn.style.display = "none";
}

function submitReply(btn) {
  let textarea = btn.previousElementSibling;
  let advice = textarea.value;
  if (advice.trim() == "") {
    alert("Type some advice first! 💬");
  } else {
    let replyBox = btn.parentElement;
    replyBox.innerHTML = `<div class="advice-text">💜 <b>Advice given:</b> ${advice}</div>`;
  }
}