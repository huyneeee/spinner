const listPrize = [
  {
    index: 1,
    name: "KEM CHỐNG NẮNG 668K",
  },
  {
    index: 2,
    name: "SON MÀU DIVA LIP TINT",
  },
  {
    index: 3,
    name: "SET 03 MẶT NẠ DƯỠNG TRẮNG",
  },
  {
    index: 4,
    name: "SET 03 MẶT NẠ TRẺ HOÁ",
  },
  {
    index: 5,
    name: "TUÝP COLLAGEN 66K",
  },
  {
    index: 6,
    name: "SERUM THÂM 666K",
  },
  {
    index: 7,
    name: "SON DƯỠNG DIVA LIP GLOSS",
  },
  {
    index: 8,
    name: "SET 03 MẶT NẠ CẤP ẨM",
  },
  {
    index: 9,
    name: "VOUCHER 600K",
  },
  {
    index: 10,
    name: "SERUM MỤN 666K",
  },
];
const spinner = document.querySelector("#rotate");
const textPrize = document.querySelector("#text-prize");
const popupShowForm = document.querySelector("#wrapper_popup");
const popNotice = document.querySelector("#popup-notice");
const formSubmit = document.querySelector("#my-form");
const areaOneCell = 36;
const rotation = 2160;
const differenceBetween = 18;
const durationSpin = 6000;
const timingRotate = {
  duration: durationSpin,
  easing: "cubic-bezier(0.33, 1, 0.68, 1)",
};
let counterSpin = 0;

const handleRotate = () => {
  if (localStorage.getItem("counterSpin") > 0) {
    alert("Bạn đã hết lượt quay !");
    return;
  }
  localStorage.setItem("counterSpin", (counterSpin += 1));
  const prizeBox = Math.floor(Math.random() * 9) + 1;
  const winningGif = listPrize.find((item) => item.index === prizeBox);
  const degPrizeBox =
    rotation + (prizeBox * areaOneCell - differenceBetween);
  const spinning = [
    { transform: "rotate(0)" },
    {
      transform: `rotate(${degPrizeBox}deg)`,
    },
  ];
  spinner.animate(spinning, timingRotate);
  setTimeout(() => {
    spinner.style.transform = `rotate(${degPrizeBox}deg)`;
    tooglePopForm(true, winningGif.name);
  }, durationSpin);
}

const tooglePopForm = (status, winningGif) => {
  if (!status) {
    popupShowForm.style.display = "none";
    return;
  }
  setTimeout(() => {
    popupShowForm.style.display = "block";
    textPrize.innerHTML = winningGif;
  }, 1000);
}

const tooglePopNotice = (status) => {
  if (!status) {
    popNotice.style.display = "none";
    return;
  }
  popNotice.style.display = "block";
}
const hidePopup = () => {
  document.getElementById('wrapper_popup').style.display = 'none';
  window.location.reload();
}

window.onload = function () {
  document.getElementById("my-form").onsubmit = function (e) {
    e.preventDefault();

    const name = document.getElementById('name_vxmm_10').value;
    const phone = document.getElementById('phone_vxmm_10').value;

    if (!name) {
      document.getElementById('nameVal6').style.display = 'block';
      return;
    } else {
      document.getElementById('nameVal6').style.display = 'none';
    }
    if (!phone) {
      document.getElementById('phoneVal6').style.display = 'block';
      return;
    } else {
      if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(phone)) {
        document.getElementById('phoneVal6').innerHTML =
          'Số điện thoại không đúng định dạng!';
        document.getElementById('phoneVal6').style.display = 'block';
        return;
      } else {
        document.getElementById('phoneVal6').style.display = 'none';
      }
    }
    tooglePopForm(false);
    tooglePopNotice(true);
    return false;
  };
};