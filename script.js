const data=[
{name:"iPhone 15 Pro Max",brand:"iphone",img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569",price:34990000},
{name:"iPhone 14 Pro",brand:"iphone",img:"https://images.unsplash.com/photo-1661961112958-9b9c7b4f1b2f",price:27990000},
{name:"Samsung S24 Ultra",brand:"samsung",img:"https://images.unsplash.com/photo-1707284959150-6f8c3baf8b3f",price:32990000},
{name:"Samsung S23",brand:"samsung",img:"https://images.unsplash.com/photo-1678911820864-e5d4c0c8f6bb",price:21990000},
{name:"Xiaomi 14",brand:"xiaomi",img:"https://images.unsplash.com/photo-1706889338747-9a61c45b7c1d",price:19990000},
{name:"Oppo Find X5",brand:"oppo",img:"https://images.unsplash.com/photo-1640622333549-8f9c0a1b1e5b",price:18990000},
{name:"Vivo V27",brand:"vivo",img:"https://images.unsplash.com/photo-1621570078210-7e7cbb18ce19",price:10990000}
];

function format(price){
return price.toLocaleString('vi-VN') + ' đ';
}

function show(list){
document.getElementById('list').innerHTML=list.map(p=>`
<div class='card'>
<img src='${p.img}' onclick='detail("${p.name}")'>
<h4>${p.name}</h4>
<p>${format(p.price)}</p>
<button onclick='alert("Đã thêm vào giỏ")'>Thêm</button>
<button onclick='buy()'>Mua</button>
</div>`).join('');
}

function filter(type){
if(type==='all') show(data);
else show(data.filter(p=>p.brand===type));
}

/* CHI TIẾT */
function detail(name){
let sp=data.find(p=>p.name===name);
document.getElementById("modal").style.display="block";
document.getElementById("modalImg").src=sp.img;
document.getElementById("modalName").innerText=sp.name;
document.getElementById("modalPrice").innerText=format(sp.price);
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

/* MUA */
function buy(){
let name=prompt("Tên:");
let phone=prompt("SĐT:");
let address=prompt("Địa chỉ:");
if(name && phone && address){
alert("Đặt hàng thành công!");
}
}

/* SEARCH */
document.getElementById('search').oninput=e=>{
let val=e.target.value.toLowerCase();
show(data.filter(p=>p.name.toLowerCase().includes(val)));
}

/* DARK MODE */
function toggleDark(){
document.body.classList.toggle('dark');
}

show(data);
