const data=[
{name:"iPhone 15 Pro Max",brand:"iphone",img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569",price:34990000,desc:"Chip A17, camera xịn"},
{name:"Samsung S24 Ultra",brand:"samsung",img:"https://images.unsplash.com/photo-1707284959150-6f8c3baf8b3f",price:32990000,desc:"Snapdragon mạnh"},
{name:"Xiaomi 14",brand:"xiaomi",img:"https://images.unsplash.com/photo-1706889338747-9a61c45b7c1d",price:19990000,desc:"Giá tốt hiệu năng cao"}
];

let cart=[];
let currentProduct=null;

function format(p){return p.toLocaleString('vi-VN')+" đ"}

function show(list){
document.getElementById("list").innerHTML=list.map(p=>`
<div class="card">
<img src="${p.img}" onclick="detail('${p.name}')">
<h4>${p.name}</h4>
<p>${format(p.price)}</p>
<button onclick="add('${p.name}')">Thêm</button>
</div>`).join('');
}

function filter(type){
if(type==="all") show(data);
else show(data.filter(p=>p.brand===type));
}

function detail(name){
let p=data.find(x=>x.name===name);
currentProduct=p;
document.getElementById("modal").style.display="block";
modalImg.src=p.img;
modalName.innerText=p.name;
modalPrice.innerText=format(p.price);
modalDesc.innerText=p.desc;
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

function add(name){
let p=data.find(x=>x.name===name);
cart.push(p);
renderCart();
}

function addFromDetail(){
cart.push(currentProduct);
renderCart();
closeModal();
}

function renderCart(){
cartItems.innerHTML=cart.map(p=>`<p>${p.name}</p>`).join('');
let totalPrice=cart.reduce((sum,p)=>sum+p.price,0);
total.innerText="Tổng: "+format(totalPrice);
}

function checkout(){
alert("Đặt hàng thành công!");
cart=[];
renderCart();
}

document.getElementById("search").oninput=e=>{
let v=e.target.value.toLowerCase();
show(data.filter(p=>p.name.toLowerCase().includes(v)));
}

function toggleDark(){
document.body.classList.toggle("dark");
}

show(data);
