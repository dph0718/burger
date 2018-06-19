$(".regurgitate").on("click", function (event) {
    let id = $(this).data('id');
    let isDevoured = {
        devoured: false
    };
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevoured,
    }).then(
        function () {
            window.location.reload(true);
        })
});

$(".eatit").on("click", function (event) {
    let id = $(this).data('id');
    let isDevoured = {
        devoured: true
    };
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevoured,
    }).then(
        function () {
            window.location.reload(true);
        })
});

$("#submit-burg").on("click", function (event) {
    event.preventDefault();
    let id = $("#burger-input").val();

    $.ajax("/api/burgers", {
        type: "POST",
        data: {
            burger_name: id
        },
    }).then(
        function (res) {
            console.log(res);
            window.location.reload(true);
        })
});

$(".deleteIt").on("click", function (event) {
    let id = $(this).data('id');
    console.log("trying to delete:", id)
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(
        function () {
            console.log('deleteda burger');
            window.location.reload(true);
        })
});

