

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
        for(let j=1;j<=i;j++){
            if(i%j===0){
                yigindiBir=yigindiBir+j
            }
        }
        for (let k=1;k<=yigindiBir;k++){
            if(yigindiBir%k===0){
                yigindiIkki=yigindiIkki+k
            }
        }
        if(yigindiBir===yigindiIkki){
            console.log(yigindiBir,yigindiIkki)
        }
        yigindiBir=0;
        yigindiIkki=0
    }
}

dostSon()




