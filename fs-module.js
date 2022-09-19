const {readFileSync,writeFileSync, readFile,writeFile} = require('fs')

// ==================== Sync ==============================

// const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt','utf8')

// console.log(first)
// console.log(second)

// writeFileSync('./content/third.txt',`This is the new file just created and it contains ${first},${second}`,{flag:'a'})

//===================== Async ==============================

// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     const first = result
//     readFile('./content/second.txt','utf8',(err,result)=>{
//         if(err){
//             console.log(err);
//             return
//         }
//         const second = result
//         writeFile('./content/resultasync.txt',`Here is the new file created async which is resultasync and it include ${first},${second}`,(err,result)=>{
//             if(err){
//                 console.log(err)
//                 retrun
//             }
//             console.log(result)
//         })
//     })
    
// })


