
let endDate= new Date(2024,0,22)

let startDate = new Date(2023,11,24)
let time = endDate.getTime()-startDate.getTime()
let duration = time / (1000 * 60 * 60 * 24); 
console.log(`Completed javascsript full course start Date is: ${startDate.toDateString()} AND  end Date is: ${endDate.toDateString()} duration to complet this course ${duration} Days`)
