function bindThis(f, oTarget) {
    return function(...arg) {
        // return f.apply(oTarget, Array.prototype.slice.call(arguments,0))
        // return f.apply(oTarget, arg)
        // return oTarget::f(...arg)
        return f.call(oTarget, ...arg)
    }
}
var bind = bindThis(function(a, b) {return this.test + a + b}, {test: 1})(2, 3)
console.log(bind)