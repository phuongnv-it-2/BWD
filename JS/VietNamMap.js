    var library = [
        { id: "HoangSa", name: "Hoàng Sa (Đà Nẵng)", number: 65 },
        { id: "TruongSa", name: "Trường Sa (Khánh Hòa)", number: 64 },
        { id: "YenBai", name: "Yên Bái", number: 63 },
        { id: "VinhPhuc", name: "Vĩnh Phúc", number: 62 },
        { id: "VinhLong", name: "Vĩnh Long", number: 61 },
        { id: "TuyenQuang", name: "Tuyên Quang", number: 60 },
        { id: "TraVinh", name: "Trà Vinh", number: 59 },
        { id: "TienGiang", name: "Tiền Giang", number: 58 },
        { id: "ThuaThienHue", name: "Thừa Thiên - Huế", number: 57 },
        { id: "ThanhHoa", name: "Thanh Hóa", number: 56 },
        { id: "ThaiNguyen", name: "Thái Nguyên", number: 55 },
        { id: "ThaiBinh", name: "Thái Bình", number: 54 },
        { id: "TayNinh", name: "Tây Ninh", number: 53 },
        { id: "SonLa", name: "Sơn La", number: 52 },
        { id: "SocTrang", name: "Sóc Trăng", number: 51 },
        { id: "QuangTri", name: "Quảng Trị", number: 50 },
        { id: "QuangNinh", name: "Quảng Ninh", number: 49 },
        { id: "QuangNgai", name: "Quảng Ngãi", number: 48 },
        { id: "QuangNam", name: "Quảng Nam", number: 47 },
        { id: "QuangBinh", name: "Quảng Bình", number: 46 },
        { id: "PhuYen", name: "Phú Yên", number: 45 },
        { id: "PhuTho", name: "Phú Thọ", number: 44 },
        { id: "NinhThuan", name: "Ninh Thuận", number: 43 },
        { id: "NinhBinh", name: "Ninh Bình", number: 42 },
        { id: "NgheAn", name: "Nghệ An", number: 41 },
        { id: "NamDinh", name: "Nam Định", number: 40 },
        { id: "LongAn", name: "Long An", number: 39 },
        { id: "LangSon", name: "Lạng Sơn", number: 38 },
        { id: "LamDong", name: "Lâm Đồng", number: 37 },
        { id: "LaoCai", name: "Lào Cai", number: 36 },
        { id: "LaiChau", name: "Lai Châu", number: 35 },
        { id: "KomTum", name: "Kom Tum", number: 34 },
        { id: "KienGiang", name: "Kiên Giang", number: 33 },
        { id: "KhanhHoa", name: "Khánh Hòa", number: 32 },
        { id: "HungYen", name: "HưngYên", number: 31 },
        { id: "HoaBinh", name: "Hòa Bình", number: 30 },
        { id: "HoChiMinh", name: "Hồ Chí Minh", number: 29 },
        { id: "HauGiang", name: "Hậu Giang", number: 28 },
        { id: "HaiPhong", name: "Hải Phòng", number: 27 },
        { id: "HaiDuong", name: "Hải Dương", number: 26 },
        { id: "HaTinh", name: "Hà Tĩnh", number: 25 },
        { id: "HaNoi", name: "Hà Nội", number: 24 },
        { id: "HaNam", name: "Hà Nam", number: 23 },
        { id: "HaGiang", name: "Hà Giang", number: 22 },
        { id: "GiaLai", name: "Gia Lai", number: 21 },
        { id: "DongThap", name: "Đồng Tháp", number: 20 },
        { id: "DongNai", name: "Đồng Nai", number: 19 },
        { id: "DienBien", name: "Điện Biên", number: 18 },
        { id: "DakNong", name: "Đắk Nông", number: 17 },
        { id: "DakLak", name: "Đắk Lắk", number: 16 },
        { id: "DaNang", name: "Đà Nẵng", number: 15 },
        { id: "CanTho", name: "Cần Thơ", number: 14 },
        { id: "CaoBang", name: "Cao Bằng", number: 13 },
        { id: "CaMau", name: "Cà Mau", number: 12 },
        { id: "BinhThuan", name: "Bình Thuận", number: 11 },
        { id: "BinhPhuoc", name: "Bình Phước", number: 10 },
        { id: "BinhDuong", name: "Bình Dương", number: 9 },
        { id: "BinhDinh", name: "Bình Định", number: 8 },
        { id: "BenTre", name: "Bến Tre", number: 7 },
        { id: "BacNinh", name: "Bắc Ninh", number: 6 },
        { id: "BacGiang", name: "Bắc Giang", number: 5 },
        { id: "BacCan", name: "Bắc Cạn", number: 4 },
        { id: "BacLieu", name: "Bạc Liêu", number: 3 },
        { id: "BaRiaVungTau", name: "Bà Rịa - Vũng Tàu", number: 2 },
        { id: "AnGiang", name: "An Giang", number: 1 }
    ];

       function findProvince(id) {
        for (var i = 0; i < library.length; i++) {
            if (id === library[i].id) {
                return library[i];
            }
        }
        return null; 
    }

    function displayProvince(jsonData) {
        return `
        <link rel="stylesheet" href="CSS/VnPanel.css">
          <div class="title-section section">
        <h1 class="head">${jsonData.province}</h1>
        <h2 class="title">"Huế – Hồn Việt trong lòng cố đô"</h2>
        <div class="underline"></div>
      </div>

    <section class="letter-section section">
    <h2 class="TieuDe">I. Văn hóa ẩm thực</h2>

<div class="slide-container">
	
	<div class="slides">
		<img src="${jsonData.ImgSlide1}" class="active">
		<img src="${jsonData.ImgSlide2}">
		<img src="${jsonData.ImgSlide3}">
		<img src="${jsonData.ImgSlide4}">
		<img src="${jsonData.ImgSlide5}">
	</div>

	<div class="buttons">
		<span class="next">&#10095;</span>
		<span class="prev">&#10094;</span>
	</div>

	<div class="dotsContainer">
		<div class="dot active" attr='0' onclick="switchImage(this)"></div>
		<div class="dot" attr='1' onclick="switchImage(this)"></div>
		<div class="dot" attr='2' onclick="switchImage(this)"></div>
		<div class="dot" attr='3' onclick="switchImage(this)"></div>
		<div class="dot" attr='4' onclick="switchImage(this)"></div>
	</div>

</div>
<script src="JS/SlideShow.js"></script>
  </section>





  <section class="letter-section section">
    <h2 class="TieuDe">II. Địa danh nổi bật</h2>
   
    <div class="container">
        <div class="slide">
            <div class="item" style="background-image: url(${jsonData.ImgPlace1});">

                <div class="content">
                    <div class="name">${jsonData.namePlace1}</div>
                    <div class="des">${jsonData.Content1}</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style="background-image: url(${jsonData.ImgPlace2});">
                <div class="content">
                    <div class="name">${jsonData.namePlace2}</div>
                    <div class="des">${jsonData.Content2}</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style="background-image: url(${jsonData.ImgPlace3});">
                <div class="content">
                    <div class="name">${jsonData.namePlace3}</div>
                    <div class="des">${jsonData.Content3}</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style="background-image: url(${jsonData.ImgPlace4});">
                <div class="content">
                    <div class="name">${jsonData.namePlace4}</div>
                    <div class="des">${jsonData.Content4}</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style="background-image: url(${jsonData.ImgPlace5});">
                <div class="content">
                    <div class="name">${jsonData.namePlace5}</div>
                    <div class="des">${jsonData.Content5}</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style="background-image: url(${jsonData.ImgPlace6});">
                <div class="content">
                    <div class="name">${jsonData.namePlace6}</div>
                    <div class="des">${jsonData.Content6}</div>
                    <button>See More</button>
                </div>
            </div>
        </div>
        <div class="button">
            <button class="prevbtn"><i class="fa-solid fa-arrow-left"></i></button>
            <button class="nextbtn"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
    <script src="JS/slideProvince.js"></script>
  </section>



  <section class="letter-section section">
    <h2 class="TieuDe">III. Làng nghề truyền thống</h2>

    </ul>
    <div class="memory-section section">


        <div class="memory-wrapper">
          <div class="memory-box m1">
           <img src="${jsonData.Imgtraditionalprofession1}" alt="Ảnh minh họa" class="memory-image">
            <span class="bloger">${jsonData.traditionalprofession1} <ion-icon name="checkmark-circle"> </ion-icon> </span>
            <p class="title-blog">${jsonData.Contenttraditionalprofession1}</p>
          </div>
          <div class="memory-box m2">
           <img src="${jsonData.Imgtraditionalprofession2}" alt="Ảnh minh họa" class="memory-image">
            <span class="bloger">${jsonData.traditionalprofession2} <ion-icon name="checkmark-circle"></span>
            <p class="title-blog">${jsonData.Contenttraditionalprofession2}</p>
          </div>
          <div class="memory-box m3">
           <img src="${jsonData.Imgtraditionalprofession3}" alt="Ảnh minh họa" class="memory-image">
            <span class="bloger">${jsonData.traditionalprofession3} <ion-icon name="checkmark-circle"></ion-icon></span>
            <p class="title-blog">${jsonData.Contenttraditionalprofession3}</p>
          </div>
          <div class="memory-box m4">
           <img src="${jsonData.Imgtraditionalprofession4}" alt="Ảnh minh họa" class="memory-image">
            <span class="bloger">${jsonData.traditionalprofession4} <ion-icon name="checkmark-circle"></ion-icon></span>
            <p class="title-blog">${jsonData.Contenttraditionalprofession4}</p>
          </div>
          <div class="memory-box m5">
           <img src="${jsonData.Imgtraditionalprofession5}" alt="Ảnh minh họa" class="memory-image">
            <span class="bloger">${jsonData.traditionalprofession5} <ion-icon name="checkmark-circle"></ion-icon></span>
            <p class="title-blog">${jsonData.Contenttraditionalprofession5}</p>
          </div>
          <div class="memory-box m6">
           <img src="${jsonData.Imgtraditionalprofession6}" alt="Ảnh minh họa" class="memory-image">
            <span class="bloger">${jsonData.traditionalprofession6} <ion-icon name="checkmark-circle"></ion-icon></span>
            <p class="title-blog">${jsonData.Contenttraditionalprofession6}</p>
          </div>
        </div>
      </div>
  </section>

        `;
    }

    $(document).ready(function () {
        $("svg").svgPanZoom();
    });
    $(document).on('click', 'path', function (e) {
        $("html,body").animate({
            scrollTop: 0,
            behavior: "smooth"
        }, 600);

        var province = findProvince(e.target.id);
        var jsonPath = "JSON/" + province.id + ".json";

        $.getJSON(jsonPath, function (data) {
            // Hiển thị thông tin về tỉnh thành và dữ liệu từ tệp JSON
            $("#info-box").css('display', 'block');
            $("#info-box").css({ position: "absolute", left: 650, top: 0 });
            $('#info-box').html(displayProvince(data));
        });

        return false;
    });
    $(document).ready(function () {
        $("svg").svgPanZoom();
    
        // Event listener for mouseover
        $(document).on('mouseover', 'path', function (e) {
            var province = findProvince(e.target.id);
            // Display the province name
            $("#info-box1").text(province.name);
            $("#info-box1").css('display', 'block');
            $("#info-box1").css({ position: "absolutely", left: e.pageX +30, top: e.pageY  , 'z-index':1000});
        });
    
        // Event listener for mouseout
        $(document).on('mouseout', 'path', function (e) {
            // Hide the province name when the mouse moves out
            $("#info-box1").css('display', 'none');
        });
    });
    
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $("#arrow ion-icon").fadeIn();
            }
            else {
                $("#arrow ion-icon").fadeOut();
            }
    
        });
        $("#arrow ion-icon").on('click', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    
    });
    




    // Slide Moving-----------------------------------------------
    // -----------------------------------------------------------
    const slider = document.getElementById("slider");
    const cards = slider.children;
    const cardCount = cards.length;
    const cardWidth = slider.offsetWidth;  

    let index = 1; 


    const firstClone = cards[0].cloneNode(true);
    const lastClone = cards[cardCount - 1].cloneNode(true);

    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, cards[0]);

    // Set initial position
    slider.style.transform = `translateX(-${cardWidth * index}px)`;

    // Function to move to the next card
    function moveToNext() {
    if (index >= cardCount + 1) return; // Prevent moving beyond the last card
    index++;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${cardWidth * index}px)`;
    }

    // Event listener for when the transition ends to reset position
    slider.addEventListener("transitionend", () => {
    if (index === cardCount + 1) {
        slider.style.transition = "none";
        index = 1;
        slider.style.transform = `translateX(-${cardWidth * index}px)`;
    }
    if (index === 0) {
        slider.style.transition = "none";
        index = cardCount;
        slider.style.transform = `translateX(-${cardWidth * index}px)`;
    }
    });

    // Auto slide
    setInterval(() => {
    moveToNext();
    }, 3000);








