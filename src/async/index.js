const fnasync = () => {
    return new Promise((resolve,reject) =>{
        (true)
            ? setTimeout(()=> resolve('Async !!'),2000)
            : reject(new Error('Error'));
    });
}

const anotherF = async () => {
    const somef = await fnasync();
    console.log(somef);
    console.log('Hello');
}

console.log('Before');
anotherF();
console.log('After');