/**
 * 
 */
let a = 1;
console.log(a);

    {
        let a = 10;    
        console.log(a);
        
        {
            const a = 20;
            console.log(a);    
            
            {
                const b = 30
                console.log(a, b);    
            }
        }

        console.log(a);
    }
console.log(a);

function test1(){
    const a = 1;
    function test2 (){
        const b =2;
    }
}