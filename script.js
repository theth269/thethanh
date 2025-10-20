const messages = [
    {
        img: "./assets/1.jpg", //Thay ảnh
        text: "Chúc Duyên có 1 ngày lễ thật hạnh phúc,đẹp gái rồi thì đẹp hơn nữa,đạt kết quả tốt  trong các kì thi quan trọng sắp tới và bớt cọc cằn, dịu dàng thêm nhé." //Thay lời nhắn
    },
    {
        img: "./assets/2.jpg",
        text: "Hôm nay là 20-10 mình chúc Giang 1 ngày lễ thật ý nghĩa và hạnh phúc với mọi người. Ngày càng xinh đẹp học giỏi và sớm đạt được mong ước của bản thân cười tươi lên nhé, mỗi ngày của bạn đều là một đoá hoa nở rộ."
    },
    {
        img: "./assets/3.jpg",
        text: "Chúc bạn Hải có 1 ngày 20/10 vui vẻ bên người thương nhé!"
    },
    {
        img: "./assets/4.jpg",
        text: "Chúc Hạnh 20/10 rực rỡ như nắng sớm, luôn an nhiên, hạnh phúc và được yêu thương bởi cả thế giới quanh mình! "
    },
    {
        img: "./assets/5.jpg",
        text: "Chúc bạn 20/10 thật nhiều niềm vui và hạnh phúc.Luôn xinh tươi và rạng rỡ nhé! 😊😊"
    },
    {
        img: "./assets/6.jpg", //Thay ảnh
        text: "Ngày 20/10 cuối đời học sinh, chúc Huyền có một ngày ý nghĩa, ngày càng xinh hơn, học giỏi hơn, nhiều tiền hơn, gặt hái được nhiều thành công, đặc biệt là đặt chân được vào ngôi trường mơ ước<br>Happy teacher tương lai!" //Thay lời nhắn
    },
    {
        img: "./assets/7.jpg", //Thay ảnh
        text: "Chúc Lai có một ngày 20/10 thật vui và ý nghĩa. Mong mọi điều tốt đẹp sẽ đến với Lai he — luôn giữ nụ cười tươi và năng lượng tích cực như bây giờ nha! 🌸" //Thay lời nhắn
    },
    {
        img: "./assets/8.jpg", //Thay ảnh
        text: "Chúc H.Linh ngày  20/10 luôn rạng rỡ, xinh đẹp và gặt hái nhiều thành công!" //Thay lời nhắn
    },
    {
        img: "./assets/9.jpg", //Thay ảnh
        text: "Chúc T.Linh một ngày 20/10 thật vui vẻ, chúc Linh luôn học giỏi, xinh đẹp, sớm có người yêu và quan trọng nhất là luôn đạt được mọi điều mà Linh muốn!" //Thay lời nhắn
    },
    {
        img: "./assets/10.jpg", //Thay ảnh
        text: "Tri túc hạ túc đãi túc đài thời túc ta phóng khoáng lời chê bai nhưng chi li trong lời chúc!" //Thay lời nhắn
    },
    {
        img: "./assets/11.jpg", //Thay ảnh
        text: "Nhân ngày Phụ nữ Việt Nam 20/10, mình muốn gửi đến bạn Mai – một người bạn học tuyệt vời – những lời chúc chân thành nhất!Chúc bạn luôn giữ được nụ cười tươi trên môi, luôn xinh đẹp, học giỏi và thành công với những dự định phía trước. Dù sau này mỗi người có một con đường riêng, mình mong rằng tình bạn của chúng ta vẫn sẽ bền lâu và luôn gắn bó.Một lần nữa, chúc bạn một ngày 20/10 thật nhiều niềm vui, được nhận thật nhiều hoa,! 💐✨" //Thay lời nhắn
    },
    {
        img: "./assets/12.jpg", //Thay ảnh
        text: "Nhân ngày 20/10 mình và các bạn nam 12T1 kính chúc bạn và tất cả các bạn nữ một ngày lễ vui tươi, ngày càng xinh đẹp và học giỏi. Đặc biệt chúc bạn đỗ NV1 vào năm sau nhé!" //Thay lời nhắn
    },
    {
        img: "./assets/13.jpg", //Thay ảnh
        text: "chúc bạn Nhi ngày lễ 20/10 vui vẻ!" //Thay lời nhắn
    },
    {
        img: "./assets/14.jpg", //Thay ảnh
        text: "Qua 2 mùa 20/10, mình tưởng rẳng nó sẽ không còn háo hức như trước nhưng sao giờ cảm giác trong người mình cứ bồi hồi,nôn nao... chắc do đây là kỉ niệm cuối cùng - ngày 20/10 cuối cùng được ngồi lại cùng nhau. không biết nói gì hơn , mình chúc phương luôn xinh đẹp,lạc quan ,sớm đạt được thành công trong tương lai, đặc biệt là đỗ NV1 nha!" //Thay lời nhắn
    },
    {
        img: "./assets/15.jpg", //Thay ảnh
        text: "20/10 vui vẻ nha Quỳnh! Chúc cậu luôn tươi như bông, sung như nồi lẩu và hừng hực năng lượng như… wifi full vạch! 😆" //Thay lời nhắn
    },
    {
        img: "./assets/16.jpg", //Thay ảnh
        text: "Ngày 20/10 gửi bạn thảo một người con gái nước da khoẻ mạnh lại còn giàu mình chúc bạn có một ngày lễ vui vẻ mạnh khoẻ luôn đạt thành tích cao trong học tập để sau này có đủ yếu tố trở thành một phú bà!" //Thay lời nhắn
    },
    {
        img: "./assets/17.jpg", //Thay ảnh
        text: "☘️Gửi bạn tôi: chúc bạn một ngày 20/10 luôn lạc quan, tràn đầy năng lượng; càng lớn càng xinh càng học giỏi, càng nói nhiều thì càng cười haha🍀" //Thay lời nhắn
    },
    {
        img: "./assets/18.jpg", //Thay ảnh
        text: "Thảo cười tươi tắn rạng ngời,<br> Làm lớp cứ ngỡ… nắng rơi giữa trời🌸<br>Chúc Thảo 20/10 một ngày lễ vui vẻ, trần đầy niềm vui nhé !" //Thay lời nhắn
    },
    {
        img: "./assets/19.jpg", //Thay ảnh
        text: "Ngày hai mươi tháng mười đến bên,<br> Chúc Thảo luôn cười thật tươi nhé!<br>Đi học vui, đời thêm mạnh mẽ,<br>Xinh-giỏi-ngoan, chẳng thể chê đâu"
    },
    {
        img: "./assets/20.jpg", //Thay ảnh
        text: "Chúc Cẩm Tú 20-10 vui vẻ❤️❤️!" //Thay lời nhắn
    },
    {
        img: "./assets/21.jpg", //Thay ảnh
        text: "chúc Mỵ Choẹt 1 ngày 20/10 thật vui vẻ, hạnh phúc bên ny nha 🙂!" //Thay lời nhắn
    }
];

let hasFirstLetterFallen = false;

const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const popupImage = document.getElementById("popupImage");
const popupMessage = document.getElementById("popupMessage");
const centerText = document.getElementById("centerText");
//Thay những ảnh rơi từ trên xuống ở đây
const letterImages = [
    "./assets/letters.png",
    "./assets/q3.png",
    "./assets/h1.png",
    "./assets/h3.png",
    "./assets/t2.png",
    "./assets/t5.png",
];

function createHeartExplosion(x, y) {
    //Thay icon khi ấn thư, hoa, quà
    const hearts = ['❤️', '💐', '🎁', '🌹', '💕', '💖'];
    const numHearts = 12;
    
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        const angle = (Math.PI * 2 / numHearts) * i;
        const distance = Math.random() * 80 + 40;
        
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.setProperty('--dx', Math.cos(angle) * distance + 'px');
        heart.style.setProperty('--dy', Math.sin(angle) * distance + 'px');
        heart.style.fontSize = (Math.random() * 10 + 20) + 'px';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

function createFallingLetter() {
    const letter = document.createElement("img");
    const randomImage = letterImages[Math.floor(Math.random() * letterImages.length)];
    letter.src = randomImage;
    letter.classList.add("falling-letter");
    letter.style.left = Math.random() * (window.innerWidth - 50) + "px";
    letter.addEventListener("click", (e) => {
        createHeartExplosion(e.clientX, e.clientY);
        letter.classList.add('letter-clicked');
        setTimeout(() => {
            showPopup();
        }, 300);
    });
    
    document.body.appendChild(letter);
    
    setTimeout(() => {
        letter.remove();
    }, 8000);
}

// remake by thethanh(random người xuất hiện)

// let availableIndexes = [...Array(messages.length).keys()];
// function showPopup() {
//     if (availableIndexes.length === 0) {
//         availableIndexes = [...Array(22).keys()];
//     }
//     const randomIndex = Math.floor(Math.random() * availableIndexes.length);
//     const currentMessageIndex = availableIndexes[randomIndex];

//     const message = messages[currentMessageIndex];
//     popupImage.src = message.img;
//     popupMessage.innerHTML = message.text;
//     popup.style.display = "block";
//     overlay.classList.add("active");

//     popup.dataset.currentMessage = message.text;

//     availableIndexes.splice(randomIndex, 1);
// }
// end remake by thethanh
        
let currentMessageIndex = 0;
function showPopup() {
    const message = messages[currentMessageIndex];
    popupImage.src = message.img;
    popupMessage.innerHTML = message.text;
    popup.style.display = "block";
    overlay.classList.add("active");

    popup.dataset.currentMessage = message.text;

    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}

function closePopup() {
    popup.style.display = "none";
    overlay.classList.remove("active");

    if (popup.dataset.currentMessage) {
        centerText.innerHTML = popup.dataset.currentMessage;
    }
}

document.body.addEventListener("click", function () {
    const player = document.getElementById("player");
    if (player.paused) {
        player.play();
    }
});

overlay.addEventListener("click", closePopup);
setInterval(() => {
    createFallingLetter();
}, 1000);
