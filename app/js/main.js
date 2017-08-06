/* ----------- отобразить код в html ----------- */
/* (function () {
   var els = document.body.querySelectorAll('.pattern-list span  ~ *');
   els = Array.prototype.slice.call(els);

   els.forEach(function (item) {
     var code = document.createElement('code');
     code.textContent = item.outerHTML;

     item.parentNode.insertBefore(code, item);
   });
 })();*/