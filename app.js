const clickText = document.querySelector(".text");
const clickAnswer = document.querySelector(".click-answer");
const downArrow = document.querySelector(".down-arrow");
const upArrow = document.querySelector(".up-arrow");
const modal = document.querySelector(".modal");
const modalBox = document.querySelector(".modal-box");
const cancleBtn = document.querySelector(".cancle");

clickText.addEventListener("click", () => {
  if (clickAnswer.style.display === "none") {
    clickAnswer.style.display = "block";
    upArrow.style.display = "block";
    downArrow.style.display = "none";
  } else {
    clickAnswer.style.display = "none";
    upArrow.style.display = "none";
    downArrow.style.display = "block";
  }
});

// clickText.forEach((item) => {
//   item.addEventListener("click", () => {
//     if (clickAnswer.style.display === "none") {
//       clickAnswer.style.display = "block";
//       upArrow.style.display = "block";
//       downArrow.style.display = "none";
//     } else {
//       clickAnswer.style.display = "none";
//       upArrow.style.display = "none";
//       downArrow.style.display = "block";
//     }
//   });
// });

modalBox.addEventListener("click", () => {
  modal.showModal();
});
cancleBtn.addEventListener("click", () => {
  modal.close();
});
