
function myEach(array,callback)
{
    for (let i = 0; i <= array.length;i++)
    {
        console.log(callback(array[i]))
    }
}

function myMap(array,callback)
{
    let newArr=[]
    for (let i = 0; i < array.length; i++) 
    {
        let item = callback(array[i])
        newArr.push(item)
    }
    return newArr
}

function myFilter(array,callback)
{
    let newArr = []
    for (let i = 0; i < array.length; i++) 
    {
        if(callback(array[i]))
        newArr.push(array[i])
    }
    return newArr
}

function mySome(array,callback)
{
    for(let i = 0; i < array.length; i++)
        if(callback(array[i]))
            return true;
    return false;
}

function myEvery(array,callback)
{
    for(let i = 0; i < array.length; i++)
        if(!callback(array[i]))
            return false;
    return true;
}

function myReduce(array,callback)
{
    let total = 0;
    for(let i = 0; i < array.length; i++)
        total += callback(array[i]);
    return total;
}

function myIncludes(array,target)
{
    for(let i = 0; i < array.length; i++)
      {
          if (array[i] === target)
            {
                return true
            }
      }
      return false
}

function myIndexOf(array,target)
{
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] === target)
        {
            return i
        }
    }
    return "Doesn't exist"
}


function myPush(array,val)
{
    array[array.length] = val
    return array.length
}

function myUnshift(array,target)
{
    for(let i = array.length; i > 0; i--)
    {
        if(array[i] === target)
        {
            return i
        }
    }
    return -1
}

Object.prototype.grabKeys = function()
{
    let details = []
    for (item in obj)
    details.push(item)
    return details
}

Object.prototype.grabValues = function()
{
    let values = []
    for (item in obj)
    if(typeof item !='Function')
    {
        values.push(obj[item])
    }
   
    return values
}

function incre(val)
{
    return val
}

function odd(val)
{
    return val % 2 == 1
}

function even(val)
{
    return val % 2 == 0
}

let arr = [1,2,3,4,5,6,7,8,9,10]
obj = { a: 1, b: 2, c: 3, d:4, e:5};

console.log(myEach(arr, incre));
console.log(myMap(arr,incre));
console.log(myFilter(arr,even));
console.log(mySome(arr,odd));
console.log(myEvery(arr,odd));
console.log(myReduce(arr,incre));
console.log(myIncludes(arr,9));
console.log(myIndexOf(arr,12));
console.log(myPush(arr,12));
console.log(myUnshift(arr, 5));
console.log(obj.grabKeys(obj));
console.log(obj.grabValues(obj));
