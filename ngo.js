function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src; // Set the clicked image as the modal image
  }

  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }



  const swiper = new Swiper('.custom-swiper-container', {
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
     },
},
});

function showPop(){
  let pbox=document.getElementById('popbox');
  if(pbox.style.visibility === "hidden",
    pobox.style.opacity === "0"
  ){
    pbox.style.visibility = "visible";
    pbox.style.opacity = "1";
  }
  else{
    pbox.style.visibility = "hidden";
    pbox.style.opacity = "0";
  }
}

