const data = [
{name:"iPhone 15 Pro Max",brand:"iphone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",price:34990000,desc:"A17 Pro"},
{name:"iPhone 14 Pro",brand:"iphone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",price:27990000,desc:"Camera xịn"},
{name:"iPhone 13",brand:"iphone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg",price:17990000,desc:"Ổn định"},

{name:"Samsung S24 Ultra",brand:"samsung",img:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g.jpg",price:32990000,desc:"S Pen"},
{name:"Samsung S23",brand:"samsung",img:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23.jpg",price:21990000,desc:"Mạnh"},
{name:"Samsung A54",brand:"samsung",img:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a54.jpg",price:8990000,desc:"Giá tốt"},

{name:"Xiaomi 14",brand:"xiaomi",img:"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14.jpg",price:19990000,desc:"Hiệu năng"},
{name:"Xiaomi 13",brand:"xiaomi",img:"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13.jpg",price:15990000,desc:"Ổn"},
{name:"Xiaomi Note 12",brand:"xiaomi",img:"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-12.jpg",price:6990000,desc:"Rẻ"},

{name:"Oppo Find X5",brand:"oppo",img:"https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x5.jpg",price:18990000,desc:"Đẹp"},
{name:"Oppo Reno 8",brand:"oppo",img:"https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8.jpg",price:9990000,desc:"Camera"},

{name:"Vivo V27",brand:"vivo",img:"https://fdn2.gsmarena.com/vv/bigpic/vivo-v27.jpg",price:10990000,desc:"Thiết kế"},
{name:"Realme GT",brand:"realme",img:"https://fdn2.gsmarena.com/vv/bigpic/realme-gt.jpg",price:8990000,desc:"Gaming"},
{name:"Nokia G60",brand:"nokia",img:"https://fdn2.gsmarena.com/vv/bigpic/nokia-g60.jpg",price:5990000,desc:"Bền"}
];

let cartData = [];
let current = null;

function format(p){
return p.toLocaleString('vi-VN')+" đ";
}

function show(list){
document.getElementById("list").innerHTML = list.map(p=>`
<div class="card">
<img src="${p.img}" onclick="detail('${p.name}')">
<h4>${p.name}</h4>
<p class="price">${format(p.price)}</p>
<button onclick="add('${p.name}')">Thêm</button>
</div>
`).join('');
}

function filter(type){
if(type==="all") show(data);
else show(data.filter(p=>p.brand===type));
}

function detail(name){
let p = data.find(x=>x.name===name);
current = p;

modal.style.display="block";
mImg.src = p.img;
mName.innerText = p.name;
mPrice.innerText = format(p.price);
mDesc.innerText = p.desc;
}

function closeModal(){
modal.style.display="none";
}

function add(name){
let p = data.find(x=>x.name===name);
cartData.push(p);
renderCart();
}

function addCart(){
cartData.push(current);
renderCart();
closeModal();
}

function renderCart(){
cart.innerHTML = cartData.map(p=>`<p>${p.name}</p>`).join('');
let totalPrice = cartData.reduce((s,p)=>s+p.price,0);
total.innerText = "Tổng: " + format(totalPrice);
}

function toggleCart(){
cartBox.classList.toggle("show");
}

function checkout(){
if(cartData.length===0){
alert("Giỏ hàng trống!");
return;
}
orderModal.style.display="block";
}

function submitOrder(){
let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let address = document.getElementById("address").value;

if(name==="" || phone==="" || address===""){
error.innerText="Vui lòng nhập đầy đủ!";
return;
}

alert("Đặt hàng thành công!");
cartData=[];
renderCart();
orderModal.style.display="none";
cartBox.classList.remove("show");
error.innerText="";
}

function closeOrder(){
orderModal.style.display="none";
error.innerText="";
}

document.getElementById("search").oninput = e=>{
let v = e.target.value.toLowerCase();
show(data.filter(p=>p.name.toLowerCase().includes(v)));
}

function toggleDark(){
document.body.classList.toggle("dark");
}

show(data);
