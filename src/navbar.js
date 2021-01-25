window.addEventListener('scroll', function(){

    const nav = document.querySelector('nav');
    const navbarBrand = document.querySelector('.navbar-brand');
    
    const productCreator = document.querySelector('#productCreator');
    const sampleProduct = document.querySelector('#sampleProduct');
    const media = document.querySelector('#media');
    const about = document.querySelector('#about');
    const sectionContact = document.querySelector('#sectionContact');
    

    

    nav.classList.toggle("sticky", window.scrollY > 0);
    navbarBrand.classList.toggle("text-dark", window.scrollY > 0);
    productCreator.classList.toggle("text-dark", window.scrollY > 0);
    sampleProduct.classList.toggle("text-dark", window.scrollY > 0);
    media.classList.toggle("text-dark", window.scrollY > 0);
    about.classList.toggle("text-dark", window.scrollY > 0);
    sectionContact.classList.toggle("text-dark", window.scrollY > 0);
    
    
});