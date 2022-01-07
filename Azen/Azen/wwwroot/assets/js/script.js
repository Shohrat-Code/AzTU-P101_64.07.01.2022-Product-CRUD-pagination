$(document).ready(function () {

    $("#itemCount").change(function () {

        let itemCount = Number($(this).val().split('-')[0]);
        let pageCount = Number($(this).val().split('-')[1]);
        let page = Number($(this).val().split('-')[2]);

        let pageItemCount = $(".pageItemCount");
        console.log(pageItemCount[0]);
        for (var i = 1; i <= pageItemCount.length; i++) {
            if (i == 1) {
                pageItemCount[i].href = "/shop?page=" + (page - 1) + "&itemCount=" + itemCount;
            } else if (i == pageItemCount.length) {
                pageItemCount[i].href = "/shop?page=" + (page + 1) + "&itemCount=" + itemCount;
            } else {
                pageItemCount[i].href = "/shop?page=" + (i - 1) + "&itemCount=" + itemCount;
            }

            //if (i == 1) {
            //    pageItemCount[i].setAttribute("href", "/shop?page=" + (page - 1) + "&itemCount=" + itemCount);
            //} else if (i == pageItemCount.length) {
            //    pageItemCount[i].setAttribute("href", "/shop?page=" + (page + 1) + "&itemCount=" + itemCount);
            //} else {
            //    pageItemCount[i].setAttribute("href", "/shop?page=" + (i - 1) + "&itemCount=" + itemCount);
            //}
        }
    });


});