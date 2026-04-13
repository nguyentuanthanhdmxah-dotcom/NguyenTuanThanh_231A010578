const data=[
{name:"iPhone 15 Pro Max",brand:"iphone",img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569",price:34990000},
{name:"iPhone 14 Pro",brand:"iphone",img:"https://images.unsplash.com/photo-1661961112958-9b9c7b4f1b2f",price:27990000},
{name:"Samsung S24 Ultra",brand:"samsung",img:"https://images.unsplash.com/photo-1707284959150-6f8c3baf8b3f",price:32990000},
{name:"Samsung S23",brand:"samsung",img:"https://images.unsplash.com/photo-1678911820864-e5d4c0c8f6bb",price:21990000},
{name:"Xiaomi 14",brand:"xiaomi",img:"https://images.unsplash.com/photo-1706889338747-9a61c45b7c1d",price:19990000},
{name:"Xiaomi Note 12",brand:"xiaomi",img:"https://images.unsplash.com/photo-1678685888221-cda773d7a7c2",price:6990000},
{name:"Oppo Find X5",brand:"oppo",img:"https://images.unsplash.com/photo-1640622333549-8f9c0a1b1e5b",price:18990000},
{name:"Oppo Reno 8",brand:"oppo",img:"https://images.unsplash.com/photo-1621315273984-7bafc8e5e8a4",price:9990000},
{name:"Vivo V27",brand:"vivo",img:"https://images.unsplash.com/photo-1621570078210-7e7cbb18ce19",price:10990000},
{name:"Realme GT",brand:"realme",img:"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",price:8990000},
{name:"Nokia G60",brand:"nokia",img:"https://images.unsplash.com/photo-1601972599720-36938d4ecd31",price:5990000},
{name:"Samsung A54",brand:"samsung",img:"https://images.unsplash.com/photo-1670502396573-5d1bd7b3755f",price:8990000},
{name:"iPhone 13",brand:"iphone",img:"https://images.unsplash.com/photo-1632661674596-df8be070a5c5",price:17990000},
{name:"Xiaomi 13",brand:"xiaomi",img:"https://images.unsplash.com/photo-1676822617731-3c6b6c3fbb8f",price:15990000}
];

let cart=[];

function format(price){
return price.toLocaleString('vi-VN') + ' đ';
}

function show(list){
document.getElementById('list').innerHTML=list.map(p=>`
<div class='card'>
<img src='${p.img}'>
<h4>${p.name}</h4>
<p>${format(p.price)}</p>
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
document.getElementById('cart').innerHTML="<h3>Giỏ hàng</h3>"+cart.map(i=>`<p>${i}</p>`).join('');
}

function buy(name){
let user=prompt("Nhập tên:");
let phone=prompt("SĐT:");
let address=prompt("Địa chỉ:");
if(user && phone && address) alert("Đặt hàng thành công!");
}

document.getElementById('search').oninput=e=>{
let val=e.target.value.toLowerCase();
show(data.filter(p=>p.name.toLowerCase().includes(val)));
}

function toggleDark(){
document.body.classList.toggle('dark');
}

show(data);
