var ball = prompt("Imtixonda to'plagan balingizni kiriting.");
if (ball < 80) {
  alert("O'qishga kira olmadingiz");
} else if (ball <= 100) {
  alert("Siz super-kontrakt asosida o'qishga tavsiya qilindingiz");
  var pul = prompt("Kontrakt miqdori yiliga 3000 $ qancha pulingiz bor?");
  if (pul < 3000) alert("O'qishga qabul qilinmadingiz");
  else if (pul >= 3000) alert("O'qishga qabul qilindingiz");
} else if (ball <= 130) {
  alert("Siz kontrakt asosida qabul qilindizngiz");
  var pul = prompt("Kontrakt miqdori yiliga 2000 $ qancha pulingiz bor?");
  if (pul < 2000) alert("O'qishga qabul qilinmadingiz");
  else if (pul >= 2000) alert("O'qishga qabul qilindingiz");
} else if (ball <= 180) {
  alert("Grant asosida o'qishga qabul qilindingiz");
} else if (ball > 180) {
  alert(" Noto’g’ri qiymat kiritildi ");
}
