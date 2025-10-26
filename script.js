//------ random màu -----------
 function randomColor() {
      const spinner = document.getElementById("spinner");
      const box = document.getElementById("colorBox");
      const code = document.getElementById("colorCode");

      // Hiện vòng xoay
      spinner.style.display = "block";
      box.style.backgroundColor = "#ffffff";
      code.textContent = "Đang tạo màu... 🎨";

      setTimeout(() => {
        // Sinh màu ngẫu nhiên
        let color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
        
        // Ẩn vòng xoay và cập nhật màu
        spinner.style.display = "none";
        box.style.backgroundColor = color;
        code.textContent = color.toUpperCase();

        // Hiệu ứng fade-in cho hộp màu
        box.classList.remove("fade");
        void box.offsetWidth; // reset animation
        box.classList.add("fade");
      }, 1500);
    }

    // ---------------random món ăn -------------
      let foods = [
      "Phở bò", "Bún chả", "Mì xào", "Cơm gà", "Pizza",
      "Hamburger", "Gà rán", "Hủ tiếu", "Cơm tấm"
    ];

    const foodList = document.getElementById("foodList");
    const foodDisplay = document.getElementById("food");
    const spinner = document.getElementById("spinner");
    const newFoodInput = document.getElementById("newFood");

    // Hàm hiển thị danh sách món ăn
    function renderFoods() {
      foodList.innerHTML = "";
      foods.forEach(food => {
        const li = document.createElement("li");
        li.textContent = food;
        foodList.appendChild(li);
      });
    }

    // Gọi khi bấm random
    function randomFood() {
      if (foods.length === 0) {
        alert("Chưa có món nào để chọn!");
        return;
      }

      // Reset hiển thị
      foodDisplay.textContent = "🤔...";
      spinner.style.display = "block";

      // Xóa highlight cũ
      document.querySelectorAll(".food-list li").forEach(li => li.classList.remove("active"));

      // Sau 1.5s hiển thị món ngẫu nhiên
      setTimeout(() => {
        const i = Math.floor(Math.random() * foods.length);
        const chosen = foods[i];
        foodDisplay.textContent = "🍽️ " + chosen;
        spinner.style.display = "none";

        // Highlight món được chọn
        document.querySelectorAll(".food-list li")[i].classList.add("active");

        // Hiệu ứng âm thanh (tuỳ chọn)
        const audio = new Audio("https://cdn.pixabay.com/download/audio/2021/08/04/audio_efdcf4bb07.mp3?filename=correct-2-46134.mp3");
        audio.play();
      }, 1500);
    }

    // Thêm món ăn mới từ input
    function addFood() {
      const newFood = newFoodInput.value.trim();
      if (newFood === "") {
        alert("Vui lòng nhập tên món ăn!");
        return;
      }
      foods.push(newFood);
      newFoodInput.value = "";
      renderFoods();
    }

    // Cho phép nhấn Enter để thêm món
    newFoodInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") addFood();
    });

    // Render lần đầu
    renderFoods();
    //------------------random tên--------------
    function spinWheel() {
      const input = document.getElementById("nameInput").value.trim();
      const nameDisplay = document.getElementById("name");
      const wheel = document.getElementById("wheel");

      if (!input) {
        nameDisplay.textContent = "⚠️ Vui lòng nhập ít nhất một tên!";
        return;
      }

      const names = input.split(",").map(n => n.trim()).filter(n => n);
      if (names.length === 0) {
        nameDisplay.textContent = "⚠️ Không có tên hợp lệ!";
        return;
      }

      // Random tên
      const randomIndex = Math.floor(Math.random() * names.length);
      const randomName = names[randomIndex];

      // Quay vòng ngẫu nhiên 3–5 vòng + vị trí random
      const randomDegree = 360 * (3 + Math.random() * 2) + (randomIndex * (360 / names.length));
      wheel.style.transform = `rotate(${randomDegree}deg)`;

      // Hiển thị kết quả sau khi quay
      nameDisplay.textContent = "⏳ Đang quay...";
      setTimeout(() => {
        nameDisplay.textContent = "🎉 Kết quả: " + randomName;
      }, 3000);
    }


    //------------------random số--------------

    let spinning = false;

    function startSpin() {
      if (spinning) return; // tránh bấm nhiều lần
      const min = parseInt(document.getElementById("min").value);
      const max = parseInt(document.getElementById("max").value);
      const result = document.getElementById("result");

      if (isNaN(min) || isNaN(max) || min >= max) {
        result.textContent = "⚠️ Nhập khoảng hợp lệ!";
        return;
      }

      spinning = true;
      result.classList.add("spin");
      result.textContent = "🔄 Đang quay...";

      let duration = 2500; // thời gian quay tổng
      let elapsed = 0;
      let interval = 60; // thời gian giữa các lần đổi số (ms)

      const spinInterval = setInterval(() => {
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        result.textContent = number;

        // sau mỗi vòng, tăng khoảng cách để quay chậm dần
        elapsed += interval;
        interval += 20;

        if (elapsed >= duration) {
          clearInterval(spinInterval);
          const finalNumber = Math.floor(Math.random() * (max - min + 1)) + min;
          result.classList.remove("spin");
          result.textContent = `🎉 Kết quả: ${finalNumber}`;
          spinning = false;
        }
      }, interval);
    }

    //------------------random quote--------------

     const quotes = [
      "Thất bại là mẹ thành công.",
      "Không có gì là không thể.",
      "Hôm nay bạn đã cố gắng hết mình chưa?",
      "Kiên trì là chìa khóa của thành công.",
      "May mắn là phần thưởng cho sự chuẩn bị.",
      "Càng cố gắng, may mắn càng mỉm cười với bạn.",
      "Mọi con số đều có ý nghĩa riêng – bạn chỉ cần tìm ra nó.",
      "Đôi khi số ngẫu nhiên lại chính là định mệnh!",
      "Không có gì là ngẫu nhiên, chỉ là bạn chưa hiểu quy luật mà thôi.",
      "Số đẹp nhất là số khiến bạn mỉm cười 😊",
      "Một ngày tốt lành bắt đầu bằng một con số may mắn!",
      "Bạn vừa chứng minh xác suất 1 trong N là có thật 😄",
      "Thành công không đến từ may mắn, mà từ nỗ lực."
    ];

    function randomQuote() {
      const quoteEl = document.getElementById("quote");
      const spinner = document.getElementById("spinner");

      // Hiện vòng xoay
      spinner.style.display = "block";
      quoteEl.textContent = "Đang quay cảm hứng... ✨";

      // Sau 2 giây random quote
      setTimeout(() => {
        const i = Math.floor(Math.random() * quotes.length);
        spinner.style.display = "none";
        quoteEl.textContent = `💬 ${quotes[i]}`;
      }, 2000);
    }



