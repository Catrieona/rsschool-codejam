function sumOfOther (arr) {
    var rez=[];
    for (let i=0; i<arr.length; i++) {
            var a=arr.reduce(function (a,b) {
            return (a+=b)
        });
        a=a-arr[i];
        rez.push(a);
    }
    return rez;
 }