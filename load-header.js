(function () {
    var placeholder = document.getElementById('site-header-placeholder');
    if (!placeholder) return;
    var page = placeholder.getAttribute('data-current-page') || '';
    fetch('header.html')
        .then(function (r) { return r.text(); })
        .then(function (html) {
            placeholder.outerHTML = html;
            var links = document.querySelectorAll('.site-nav .nav-link[data-page="' + page + '"]');
            links.forEach(function (a) { a.classList.add('active'); });
        })
        .catch(function () { placeholder.style.display = 'none'; });
})();
