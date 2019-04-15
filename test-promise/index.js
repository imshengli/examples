/**
 * @function 实现一个 Promise
 * @author zhangshengli@imshengli.com
 * @dete 2019-04-15 09:15:10
 */

// const SLPromise = {
//   then: (onFulfilled, onRejected) => {

//   },
// };

new SLPromise().then((value) => {
  console.log('fulfilled: %s', value);
}, (err) => {
  console.log('rejected: %o', err);
});
