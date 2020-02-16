
(function(){

    function hanoi(disc, src, aux, dest){
       if(disc > 0){
        hanoi(disc-1, src, dest, aux);
        console.log(`move disc ${disc} from ${src} to ${dest}`);
        hanoi(disc-1, aux,src, dest);       
    }
}
module.exports = hanoi;
})();