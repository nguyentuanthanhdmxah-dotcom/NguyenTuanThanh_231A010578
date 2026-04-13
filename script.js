const data = [
{name:"iPhone 15 Pro Max",brand:"iphone",img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569",price:34990000,desc:"A17 Pro"},
{name:"iPhone 14 Pro",brand:"iphone",img:"https://images.unsplash.com/photo-1661961112958-9b9c7b4f1b2f",price:27990000,desc:"Camera xịn"},
{name:"iPhone 13",brand:"iphone",img:"https://images.unsplash.com/photo-1632661674596-df8be070a5c5",price:17990000,desc:"Ổn định"},

{name:"Samsung S24 Ultra",brand:"samsung",img:"https://images.unsplash.com/photo-1707284959150-6f8c3baf8b3f",price:32990000,desc:"S Pen"},
{name:"Samsung S23",brand:"samsung",img:"https://images.unsplash.com/photo-1678911820864-e5d4c0c8f6bb",price:21990000,desc:"Mạnh"},
{name:"Samsung A54",brand:"samsung",img:"https://images.unsplash.com/photo-1670502396573-5d1bd7b3755f",price:8990000,desc:"Giá tốt"},

{name:"Xiaomi 14",brand:"xiaomi",img:"https://images.unsplash.com/photo-1706889338747-9a61c45b7c1d",price:19990000,desc:"Hiệu năng"},
{name:"Xiaomi 13",brand:"xiaomi",img:"https://images.unsplash.com/photo-1676822617731-3c6b6c3fbb8f",price:15990000,desc:"Ổn"},
{name:"Xiaomi Note 12",brand:"xiaomi",img:"https://images.unsplash.com/photo-1678685888221-cda773d7a7c2",price:6990000,desc:"Rẻ"},

{name:"Oppo Find X5",brand:"oppo",img:"https://images.unsplash.com/photo-1640622333549-8f9c0a1b1e5b",price:18990000,desc:"Đẹp"},
{name:"Oppo Reno 8",brand:"oppo",img:"https://images.unsplash.com/photo-1621315273984-7bafc8e5e8a4",price:9990000,desc:"Camera"},

{name:"Vivo V27",brand:"vivo",img:"https://images.unsplash.com/photo-1621570078210-7e7cbb18ce19",price:10990000,desc:"Thiết kế"},
{name:"Realme GT",brand:"realme",img:"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",price:8990000,desc:"Gaming"},
{name:"Nokia G60",brand:"nokia",img:"https://images.unsplash.com/photo-1601972599720-36938d4ecd31",price:5990000,desc:"Bền"}
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

function checkout(){
if(cartData.length === 0){
alert("Giỏ hàng đang trống!");
return;
}
orderModal.style.display = "block";
}

function submitOrder(){
let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let address = document.getElementById("address").value;

if(name==="" || phone==="" || address===""){
document.getElementById("error").innerText="Vui lòng nhập đầy đủ!";
return;
}

alert("Đặt hàng thành công!");
cartData=[];
renderCart();
closeOrder();
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
