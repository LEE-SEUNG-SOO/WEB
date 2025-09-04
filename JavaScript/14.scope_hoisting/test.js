let num = [1];
console.log(num);
{
    let num =[2];
    console.log(num);
    {
        let num2 = [3];
        console.log(num2);
        num = [5];
        console.log(num);
    }
    console.log(num)
}
console.log(num)