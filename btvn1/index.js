const buttons = document.querySelectorAll(".choices button");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultMessage = document.getElementById("result-message");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
// Các lựa chọn có thể có trong trò chơi
const choices = ["keo", "bua", "bao"];
const labels = ["Kéo", "Búa", "Bao"];

// Hàm tạo lựa chọn ngẫu nhiên của máy tính
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}
function getLabels(choice) {
  return labels[choices.indexOf(choice)];
}
let playerScore = 0;
let computerScore = 0;
// Hàm xác định kết quả trò chơi
function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "Hòa!";
  if (
    (playerChoice === "keo" && computerChoice === "bao") ||
    (playerChoice === "bua" && computerChoice === "keo") ||
    (playerChoice === "bao" && computerChoice === "bua")
  ) {
    playerScore++;
    return "Bạn thắng!";
  } else ++computerScore;
  return "Bạn thua!";
}
// Gắn sự kiện click cho các nút
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.value.toLowerCase(); // Lấy lựa chọn của người chơi
    const computerChoice = getComputerChoice(); // Sinh lựa chọn của máy
    addRow(
      playerChoice,
      computerChoice,
      getResult(playerChoice, computerChoice)
    );
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    // Hiển thị kết quả lên giao diện
    playerChoiceDisplay.textContent = `Lựa chọn của bạn: ${getLabels(
      playerChoice
    )}`;
    computerChoiceDisplay.textContent = `Lựa chọn của máy: ${getLabels(
      computerChoice
    )}`;
    resultMessage.textContent = `Kết quả: ${getResult(
      playerChoice,
      computerChoice
    )}`;
  });
});
let stt = 0;
function addRow(playerChoice, computerChoice, result) {
  const bangKetQua = document
    .getElementById("ketQua")
    .getElementsByTagName("tbody")[0];
  const newRow = bangKetQua.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  cell1.textContent = ++stt;
  cell2.textContent = playerChoice;
  cell3.textContent = computerChoice;
  cell4.textContent = result;
}
