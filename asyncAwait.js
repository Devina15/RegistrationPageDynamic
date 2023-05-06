console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie=async()=> {
    const promiseWifeBringsTicks = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
        },3000);
    });
    
    const getPopcorn = new Promise((resolve, reject)=>resolve('popcorn '));

    const getCandy = new Promise((resolve,reject)=>resolve('candy '));
    
    const getColdDrinks = new Promise((resolve,reject)=>resolve('Cold Drinks'));

    let ticket = await promiseWifeBringsTicks;
    
    let [popcorn, candy, drink] = await Promise.all([getPopcorn,getCandy,getColdDrinks])
    
    console.log(popcorn+candy+drink)
    return ticket;
};
preMovie().then((m)=>console.log('person3: shows '+m));
console.log('person4: shows ticket');
console.log('person5: shows ticket');
