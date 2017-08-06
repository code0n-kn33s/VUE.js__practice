var pre = document.getElementsByTagName("pre");

for (var i = 0; i < pre.length; i++) {
  if (pre[i].textContent.split("|")) {
    pre[i].innerHTML = pre[i].textContent.split('|')[0].bold() + ':' + pre[i].textContent.split('|')[1];
  }
};