function Cat(){
    this.makeNoise = function(){ return "meow";}
}

function Animal(){
    
}

Animal.eat = function() {console.log('i am eating now')}

Cat.prototype = new Animal();

var add = function(a,b){
  if(typeof a !== 'number' || typeof b !== number)
    throw {name: 'typeError', message: 'input is not a number '};

    return a + b;
};
var tryIt = function(){
    try{
        add('six');
    }
    catch(e){
        console.log(e.name, e.message);
    }
};

tryIt();

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
    return this;
}

Cat.method('hunt', function(){console.log('all cats drink milk and hunt mouse')});

var cat1 = new Cat();
cat1.hunt();