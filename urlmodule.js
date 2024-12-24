const myurl = new URL('https://example.org:8080');
myurl.pathname = '/a/b/c';
myurl.search = '?d=e';
myurl.hash = '#fgh';

console.log(myurl);
console.log(myurl.href);

//It provide all the ports and elements realted to networking.