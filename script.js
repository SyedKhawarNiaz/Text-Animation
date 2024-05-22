function firstpart() {
  let h1 = document.querySelector("h1");
  let h1text = h1.textContent;
  let splittext = h1text.split("");
  let clutters = "";
  let haflval = Math.trunc(splittext.length / 2);
  splittext.forEach((elm, idx) => {
    if (idx < haflval) {
      clutters += `<span class="a">${elm}</span>`;
    } else {
      clutters += `<span class="b">${elm}</span>`;
    }
    h1.innerHTML = clutters;
  });
}
function Gspanimation() {
  gsap.from(".a", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    delay: 0.3,
    stagger: 0.15,
  });
  gsap.from(".b", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    delay: 0.3,
    stagger: -0.15,
  });
}

firstpart();
Gspanimation();
