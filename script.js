const data = [
{name:"iPhone 15 Pro Max",brand:"iphone",img:"https://picsum.photos/200?1",price:34990000,desc:"Chip A17 Pro, camera xịn"},
{name:"Samsung S24 Ultra",brand:"samsung",img:"https://picsum.photos/200?2",price:32990000,desc:"Bút S-Pen, hiệu năng mạnh"},
{name:"Xiaomi 14",brand:"xiaomi",img:"https://picsum.photos/200?3",price:19990000,desc:"Giá tốt, hiệu năng cao"},
{name:"Oppo Reno 8",brand:"oppo",img:"https://picsum.photos/200?4",price:9990000,desc:"Camera đẹp"},
{name:"Vivo V27",brand:"vivo",img:"https://picsum.photos/200?5",price:10990000,desc:"Thiết kế đẹp"}
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
alert("Đặt hàng thành công!");
cartData = [];
renderCart();
}

document.getElementById("search").oninput = e=>{
let v = e.target.value.toLowerCase();
show(data.filter(p=>p.name.toLowerCase().includes(v)));
}

function toggleDark(){
document.body.classList.toggle("dark");
}

show(data);
