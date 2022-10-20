

let son=10000;
let mukammal=0;
let getFunc=function (){
    for (let i=2;i<=son;i++){
        for(let j=1;j<i;j++){
            if (i%j===0){
                mukammal=mukammal+j;
            }
        }
        if(mukammal===i){
            console.log(mukammal)
        }
        mukammal=0
    }
}
// getFunc()

let natural=13;
let sana=0;
let getTub=function (){
    for(let i=2;i<=natural;i++){
        for(let j=1;j<=i;j++){
            if(i%j===0){
                sana++;
            }
        }
        if(sana===2){
            console.log(i)
        }
        sana=0
    }
}
// getTub()



let naturalSon=300;
let yigindiBir=0;
let yigindiIkki=0

let dostSon=function (){
    for(let i=2;i<=naturalSon;i++){
        for(let j=1;j<i;j++){
            if(i%j===0){
                yigindiBir=yigindiBir+j
            }
        }
        if(yigindiBir<=naturalSon){
            for (let k=1;k<yigindiBir;k++){
                if(yigindiBir%k===0){
                    yigindiIkki=yigindiIkki+k
                }
            }
            if(i===yigindiIkki && yigindiBir!==yigindiIkki){
                console.log(yigindiIkki,
                    yigindiBir)
            }
        }
        yigindiBir=0;
        yigindiIkki=0
    }
}
// dostSon()


let tavakkal=220;
let yig=0;
let bulYig=function (){
    for (let i=1;i<tavakkal;i++){
        if(tavakkal%i===0){
            yig=yig+i
        }
    }
    console.log(yig)
}

// bulYig()



let arr=[10,20,15,7,100,60,22,17]
let max=arr[0];
const getMax=function (){
    for (let i=1;i<arr.length;i++){
        if(max>arr[i]){
            max===max
        }
        else{
            max=arr[i]
        }
    }
    console.log(max)
}

getMax()



