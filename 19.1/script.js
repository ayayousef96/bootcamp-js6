const all_li=document.querySelectorAll('li');
const s=all_li[6];
console.log(s.innerText)
all_li[1].innerText="Main Title";
const parentul = document.querySelectorAll('ul')[1];
const newli = document.createElement('li');
newli.innerText="subtitle 4";
parentul.appendChild(newli);
all_li[all_li.length - 1].remove();
document.title.innerText=" Master Of The Dom";
document.querySelector('p').innerText="AYA YOUSEF";

