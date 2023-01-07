// const circle = (radius) => {
//   const proto = {
//     type: "Circle",
//     //code
//   };
//   return Object.assign(Object.create(proto), { radius });
// };
// const square = (length) => {
//   const proto = {
//     type: 'Square',
//     //code
//   }
//   return Object.assign(Object.create(proto), {length})
// }
// const areaCalculator = (s) => {
//   const proto = {
//     sum() {
//       this.shapes.forEach((object) => {
//         console.log(object.radius);
//       });
//     },
//     output() {
//       return `
//       <h1>
//         Sum of the areas of provided shapes:
//         ${this.sum()}
//       </h1>`;
//     },
//   };
//   return Object.assign(Object.create(proto), { shapes: s });
// };

// const shapes = [
//   circle(2),
//   square(5),
//   square(6)
// ]

// const areas = areaCalculator(shapes)
// console.log(areas.output());

// const shapeInterface = (state) => ({
//   type: "shapeInterface",
//   area: () => state.area(state),
// });

// const square = (length) => {
//   const proto = {
//     length,
//     type: "Square",
//     area: (args) => {
//       console.log(args);
//      return Math.pow(args.length, 2)
//     } ,
    
//   };
  // console.log(proto);
  // const basics = shapeInterface(proto);
  // console.log(basics);
  // const composite = Object.assign({}, basics);
  // console.log(composite);
//   return Object.assign(Object.create(basics), { length });
// };

// const s = square(5);

// console.log('OBJ\n', s)
// console.log('PROTO\n', Object.getPrototypeOf(s))
// s.area();

// const volumeCalculator2 = (s) => {
//   const proto = {
//     type: 'volumeCalculator',
//   };
//   const areaCalProto = Object.assign(Object.create(areaCalculator()) , proto);
//    return Object.assign(Object.create(areaCalProto), {shapes: s})
// }

// const volumeCalculator = (s) => {
//   const proto = {
//     type: 'volumeCalculator'
//   }
//   const areaCalProto = Object.getPrototypeOf(areaCalculator())
//    const inherit = Object.assign({}, areaCalProto, proto)
//   console.log(inherit);
//   return Object.assign(Object.create(inherit), {shapes: s})
// }

const oderModule = (function() {
  const module = {};
  const deliveries = myApp.deliveryModule;

  module.createOrder = function(orderData) {
    let orderResult;

    orderResult = undefined;
    orderResult.estimatedDeliveryTime = deliveries.getDeliveryTime(orderData);

    return orderResult;
  };

  return module;
})