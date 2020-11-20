
function maksimalLoss (){
    let modal = document.getElementById("modal")
    let risk = [0.02, 0.015, 0.01]
    let id = ["2%", "1.5%","1%"]
   
    for(let i = 0; i < risk.length; i ++){
       var reverse = (Math.ceil(modal.value * risk[i])).toString().split('').reverse().join(''),
       ribuan = reverse.match(/\d{1,3}/g);
       ribuan = ribuan.join('.').split('').reverse().join('');
       if(true){
       document.getElementById(id[i]).innerHTML = `Rp ${ribuan}`  
       }
    }
}
function idealLot(){
    let modal = document.getElementById("modal")
    let risk = [0.02, 0.015, 0.01]
    let id = ["lot1", "lot2","lot3"]
    let stopLoss = document.getElementById("Stop Loss")
    let buy = document.getElementById("Buying price")

    for(let i = 0; i < risk.length; i ++){
        document.getElementById(id[i]).innerHTML = `${Math.ceil(modal.value * risk[i] / (buy.value - stopLoss.value) / 100)}`   
    }
}
function usageDana(){
    let modal = document.getElementById("modal")
    let risk = [0.02, 0.015, 0.01]
    let id = ["UD1", "UD2","UD3"]
    let buy = document.getElementById("Buying price")
    let stopLoss = document.getElementById("Stop Loss")

    for (let i = 0; i < risk.length; i ++){
    
       var reverse = (Math.ceil(modal.value * risk[i] / (buy.value - stopLoss.value) / 100)  *( buy.value * 100)).toString().split('').reverse().join(''),
       ribuan = reverse.match(/\d{1,3}/g);
       ribuan = ribuan.join('.').split('').reverse().join('');
        
       document.getElementById(id[i]).innerHTML = `Rp ${ribuan}`
    }
}

function uDPersen(){
    let modal = document.getElementById("modal")
    let risk = [0.02, 0.015, 0.01]
    let id = ["UD%1", "UD%2","UD%3"]
    let buy = document.getElementById("Buying price")
    let stopLoss = document.getElementById("Stop Loss")

    for (let i = 0; i < risk.length; i ++){

        if((modal.value * risk[i] / (buy.value - stopLoss.value) / 100 )* buy.value * 100 / modal.value*100 > 35){
            document.getElementById(id[i]).innerHTML =`${(Math.ceil(modal.value * risk[i] / (buy.value - stopLoss.value) / 100  *( buy.value * 100) / modal.value*100))}%` 
            document.getElementById(id[i]).style.background = "red"; 
        }else{
            document.getElementById(id[i]).innerHTML =`${(Math.ceil(modal.value * risk[i] / (buy.value - stopLoss.value) / 100  *( buy.value * 100) / modal.value*100))}%` 
            document.getElementById(id[i]).style.background = "green";
        }
    }
}
function lossTaken (){
    let modal = document.getElementById("modal")
    let risk = [0.02, 0.015, 0.01]
    let id = ["ML1", "ML2","ML3"]
    for(let i = 0; i < risk.length; i ++){

       var reverse = (Math.ceil(modal.value * risk[i])).toString().split('').reverse().join(''),
       ribuan = reverse.match(/\d{1,3}/g);
       ribuan = ribuan.join('.').split('').reverse().join('');
        
       document.getElementById(id[i]).innerHTML = `Rp ${ribuan}`
       document.getElementById(id[i]).style.color = "red";
    }
}
function targetProfit1 (){
    let modal = document.getElementById("modal")
    let risk = [0.02, 0.015, 0.01]
    let id = ["TP1", "TP2","TP3"]
    let buy = document.getElementById("Buying price")
    let stopLoss = document.getElementById("Stop Loss")
    let tP = document.getElementById("TP 1")
    
    for(let i = 0; i < risk.length; i ++){
      
       var reverse = (Math.ceil(modal.value * risk[i] * ((tP.value - buy.value) / (buy.value - stopLoss.value)))).toString().split('').reverse().join(''),
       ribuan = reverse.match(/\d{1,3}/g);
       ribuan = ribuan.join('.').split('').reverse().join('');
        if((tP.value - buy.value)< 0){
            document.getElementById(id[i]).innerHTML = '0'
            document.getElementById(id[i]).style.color = "red";
        }else if(modal.value * risk[i] * (tP.value - buy.value) / (buy.value - stopLoss.value) < modal.value * risk[i]){
            document.getElementById(id[i]).innerHTML = `Rp ${ribuan}`
            document.getElementById(id[i]).style.color = "red";
        }else{
            document.getElementById(id[i]).innerHTML = `Rp ${ribuan}` 
            document.getElementById(id[i]).style.color = "green";
        } 
    }
}
function targetProfit2 (){
    let modal = document.getElementById("modal")
    let risk = [0.02, 0.015, 0.01]
    let id = ["TP11", "TP22","TP33"]
    let buy = document.getElementById("Buying price")
    let stopLoss = document.getElementById("Stop Loss")
    let tP = document.getElementById("TP 2")
    
    for(let i = 0; i < risk.length; i ++){
        var reverse = (Math.ceil(modal.value * risk[i] * ((tP.value - buy.value) / (buy.value - stopLoss.value)))).toString().split('').reverse().join(''),
        ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        if((tP.value - buy.value) < 0){
            document.getElementById(id[i]).innerHTML = '0'
            document.getElementById(id[i]).style.color = "red";
        } else if(modal.value * risk[i] * (tP.value - buy.value) / (buy.value - stopLoss.value) < modal.value * risk[i]){
            document.getElementById(id[i]).innerHTML = `Rp ${ribuan}`
            document.getElementById(id[i]).style.color = "red";
        }else{
            document.getElementById(id[i]).innerHTML = `Rp ${ribuan}` 
            document.getElementById(id[i]).style.color = "green";
        }
    }
}
function targetProfit3 (){
    let modal = document.getElementById("modal")
    let risk = [0.02, 0.015, 0.01]
    let id = ["TP111", "TP222","TP333"]
    let buy = document.getElementById("Buying price")
    let stopLoss = document.getElementById("Stop Loss")
    let tP = document.getElementById("TP 3")
    
    for(let i = 0; i < risk.length; i ++){
        var reverse = (Math.ceil(modal.value * risk[i] * ((tP.value - buy.value) / (buy.value - stopLoss.value)))).toString().split('').reverse().join(''),
       ribuan = reverse.match(/\d{1,3}/g);
       ribuan = ribuan.join('.').split('').reverse().join('');
       if((tP.value - buy.value) < 0 ){
            document.getElementById(id[i]).innerHTML = '0'
            document.getElementById(id[i]).style.color = "red";
        }else if(modal.value * risk[i] * (tP.value - buy.value) / (buy.value - stopLoss.value) < modal.value * risk[i]){
            document.getElementById(id[i]).innerHTML = `Rp ${ribuan}`
            document.getElementById(id[i]).style.color = "red";
        }else{
            document.getElementById(id[i]).innerHTML = `Rp ${ribuan}` 
            document.getElementById(id[i]).style.color = "green";
        }
    }
}

function riskRatio (){
    let stopLoss = document.getElementById("Stop Loss")
    let buy = document.getElementById("Buying price")
    if ((buy-stopLoss)/buy * 100 > 10){
        document.getElementById("Risk ratio").innerHTML = '5. Max cut loss Risk 10% dari harga beli 1'
       
    }else{
        document.getElementById("Risk ratio").innerHTML = '5. Max cut loss Risk 10% dari harga beli 5'  
    }
} 