/*=============== SHOW SIDEBAR ===============*/
   const navMenu = document.getElementById('sidebar'),
         navToggle = document.getElementById('nav-toggle'),
         navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
  if(navToggle){
    navToggle.addEventListener("click",() => {
      navMenu.classList.add('show-sidebar')
    })
  }

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose){
  navClose.addEventListener("click",() => {
    navMenu.classList.remove('show-sidebar')
  })
}

/*=============== SKILLS TABS ===============*/
  const tabs = document.querySelectorAll('[data-target]'),
     

  tabcontent = document.querySelectorAll('[data-content]');


  tabs.forEach(tab =>{
    tab.addEventListener("click",()=>{
        const target = document.querySelector(tab.dataset.target)

        tabcontent.forEach(tabContents =>{
            tabContents.classList.remove('skills_active')
        })
        target.classList.add('skills_active')

        tabs.forEach(tab =>{
            tab.classList.remove('skills_active')
        })
        tab.classList.add('skills_active')


    })
  })




/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixer = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
  const linkWork = document.querySelectorAll('.work_item')
  function activeWork(){
    linkWork.forEach(L=>L.classList.remove('active-work'))
    this.classList.add('active-work')
  }
  linkWork.forEach(L=> L.addEventListener("click",activeWork))

/*===== Work Popup =====*/
    
   document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("work_button")){
      togglePortfolioPopup();
      portfolioItemDetails(e.target.parentElement);
    }
   })
   function togglePortfolioPopup(){
    document.querySelector(".portfolio_popup").classList.toggle("open")
   }
   document.querySelector(".portfolio_popup-close").addEventListener("click",togglePortfolioPopup)
   function portfolioItemDetails(portfolioItem){
     
      
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
   }
  




/*=============== SERVICES MODAL ===============*/
  const modalViews = document.querySelectorAll(".services_modal"),
  modalBtns = document.querySelectorAll(".services_button"),
  modalCloses = document.querySelectorAll(".services_modal-close");

  let modal = function(modalClick){
    modalViews[modalClick].classList.add('active_modal')
  }
  modalBtns.forEach((modelBtn,i) => {
    modelBtn.addEventListener('click',()=>{
      modal(i);
    })
  })
 modalCloses.forEach((modalClose)=>{
  modalClose.addEventListener('click',()=>{
    modalViews.forEach((modalView) =>{
      modalView.classList.remove('active_modal')
    })
  })
 })

/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonials_container", {
  spaceBetween: 24,
  loop:true,
  grabCursor:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "576": {
      slidesPerView: 3,
     
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  
  },
});

/*=============== INPUT ANIMATION ===============*/
      const inputs = document.querySelectorAll(".input");
      function focusFunc(){
        let parent = this.parentNode;
        parent.classList.add("focus");
      }
function blurFunc(){
  let parent = this.parentNode;
  if(this.value ==""){
    parent.classList.remove('focus');
  }
}
inputs.forEach((input)=>{
  input.addEventListener("focus",focusFunc);
  input.addEventListener("blur",blurFunc);
})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
   const sections = document.querySelectorAll("section[id]");
   window.addEventListener("scroll", navHighlighter);
   

   function navHighlighter(){
    let scrollY=window.pageYOffset;
    sections.forEach(current =>{
      const sectionHight = current.offsetHight;
      const sectionTop = current.offsetTop-50;
     const sectionId =current.getAttribute("id");
     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHight){
      document.querySelector('.nav-menu a[hrf*='+sectionId +']').classList.add("active-link")
     }else{
      document.querySelector(`.nav-menu a[hrf*=${sectionId}]`).classList.remove("active-link")
     }
    })
   }

/*=============== SHOW SCROLL UP ===============*/
