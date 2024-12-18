const buttons = document.querySelectorAll(".choices button");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultMessage = document.getElementById("result-message");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
// Các lựa chọn có thể có trong trò chơi
const choices = ["keo", "bua", "bao"];
const labels = ["Kéo", "Búa", "Bao"];
const RESULT_TYPE = {
  DRAW: 1,
  WIN: 2,
  LOSE: 3,
};

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
function calculateResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return RESULT_TYPE.DRAW;
  if (
    (playerChoice === "keo" && computerChoice === "bao") ||
    (playerChoice === "bua" && computerChoice === "keo") ||
    (playerChoice === "bao" && computerChoice === "bua")
  ) {
    return RESULT_TYPE.WIN;
  }
  return RESULT_TYPE.LOSE;
}

function getFinalResult(resultType) {
  if (resultType === RESULT_TYPE.WIN) {
    playerScore++;
  } else if (resultType === RESULT_TYPE.LOSE) {
    computerScore++;
  }
}

function getFinalResultLabel(resultType) {
  if (resultType === RESULT_TYPE.WIN) {
    return "Bạn thắng";
  } else if (resultType === RESULT_TYPE.LOSE) {
    return "Bạn thua";
  }
  return "Hòa";
}
// Gắn sự kiện click cho các nút
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.value.toLowerCase(); // Lấy lựa chọn của người chơi
    const computerChoice = getComputerChoice(); // Sinh lựa chọn của máy
    addRow(
      playerChoice,
      computerChoice,
      getFinalResultLabel(calculateResult(playerChoice, computerChoice))
    );
    getFinalResult(calculateResult(playerChoice, computerChoice));
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    // Hiển thị kết quả lên giao diện
    playerChoiceDisplay.textContent = `Lựa chọn của bạn: ${getLabels(
      playerChoice
    )}`;
    computerChoiceDisplay.textContent = `Lựa chọn của máy: ${getLabels(
      computerChoice
    )}`;
    resultMessage.textContent = `Kết quả: ${getFinalResultLabel(calculateResult(
      playerChoice,
      computerChoice
    ))}`;
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
