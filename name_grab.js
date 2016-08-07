// const library = require('./library.json');

// const fakeIt = {
//   firstName(req){
//     const size = library.firstName[req].length,
//       random = Math.floor(Math.random() * size);
//       return library.firstName[req][random];
//   },
//   lastName(req){
//     const size = library.lastName[req].length,
//       random = Math.floor(Math.random() * size);
//       return library.lastName[req][random];
//   },
//   fullName(fn, ln){
//     return fakeIt.firstName(fn) + " " + fakeIt.lastName(ln);
//   },
//   special: {
//     firstName(req){
//       const size = library.special.firstName[req].length,
//         random = Math.floor(Math.random() * size);
//         return library.special.firstName[req][random];
//     },
//     lastName(req){
//       const size = library.special.lastName[req].length,
//         random = Math.floor(Math.random() * size);
//         return library.special.lastName[req][random];
//     },
//     fullName(fn, ln){
//       return fakeIt.special.firstName(fn) + " " + fakeIt.special.lastName(ln);
//     },
//   }
// }
// console.log(fakeIt.special.fullName(6, 5))
