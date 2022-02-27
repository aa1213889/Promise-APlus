let promise = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10)
    num >= 5 ? resolve(`success! num:${num} >= 5`) : reject(`error! num:${num} < 5`)
})

promise.then((value) => {
    console.log(value)
}).catch((reason) => {
    console.log(reason)
})