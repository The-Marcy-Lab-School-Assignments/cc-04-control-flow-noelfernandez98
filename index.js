//1
// function fizzBuzz(){
//     for(let i = 1; i <= 100; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//         console.log("Fizzbuzz")
//         }else if(i % 3 === 0){
//             console.log("fizz")
//         }else if(i % 5 === 0){
//             console.log("buzz")
//         }else{
//             console.log(i)
//         }
        
//     }
  
// }
// fizzBuzz()

//2
//function fizzBuzz(number){
let answer = []
for(let i = 1; i <= number; i++){
    if(i % 3 === 0 && i % 3 === 0){
        answer.push("fizzbuzz")
            }else if(i % 5 === 0){
                answer.push('buzz')
            }else if(i % 3 === 0){
                answer.push("fizz")
            }else{
                answer.push(`${i}`)
            }
        }
    
    return answer 
    }

console.log(fizzBuzz(19))
  
//}


