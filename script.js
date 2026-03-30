function askQuestion() {
  document.getElementById("box").style.display = "block";
}

function submitQuestion() {
  let question = document.getElementById("questionInput").value;
  
  if (question == "") {
    alert("Please type something first! 😄");
  } else {
    addQuestionToPage(question);
    document.getElementById("questionInput").value = "";
    document.getElementById("box").style.display = "none";
  }
}

function addQuestionToPage(question) {
  let list = document.getElementById("questionsList");

  let card = document.createElement("div");
  card.className = "question-card";
  card.innerHTML = `
    <p>🤫 <b>Anonymous asked:</b></p>
    <p>${question}</p>
    <button class="reply-btn" onclick="replyTo(this)">💬 Give Advice</button>
    <div class="reply-box" style="display:none;">
      <textarea placeholder="Type your advice here..."></textarea>
      <button class="submit-btn" onclick="submitReply(this)">Send Advice ✅</button>
    </div>
  `;
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
  if (advice == "") {
    alert("Type some advice first! 💬");
  } else {
    let replyBox = btn.parentElement;
    replyBox.innerHTML = `<p class="advice-text">✅ <b>Advice given:</b> ${advice}</p>`;
  }
}