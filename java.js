// // JavaScript
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

console.log("ความกว้างของหน้าจอ: " + screenWidth + "px");
console.log("ความสูงของหน้าจอ: " + screenHeight + "px");
//doughnut
var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
  type: 'doughnut',
  data: {
    labels: ["การออกแบบ", "ความเป็นระเบียบ", "ความพิเศษ", "ยืดหยุ่น"],
    datasets: [{
      data: [40, 10, 40, 10],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
    }]
  },
  options: {
    responsive: true
  }
});
const profileImage = document.getElementById("profileImage");

profileImage.addEventListener("mouseover", () => {
    profileImage.src = "/images/p2.jpg"; // รูปภาพที่ต้องการเมื่อ hover
});

profileImage.addEventListener("mouseout", () => {
    profileImage.src = "/images/pro.jpg"; // รูปภาพเริ่มต้น
});