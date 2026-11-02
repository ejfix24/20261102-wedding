// 웨딩 사진은 클릭하면 확대 팝업으로 열립니다.
const photoModal=document.querySelector("#photoModal"), largePhoto=document.querySelector("#largePhoto");
document.querySelectorAll(".zoom").forEach(img=>img.addEventListener("click",()=>{largePhoto.src=img.src;largePhoto.alt=img.alt;photoModal.showModal()}));
photoModal.querySelector(".close").addEventListener("click",()=>photoModal.close());
photoModal.addEventListener("click",e=>{if(e.target===photoModal)photoModal.close()});
// 복사 버튼은 계좌번호를 클립보드에 복사한 뒤 별도 안내창을 띄웁니다.
const msgModal=document.querySelector("#msgModal"), msg=document.querySelector("#msg");
document.querySelectorAll(".copy").forEach(btn=>btn.addEventListener("click",async()=>{const num=btn.dataset.num;try{await navigator.clipboard.writeText(num);msg.textContent="계좌번호가 복사되었습니다."}catch{msg.textContent="계좌번호: "+num}msgModal.showModal()}));
msgModal.querySelector(".close").addEventListener("click",()=>msgModal.close());document.querySelector("#ok").addEventListener("click",()=>msgModal.close());
msgModal.addEventListener("click",e=>{if(e.target===msgModal)msgModal.close()});
// 갤러리 버튼은 갤러리 첫 사진을 크게 엽니다.
document.querySelector("#more").addEventListener("click",()=>{const img=document.querySelector(".gallerygrid img");largePhoto.src=img.src;largePhoto.alt=img.alt;photoModal.showModal()});
// 하트 버튼의 선택 상태를 토글합니다.
document.querySelector("#heart").addEventListener("click",e=>{e.currentTarget.textContent=e.currentTarget.textContent==="♡"?"♥":"♡";e.currentTarget.style.color="#e8a898"});