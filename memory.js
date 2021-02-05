(function(){


    let cards = document.querySelectorAll('.memory-card')
    cards.forEach(sort);

    function sort(card) {
        let random = Math.floor(Math.random() * 20)
        card.style.order = random;
    }
    function endscreen(){
         for (let i = 0; i <2 ; i++) {
         document.querySelectorAll('.end')[i].classList.remove("hide");
         }
        }

for (let i = 0; i <document.querySelectorAll('.memory-card').length ; i++) {
    var paircounter=0

cards[i].addEventListener("click",function() {

    if (document.querySelectorAll('.turn').length >= 2) {

    }else if(document.querySelectorAll('.back-face')[i].classList.contains("turn")){}
    else {
        myfunction()
        checkturned()
        console.log(newarray)
    }


    function myfunction() {
          if(document.querySelectorAll('.turn').length === 1){
              setTimeout(turnback,1500);
              setTimeout(clearArray, 1000);

            }
             document.querySelectorAll('.back-face')[i].classList.add("turn")
        }
})

    function checkturned() {
        if( document.querySelectorAll('.back-face')[i].classList.contains('turn')===true){
            newarray.unshift(document.querySelectorAll('.back-face')[i].getAttribute('data-title'));

            if (newarray[0] === newarray[1]) {
                setTimeout(pairfound,500)
            }
        }
    }

}

    var newarray=[]

    function clearArray(){
            newarray.splice(0,2);
    }

    function pairfound(){
    document.querySelectorAll('.back-face').forEach(remove)
        function remove(item){
        if(item.getAttribute('data-title')===newarray[0]){
            item.classList.add('paired-cards')
        }
        }
    document.querySelectorAll('.memory-card').forEach(remove)
        function remove(item){
        if(item.getAttribute('data-title')===newarray[0]){
            item.classList.add('paired-cards')
        }
        }

    document.querySelectorAll('.front-face').forEach(remove2)
        function remove2(item){
        if(item.getAttribute('data-title')===newarray[0]){
            item.classList.add('paired-cards')
        }
        }
        paircounter+=1
        if(paircounter===8){
            endscreen()
        }

    }

    function turnback(){
        document.querySelectorAll('.back-face').forEach(turnall)
            function turnall(cards){
             cards.classList.remove("turn")
            }
    }


})();














