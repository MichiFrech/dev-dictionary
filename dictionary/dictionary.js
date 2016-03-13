var page = 1;
var dictionary = [];

var getDictionary = function () {
    $.ajax({
        url: 'https://api.stackexchange.com/2.2/tags?page=' + page + '&pagesize=100&order=desc&sort=popular&site=stackoverflow&key=LUtq9xxjnksDU1D4ZDAjsg((',
        success: function (data) {
            if (data.items.length > 0) {
                $.each(data.items, function (index, item) {
                    dictionary.push(item.name);
                });
                page++;
                getDictionary();
            } else {
                $('#dictionary').text(JSON.stringify(dictionary));

            }
        },
        fail: function() {
            $('#dictionary').text(JSON.stringify(dictionary));
        }
    });
};

getDictionary();