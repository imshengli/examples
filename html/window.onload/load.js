var loadScript = function(url) {
  var ele = document.createElement('script');
  ele.src = url;
  document.getElementById('root').appendChild(ele);
  ele.onload = function() {
    console.log('ele load time: ' + new Date().getTime());
  };
};
console.log('load.js');
