function ready()
{
    var cancel = document.getElementById('cancel');

    cancel.addEventListener('click', ()=>
    {
        document.getElementsByClassName('container-form').classList.remove('visible');
    })

    var product_id = document.getElementById("product-id");
    var product_code = sessionStorage.getItem("code");

    product_id.innerHTML = product_code ;
    sessionStorage.clear();
}

if(document.readyState === 'loading')
{
    document.addEventListener('DOMContentLoaded', ready());
}
else
{
    ready();
}
