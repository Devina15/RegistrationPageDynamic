console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie=async()=> {
    const promiseWifeBringsTicks = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('ticket');
        },3000);
    });
    
    let ticket
    try{
        ticket = await promiseWifeBringsTicks;
    } catch(e){
        ticket = 'sad face' 
    }
    
    return ticket;
};
preMovie().then((m)=>console.log('person3: shows '+m));
console.log('person4: shows ticket');
console.log('person5: shows ticket');
