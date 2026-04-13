const data=[
{name:"iPhone 15 Pro",brand:"iphone",img:"https://picsum.photos/200?1",price:2500},
{name:"iPhone 14 Pro",brand:"iphone",img:"https://picsum.photos/200?2",price:2200},
{name:"iPhone 13",brand:"iphone",img:"https://picsum.photos/200?3",price:1800},
{name:"Samsung S24",brand:"samsung",img:"https://picsum.photos/200?4",price:2100},
{name:"Samsung S23",brand:"samsung",img:"https://picsum.photos/200?5",price:1800},
{name:"Samsung A54",brand:"samsung",img:"https://picsum.photos/200?6",price:900},
{name:"Xiaomi 14",brand:"xiaomi",img:"https://picsum.photos/200?7",price:1200},
{name:"Xiaomi 13",brand:"xiaomi",img:"https://picsum.photos/200?8",price:1000},
{name:"Xiaomi Note 12",brand:"xiaomi",img:"https://picsum.photos/200?9",price:700},
{name:"Oppo Find X5",brand:"oppo",img:"https://picsum.photos/200?10",price:1100},
{name:"Oppo Reno 8",brand:"oppo",img:"https://picsum.photos/200?11",price:800},
{name:"Vivo V27",brand:"vivo",img:"https://picsum.photos/200?12",price:900},
{name:"Realme GT",brand:"realme",img:"https://picsum.photos/200?13",price:850},
{name:"Nokia G60",brand:"nokia",img:"https://picsum.photos/200?14",price:600}
];

let cart=[];

function show(list){
document.getElementById('list').innerHTML=list.map(p=>`
<div class='card'>
<img src='${p.img}'>
<h4>${p.name}</h4>
<p>${p.price}$</p>
<button onclick='add("${p.name}")'>Thêm</button>
<button onclick='buy("${p.name}")'>Mua</button>
</div>`).join('');
}

function filter(type){
if(type==='all') show(data);
else show(data.filter(p=>p.brand===type));
}

function add(name){
cart.push(name);
renderCart();
}

function renderCart(){
document.getElementById('cart').innerHTML=cart.map(i=>`<p>${i}</p>`).join('');
}

function buy(name){
let user=prompt("Nhập tên người mua:");
let phone=prompt("Nhập SĐT:");
if(user && phone) alert("Đặt hàng thành công!");
}

document.getElementById('search').oninput=e=>{
let val=e.target.value.toLowerCase();
show(data.filter(p=>p.name.toLowerCase().includes(val)));
}

function toggleDark(){document.body.classList.toggle('dark')}
function toggleMenu(){document.getElementById('menu').classList.toggle('show')}

show(data);
