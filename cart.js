var updateBtns=document.getElementsByClassName('update-cart')
for(var i=0;i<updateBtns.length;i++){
    updateBtns[i].addEventListener('click',function(){
        var productId=this.dataset.product
        var action=this.dataset.action
        console.log("product id is :"+productId+" "+"and action is :"+action)
        console.log("USER :"+user)

        if(user==="AnonymousUser"){
            console.log("not logged in")
        }
        else{
            updateUserOrder(productId,action)
        }
    })
}

function updateUserOrder(productId,action){
    var url='/update_item/'
    fetch(url,{
        method:'POST',
        headers:{
            'content-Type':'application/json',
            'X-CSRFToken': csrftoken,
        },
        body:JSON.stringify({'productId':productId,'action':action})
        })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        location.reload()
    })
}
