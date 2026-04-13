const data = [

{name:"iPhone 15 Pro Max",brand:"iphone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",price:34990000,desc:"Chip A17 Pro",ram:"8GB",rom:"256GB",screen:"6.7 OLED"},
{name:"iPhone 14 Pro",brand:"iphone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",price:27990000,desc:"Camera 48MP",ram:"6GB",rom:"128GB",screen:"6.1 OLED"},
{name:"iPhone 13",brand:"iphone",img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg",price:17990000,desc:"Chip A15",ram:"4GB",rom:"128GB",screen:"6.1 OLED"},

{name:"Samsung S24 Ultra",brand:"samsung",img:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g.jpg",price:32990000,desc:"Snapdragon 8 Gen 3",ram:"12GB",rom:"256GB",screen:"6.8 AMOLED"},
{name:"Samsung S23",brand:"samsung",img:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23.jpg",price:21990000,desc:"Flagship",ram:"8GB",rom:"256GB",screen:"6.1 AMOLED"},
{name:"Samsung A54",brand:"samsung",img:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a54.jpg",price:8990000,desc:"Pin trâu",ram:"8GB",rom:"128GB",screen:"6.4 AMOLED"},

{name:"Xiaomi 14",brand:"xiaomi",img:"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14.jpg",price:19990000,desc:"Leica",ram:"12GB",rom:"256GB",screen:"6.36 AMOLED"},
{name:"Xiaomi 13",brand:"xiaomi",img:"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13.jpg",price:15990000,desc:"Ổn định",ram:"8GB",rom:"256GB",screen:"6.36 AMOLED"},

{name:"Oppo Find X5",brand:"oppo",img:"https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x5.jpg",price:18990000,desc:"Thiết kế đẹp",ram:"8GB",rom:"256GB",screen:"6.55 AMOLED"},
{name:"Oppo Reno 8",brand:"oppo",img:"https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8.jpg",price:9990000,desc:"Camera đẹp",ram:"8GB",rom:"128GB",screen:"6.4 AMOLED"},

{name:"Vivo V27",brand:"vivo",img:"https://fdn2.gsmarena.com/vv/bigpic/vivo-v27.jpg",price:10990000,desc:"Thời trang",ram:"8GB",rom:"256GB",screen:"6.78 AMOLED"},
{name:"Realme GT",brand:"realme",img:"https://fdn2.gsmarena.com/vv/bigpic/realme-gt.jpg",price:8990000,desc:"Gaming",ram:"8GB",rom:"128GB",screen:"6.43 AMOLED"}

];

let cartData = [];
let current = null;

function format(p){
return p.toLocaleString('vi-VN')+" đ";
}

function show(list){
list = list.length ? list : data;
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

mDesc.innerHTML = `
<p>${p.desc}</p>
<p>📱 ${p.screen}</p>
<p>⚡ ${p.ram}</p>
<p>💾 ${p.rom}</p>
`;
}

function closeModal(){
modal.style.display="none";
}

function add(name){
let p = data.find(x=>x.name===name);
cartData.push(p);
renderCart();
updateCount();
alert("Đã thêm vào giỏ hàng!");
}

function addCart(){
cartData.push(current);
renderCart();
updateCount();
alert("Đã thêm vào giỏ hàng!");
closeModal();
}

function renderCart(){
cart.innerHTML = cartData.map(p=>`<p>${p.name}</p>`).join('');
let totalPrice = cartData.reduce((s,p)=>s+p.price,0);
total.innerText = "Tổng: " + format(totalPrice);
}

function updateCount(){
document.getElementById("count").innerText = cartData.length;
}

function toggleCart(){
cartModal.style.display="block";
}

function closeCart(){
cartModal.style.display="none";
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
updateCount();
orderModal.style.display="none";
cartModal.style.display="none";
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
