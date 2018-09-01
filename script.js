document.addEventListener('DOMContentLoaded', function(){
    
document.querySelector('#btnUpper').addEventListener('click', function(){

      let text = document.querySelector('#texto').value;

      document.querySelector('#result').innerHTML = upper(text);

})

document.querySelector('#btnlower').addEventListener('click', function(){

      let text = document.querySelector('#texto').value;

      document.querySelector('#result').innerHTML = lower(text);

})

    function upper(text){

        return text.toUpperCase();
    }
	
	function lower(text){

        return text.toLowerCase();
    }
})