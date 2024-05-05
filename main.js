function Message(){
    if (confirm("Вы точно хотите покинуть эту страницу?")) {
        return true;
    } else {
        return false;
    }
}
(function(d, w, c) {
    w.ChatraID = 'e8WhA4NpoHWDBNtYG';
    var s = d.createElement('script');
    w[c] = w[c] || function() {
        (w[c].q = w[c].q || []).push(arguments);
    };
    s.async = true;
    s.src = 'https://call.chatra.io/chatra.js';
    if (d.head) d.head.appendChild(s);
})(document, window, 'Chatra');