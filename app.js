const about=document.getElementById('aboutme');
const closebtn=document.querySelectorAll('.close-btn');
const open=document.getElementById('open');
const header=document.getElementById('header');
const hero=document.getElementById('hero');
const contactbtn=document.getElementById('contact-btn');
const contact=document.getElementById('contact');
const form=document.querySelector('.form');
const submit=document.querySelector('.submit');
const probtn=document.getElementById('pro-btn');
const project=document.getElementById('project');
const footer=document.getElementById('footer');




probtn.addEventListener('click',()=> project.classList.add("addme"));
probtn.addEventListener('click',()=> footer.classList.add("addme"));
open.addEventListener('click', ()=> about.classList.add("show"));
open.addEventListener('click', ()=> header.style.opacity = 0);
open.addEventListener('click', ()=> hero.style.opacity = 0);
contactbtn.addEventListener('click',()=> contact.classList.add("visible"));
contactbtn.addEventListener('click',()=> about.classList.remove("show"));

closebtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        about.classList.remove("show");
        header.style.opacity = 1;
        hero.style.opacity = 1;
        
        contact.classList.remove("visible");
    })
});

form.addEventListener('submit', (event)=>{

    if(form.checkValidity()){
        // Prevent the default form submission
        event.preventDefault();

        form.reset();
        submit.innerHTML = "Message Sent"
        submit.classList.add("back");
        setTimeout(() => {
            submit.classList.remove("back");
            submit.innerHTML = '<i class="fa-brands fa-telegram icon"></i> Send Message';
            
        }, 1200);
       
    }else {
        // If the form is not valid, alert the user
        alert('Please fill out all fields.');
    }


   
    
})
// close.addEventListener('click', ()=> about.classList.remove("show"));
// close.addEventListener('click', ()=> header.style.opacity = 1);




