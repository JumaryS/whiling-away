function callChallengeBanner(num){
    num=num+1
    console.log("######"+ " " + "challenge" + num + " " + "######")
}
callChallengeBanner(0)



function printNumbers(){
let num= 0
while(num<=5){
    num=num+1
    console.log(num -1)
    } 
}
printNumbers()
callChallengeBanner(1)


function SixForPram(param){
    let num= 0

    while(num<= param){
        num= num+1
        console.log(num -1)
    }
}
SixForPram(6)
callChallengeBanner(2)

//need further explination//
function takesTwo(param1,param2){
    let equalsTo = param1
    while( equalsTo <= param2){
        
        equalsTo=equalsTo+1
        console.log(equalsTo)
    }
}
takesTwo(1,6)
callChallengeBanner(3)

function oddOrEven(input){
    let plusOne= 0
    while (input > plusOne){
        if (plusOne % 2 === 0){
    console.log(plusOne + " "+ "Even")
        }
        else if (plusOne %2 !== 0){
            console.log(plusOne + " "+ "Odd")
        }
    plusOne++
            }
}

oddOrEven(20)
callChallengeBanner(4)

function evensOnly(input){
let num= 0

while(input>num){
    if(num %2 === 0){
        console.log(num+ " "+ "Even")
    }
    num++
}
}
evensOnly(20)
callChallengeBanner(5)


function tenToOne(){
    num=20
    while(num >= 0){
        console.log(num)
        num= num-1
    }
}

tenToOne(20)
callChallengeBanner(6)



function blastOff(){
    num=20
    while(num >= 0){
        if(num === 0){
            console.log("BLAST OFF!!!")
        }
        else{console.log(num)
        }
        num= num-1}
}

blastOff(20)
callChallengeBanner(7)

function minusThree(){
    num=20
    while(num >= 0){
        console.log(num)
        num= num-3
    }
}

minusThree(20)
callChallengeBanner(8)

