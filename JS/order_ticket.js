document.addEventListener("DOMContentLoaded", () => {
  let currentStep = 0;
  const steps = document.querySelectorAll(".step");
  const progressFill = document.getElementById("progress-fill");
  const nextButton = document.querySelector(".btn2 .accept_move_next");
  const backButton = document.querySelector(".btn1 .accept_move_back");
  const box = document.querySelector(".box_modal");
  const btnx = document.querySelector(".box .close");
  const btnorder = document.querySelector(".order");
  const bankingSection = document.querySelector(".banking");
  const paymentSection = document.querySelector(".info_payment");
  const infoBookingSection = document.querySelector(".info_booking");
  const chooseBookingSection = document.querySelector(".choose_booking");
  const finishedSection = document.querySelector(".finished");

  // Hàm Tắt/Mở box
  function toggleBox() {
    box.classList.toggle("hide");
  }
  btnorder.addEventListener("click", toggleBox);
  btnx.addEventListener("click", toggleBox);

  // Hàm cập nhật trạng thái nút "Trở về"
  function updateBackButton() {
    if (currentStep === 0) {
      backButton.classList.add("hide");
    } else {
      backButton.classList.remove("hide");
    }
  }

  // Hàm cập nhật nút "Tiếp theo"
  function updateNextButton() {
    if (currentStep === steps.length - 1) {
      nextButton.textContent = "Xác nhận";
    } else {
      nextButton.textContent = "Tiếp theo";
    }
  }

  // Hàm cập nhật hiển thị nội dung theo bước
  function updateContent() {
    // Ẩn tất cả các phần tử
    bankingSection.classList.add("hide");
    paymentSection.classList.add("hide");
    infoBookingSection.classList.add("hide");
    chooseBookingSection.classList.add("hide");
    finishedSection.classList.add("hide");
    // Hiển thị phần tử tương ứng với bước
    if (currentStep === 0) {
      infoBookingSection.classList.remove("hide"); // Hiển thị info_booking ở██
      chooseBookingSection.classList.remove("hide"); // Hiển thị choose_booking
    } else if (currentStep === 1) {
      bankingSection.classList.remove("hide"); // Hiển thị banking
      paymentSection.classList.remove("hide"); // Hiển thị info_payment
    } else if (currentStep === 2) {
      // Bước xác nhận thanh toán (có thể hiển thị thông báo hoặc giữ banking/info_payment)
      finishedSection.classList.remove("hide");
    }
  }

  // Hàm chuyển sang bước tiếp theo
  // Hàm chuyển sang bước tiếp theo
  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      steps[currentStep].classList.add("active");
      const progressWidths = [0, 20, 40]; // 0% (bước 1), 20% (bước 2), 40% (bước 3)
      progressFill.style.width = `${progressWidths[currentStep]}%`;
      updateBackButton();
      updateNextButton();
      updateContent();
    } else if (currentStep === steps.length - 1) {
      // Khi ở bước cuối (bước 3) và nhấn "Xác nhận"
      toggleBox(); // Đóng modal
      // Tùy chọn: Reset về bước đầu tiên
      currentStep = 0;
      steps.forEach((step, index) => {
        if (index > 0) step.classList.remove("active");
      });
      progressFill.style.width = "0%";
      steps[0].classList.add("active");
      updateBackButton();
      updateNextButton();
      updateContent();
    }
  }

  // Hàm quay lại bước trước
  function prevStep() {
    if (currentStep > 0) {
      steps[currentStep].classList.remove("active");
      currentStep--;
      const progressWidths = [0, 20, 40]; // 0% (bước 1), 20% (bước 2), 40% (bước 3)
      progressFill.style.width = `${progressWidths[currentStep]}%`;

      updateBackButton();
      updateNextButton();
      updateContent();
    }
  }

  // Gắn sự kiện
  nextButton.addEventListener("click", nextStep);
  backButton.addEventListener("click", prevStep);

  // Khởi tạo
  steps[0].classList.add("active");
  updateBackButton();
  updateContent();
});
