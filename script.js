function compute()
{
   //get principal value
   var principal = document.getElementById("principal").value;

   //validate principal input
   if(principal <= 0){
    alert("Enter a positive number");
    principal.focus();
    return false;
}
    //get rate value
    var rate = document.getElementById("rate").value;

    //get years
    var years = document.getElementById("years").value;
                   
    //calculate interest
    var interest = principal * years * rate /100;
       
    //convert the 'No of Years' into the actual year
    var year = new Date().getFullYear()+parseInt(years);
       
    //show result
    document.getElementById("result").innerHTML="If you deposit <mark>"
    +principal+"</mark>,\<br\>at an interest rate of <mark>"
    +rate+"% </mark>\<br\>You will receive an amount of <mark>"
    +interest+"</mark>,\<br\>in the year <mark>"
    +year+"</mark>\<br\>";
    return true;
}


//reads the value of the range slider and displays it
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}





        
