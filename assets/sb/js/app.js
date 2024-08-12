const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
  const nameAInput = prompt("กรุณากรอกชื่อทีม A:");
  if (nameAInput) {
    btn1.textContent = nameAInput; // เปลี่ยนข้อความของปุ่มโดยตรง
  }
});

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function () {
  const nameBInput = prompt("กรุณากรอกชื่อทีม B:");
  if (nameBInput) {
    btn2.textContent = nameBInput; // เปลี่ยนข้อความของปุ่มโดยตรง
  }
})

// ฟังก์ชันทั่วไปสำหรับการจัดการคะแนน
function updateScore(elementId, increment) {
  const scoreElement = document.getElementById(elementId);
  let score = parseInt(scoreElement.textContent, 10);

  // ปรับปรุงคะแนน
  score += increment;

  // ตรวจสอบขอบเขตคะแนน
  score = Math.max(0, Math.min(score, 99));  // จำกัดคะแนนระหว่าง 0 ถึง 99

  // อัปเดตคะแนน พร้อมการจัดรูปแบบให้เป็นเลขสองหลัก
  scoreElement.textContent = score.toString().padStart(2, '0');
}

// ฟังก์ชันการจัดการปุ่มสำหรับการเพิ่ม/ลดคะแนน
function setupScoreButton(buttonId, elementId, increment) {
  document.getElementById(buttonId).addEventListener('click', function() {
      updateScore(elementId, increment);
  });
}

// ฟังก์ชันการตั้งค่าปุ่มทั้งหมด
function initializeScoreboard() {
  setupScoreButton('btn1_add', 'roundCorners', 1);
  setupScoreButton('btn1_sub', 'roundCorners', -1);
  setupScoreButton('btn2_add', 'roundCorners2', 1);
  setupScoreButton('btn2_sub', 'roundCorners2', -1);
  setupScoreButton('btn_set_add', 'set', 1);
  setupScoreButton('btn_set_sub', 'set', -1);
}

// ฟังก์ชันการรีเฟรชหน้า
function refreshPage() {
  window.location.reload();
}

// เรียกใช้ฟังก์ชันเริ่มต้นเมื่อหน้าโหลด
window.onload = initializeScoreboard;

