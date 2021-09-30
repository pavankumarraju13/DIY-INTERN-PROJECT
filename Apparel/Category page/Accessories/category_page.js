function ready()
{
   var product_card = document.querySelectorAll('.element a');
   var images = document.querySelectorAll('.image');
   var slider = document.querySelectorAll('.image-slider');

   images.forEach( image =>{
      image.addEventListener('mouseenter', ()=>
      {
         image.classList.add('slide');
      })
      image.addEventListener('mouseleave', ()=>
      {
         image.classList.remove('slide');
      })
   })

   slider.forEach( image => {
      image.addEventListener('mouseenter', ()=>
      {
         image.classList.remove('slide');
      })
      image.addEventListener('mouseleave', ()=>
      {
         image.classList.add('slide');
      })
   })

   for(let i=0; i<product_card.length; i++)
   {
      product_card[i].id =  "ACC" + (1000000 + (i+1))
      console.log(product_card[i].id)
   }

   product_card.forEach( product =>{
      product.addEventListener('click', ()=> 
      {
         sessionStorage.setItem("code", product.id);
         document.getElementsByClassName('container-form').classList.add('visible');
      })
   })
}

if(document.readyState === 'loading')
{
    document.addEventListener('DOMContentLoaded', ready());
}
else
{
    ready();
}
