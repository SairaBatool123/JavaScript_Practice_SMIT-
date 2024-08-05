function checkHere(){
    var birthDate = document.getElementById('inputDate')=new Date(inputDate,value)
    var recent = new Date()
    var newDate = recent - birthDate


    var year = newDate.getFullYear()-1970
    var month = newDate.getMonth()
    var days = newDate.getDate()-1

    document.getElementById('para').innerText="You'r" + year + "Years" + month + "Months" + days + "Days Old"
}
