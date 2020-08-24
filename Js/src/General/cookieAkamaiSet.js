(function () {
    var gotPcf = false;
    var cookiesToSet = ['akaas_dell_com_product_enterprisepd', 'ak_bmsc', 'akavpau_maintenance_vp'];
    var cookieValues = [];
    var url = window.location.href;
    var getCookie = function (cookieName) {
        var cookies = document.cookie.split(';');
        for (var item of cookies) {
            if (item.indexOf(cookieName) > -1) {
                var values = item.split(cookieName + '=');
                return values[1];
            }
        }
    };
    var temp = function (i) {
        return $.get(url).done((data, status, response) => {
            if (gotPcf) {
                response.abort();
                return;
            }
            var header = response.getResponseHeader('debug-split');
            console.log(i, header);
            if (!header || header.indexOf('expB') === -1) {
                gotPcf = true;
                for (item of cookiesToSet)
                    cookieValues.push(item + '=' + getCookie(item) + ';path=/');
            }
            return header;
        }
        )
    };

    var resetAkamaiCookies = function () {
        for (item of cookiesToSet) {
            document.cookie = item + '=' + '; expires=' + new Date(2000, 1).toUTCString() + ';path=/';
        }
    };

    var promises = [];
    resetAkamaiCookies();
    for (var i = 0; i < 100; i++) {
        promises.push(temp(i));
    }

    //reset akamai cookies
    Promise.allSettled(promises).then(() => {
        for (var cookieValue of cookieValues) {
            document.cookie = cookieValue;
        }
        window.location.reload();
    });
})();