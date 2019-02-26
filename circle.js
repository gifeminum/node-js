var PI = Math.PI;
exports.area = function(r) //export เพราะเรียกที่ไฟล์อื่น
{
    return PI*r*r;
};

exports.add = function(a,b)
{
    return a+b;
};
exports.pi = PI;