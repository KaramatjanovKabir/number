let btns = document.querySelectorAll (".btn");
let value = document.querySelector ("#value");
let count = 0 ;

console.log(btns);

btns.forEach ((btn) => {
    btn.addEventListener("click"  , function (event) {
        let styles = event.currentTarget.classList;
        if (styles.contains("decrease")){
            count--;
        }
        else if (styles.contains("increase")){
            count++;
        }

        else if (styles.contains("reset")){
            count =0;
        }

        if (count > 0 ){
            value.style.color = "green"
        }

        if (count < 0){
            value.style .color = "red"
        }
        if (count === 0){
            value.style .color = "#102a42"
        }
        value.textContent = count;
    } );
} );




