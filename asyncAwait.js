console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie=async()=> {
    const promiseWifeBringsTicks = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
        },3000);
    });
    
    const getPopcorn = new Promise((resolve, reject)=>resolve('popcorn'));

    const getButter = new Promise((resolve,reject)=>resolve('butter'));
    
    const getColdDrinks = new Promise((resolve,reject)=>resolve('Cold Drinks'));

    let ticket = await promiseWifeBringsTicks;
    
    console.log('wife: i have '+ticket);
    console.log('husband:we should go in');
    console.log('wife:no i am hungry'); 

    let popcorn = await getPopcorn;

    console.log('husband:i got some '+popcorn);
    console.log('husband:we should go in');
    console.log('wife: i need butter for my popcorn');
    
    let butter = await getButter;

    console.log('husband: i got some '+butter)
    console.log('husband:we should go in');
    console.log('wife: i want something to drink')
    
    let drinks = await getColdDrinks;
    
    console.log('husband: i got you some '+drinks);
    console.log('wife :thank you darling')
    console.log('wife: lets go in, its getting late')
    
    return ticket;
};
preMovie().then((m)=>console.log('person3: shows '+m));
console.log('person4: shows ticket');
console.log('person5: shows ticket');
