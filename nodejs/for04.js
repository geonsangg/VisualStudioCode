const scores=[89,85,79,90,60,88,70];
let sum=0;
scores.forEach(function(scrore) {
    sum += scrore;
});
console.log(`점수의 총합 = ${sum}`);