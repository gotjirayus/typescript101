var num;
(function (num) {
    num[num["a"] = 1] = "a";
    num[num["b"] = 2] = "b";
    num[num["c"] = 3] = "c";
})(num || (num = {}));
var data = num.a;
console.log(data);
