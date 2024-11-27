
const buttons = document.querySelectorAll(".choices button");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultMessage = document.getElementById("result-message");

// Các lựa chọn có thể có trong trò chơi
// test12345
const choices = ["Kéo", "Búa", "Bao"];

// kéo -> choices[0]
// búa -> choices[1]
// bao -> choices[2]

// random -> 0.3 -> 0.3 * 3 = 0.9 -> 0 -> kéo
// random -> 0.6 -> 0.6 * 3 = 1.8 -> 1 -> búa
// random -> 0.9 -> 0.9 * 3 = 2.7 -> 2 -> bao

// Hàm tạo lựa chọn ngẫu nhiên của máy tính
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

// Hàm xác định kết quả trò chơi
function getResult(playerChoice, computerChoice) {
  console.log({ playerChoice }, { computerChoice });
  if (playerChoice === computerChoice) return "Hòa!";
  if (
    (playerChoice === "Kéo" && computerChoice === "Bao") ||
    (playerChoice === "Búa" && computerChoice === "Kéo") ||
    (playerChoice === "Bao" && computerChoice === "Búa")
  ) {
    return "Bạn thắng!";
  }
  return "Bạn thua!";
}

// Gắn sự kiện click cho các nút
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.value.toLowerCase(); // Lấy lựa chọn của người chơi
    const computerChoice = getComputerChoice().toLowerCase();    // Sinh lựa chọn của máy

    // Hiển thị kết quả lên giao diện
    playerChoiceDisplay.textContent = `Lựa chọn của bạn: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Lựa chọn của máy: ${computerChoice}`;
    resultMessage.textContent = `Kết quả: ${getResult(playerChoice, computerChoice)}`;
  });
});