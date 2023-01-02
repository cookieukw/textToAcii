const model = [
  {
    a: [1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0],
  },
  {
    b: [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
  },
  {
    c: [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
  },
  {
    d: [0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
  },
  {
    e: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  },
  {
    f: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
  },
  {
    g: [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  },
  {
    h: [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0],
  },
  {
    i: [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
  },
  {
    j: [1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  },
  {
    k: [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
  },
  {
    l: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    m: [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0],
  },
  {
    n: [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0],
  },
  {
    o: [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  },
  {
    p: [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
  },
  {
    q: [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0],
  },
  {
    r: [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
  },
  {
    s: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  },
  {
    t: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
  },
  {
    u: [0, 1, 1, 0, , 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  },
  {
    v: [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
  },
  {
    w: [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  },
  {
    x: [0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
  },
  {
    y: [0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
  },

  {
    z: [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
  },
];
const { log } = console;

const letterToEmote = (letter, first, second) => {
  if (letter.length > 1) return null;
  letter = letter.trim().toLowerCase();
  let res = model.find((res) => {
    if (Object.keys(res)[0] == letter) return true;
    return false;
  });

  res = res[letter].map((item, i) => {
    if (item == 0) return `${first}${(i + 1) % 4 == 0 ? `\n` : ""}`;
    return `${second}${(i + 1) % 4 == 0 ? `\n` : ""}`;
  });
  return res.join("");
};

const emojiFy = (text, first, second) => {
  let splited = text.split("");
  splited = splited
    .map((letter, i) => {
      return letterToEmote(letter, first, second) + `${i == splited.length - 1 ? "" : "\n\n"}`;
    })
    .join("");
  return splited;
};

const convert = document.querySelector("#convert")

const copy = document.querySelector("#copy")

const inputText = document.querySelector("#inputText")

const inputPrimary = document.querySelector("#inputPrimary")

const inputSecondary = document.querySelector("#inputSecondary")

const res = document.getElementById("res")
let converted = ""

convert.addEventListener("click", () => {
  const value = inputText.value.trim().toLowerCase()
  const valueP = inputPrimary.value.trim().toLowerCase()
  const valueS = inputSecondary.value.trim().toLowerCase()

  if (!value) return alert("Text inputfild is empty!!")
  if (!valueP) return alert("Primary inputfild is empty!!")
  if (!valueS) return alert("Secondary inputfild is empty!!")

  converted = emojiFy(value, valueP, valueS)

  res.innerText = converted

})

copy.addEventListener("click", async() => {
  if (!converted) return alert("Convert a text first !!")
//copy.select();
//copy.setSelectionRange(0, 99999); 
 
  await navigator.clipboard.writeText("oi").then(()=>{
    
    console.log('Async: Copying to clipboard was successful!');
    
  })
  .catch(err=>{
    console.error('Async: Could not copy text: ', err);
    
  })
})