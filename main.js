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
evensOnly(11)
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

function printsEachTime(){
    let num = 1;
  while (num <=7) {
    console.log(num +'.'+ 'Hello!');
    num++;
}
}

printsEachTime()
callChallengeBanner(9)

function hardCoding(str){
    let num = 1;
  while (num <=7) {
    console.log(num +'.'+ str);
    num++;
    }
}

hardCoding("Hello, The struggle is real")
callChallengeBanner(10)

function takesInStrAndNum(str,num){
    let count = 0
    while(count <=num){
        console.log(str)
        
        count++
    }
}

takesInStrAndNum("Good Bye", 3)

callChallengeBanner(11)

function beComplicated(str){
    let letters= 0
    while(letters< str.length){
        console.log(str[letters])
        letters++
    }
}
//needed to have an index
beComplicated("think")
callChallengeBanner(12)

function beMoreComplicated(str){
    let letters= 1
    while(letters< str.length){
        console.log(str[letters])
        letters= letters + 2
    }
}
//needed to have an index
beMoreComplicated("nobody")

callChallengeBanner(13)


function backwardsChallenge(string){
    str = string.length -1;
    while(str > -1){
    console.log(string[str]);
    str--;
    }
  }
  backwardsChallenge('this was hard');
callChallengeBanner(14)
// why doesnt while(str< 1) work?//




function isItFizz(input){
    let counting = 0;
    while (input > counting){
    counting = counting + 1;
    if (counting % 3 === 0 && counting % 5 === 0){
        console.log('FizzBuzz')}
        else if (counting % 3 === 0){
        console.log('Fizz')
        }
        else if (counting % 5 === 0){
          console.log('Buzz')
        }
  }
  }
  isItFizz(15);
  callChallengeBanner(15);