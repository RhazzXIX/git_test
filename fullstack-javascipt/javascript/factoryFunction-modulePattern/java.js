function myObject(data) {
    const obj = Object.create(myObject.prototype);
    obj.data = data;

}

myObject.prototype = {
    getData : function () {
        return this.data;
    },
}

const o = myObject("data");

function genericFactory(Ctr) {
    const obj = Object.create(Ctr.prototype);
    const args = Array.prototype.slice.call(arguments, 1);
    Ctr.apply(obj, args);
    return obj;
}