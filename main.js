document.querySelector(".contol-buttons button").onclick=function(){
    let yourName=prompt("what your name");
   // document.getElementById('sound-game').play();
    yourName=yourName.trim();
    if(!yourName){
        document.querySelector(".name span ").innerHTML="Unknown";
    }else{
        document.querySelector(".name span").innerHTML=yourName;
    }
    document.querySelector(".contol-buttons").remove();
}
//let testOrderag=[1,11,13,18,17,19,0,2,16,5,7,9,3,10,4,6,8,14,15];

let durection=1000;
let blockCountainer=document.querySelector(".memory-game-blocks");
let blocks=Array.from(blockCountainer.children);
//let orderRage=[...Array(blocks.length).keys()];
let orderRage=Array.from(Array(blocks.length).keys());
shuffle(orderRage);
blocks.forEach((block,index) =>{
    block.style.order=orderRage[index];
    block.addEventListener('click',function(){
        flipBlock(block);
    });
});
function flipBlock(selectBlock){
    document.getElementById('click1').play();
    selectBlock.classList.add('is-flipes');
    let allflippedcolocks=blocks.filter(flipedBlock=> flipedBlock.classList.contains('is-flipes'));
    if(allflippedcolocks.length===2){
        stopClicking();
        checkMatchedBlocks(allflippedcolocks[0],allflippedcolocks[1]);
    }
}
function stopClicking(){
    blockCountainer.classList.add("no-clicking");
    setTimeout(()=>{
        blockCountainer.classList.remove("no-clicking");  
    },durection);
}
function checkMatchedBlocks(firstBlock,secondBlock){
    let traisElement=document.querySelector('.trais span');
    if(firstBlock.dataset.technolegy===secondBlock.dataset.technolegy){
        firstBlock.classList.remove('is-flipes');
        secondBlock.classList.remove('is-flipes');
        //
        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
        document.getElementById('sucsses').play();
    }else{
        traisElement.innerHTML=parseInt(traisElement.innerHTML)+1;
        setTimeout(()=>{
            firstBlock.classList.remove('is-flipes');
            secondBlock.classList.remove('is-flipes');
        },durection);
        document.getElementById('fall').play();
    }
}
function shuffle(array){
    let current=array.length,
    temp,
    random;
    while(current>0){
        random=Math.floor(Math.random()*current);
        current--;
        temp=array[current];
        array[current]=array[random];
        array[random]=temp;
    }
return array;

}