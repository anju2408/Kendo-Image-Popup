function LoadSavedComments(picture) {
    $(".k-animation-container").remove();
    picture.parent().children().not(".image").remove();
    picture.parent().off();

    let points = picture.data("points");
    if (points === undefined) {
        points = [];
        picture.attr("data-points", JSON.stringify(points));
    }

    const imageId = picture[0].id;
    // console.log(imageId);

    for (i = 0; i < points.length; i++) {
        const point = points[i];
        const left = point.left - 15;
        const top = point.top - 15;
        const txt = point.data;

        picture
            .parent()
            .append(
                '<span class="comment-badge" id="comment-badge-' +
                imageId +
                "-" +
                i +
                '" style="top:' +
                top +
                "px;left:" +
                left +
                'px" comment="' +
                txt +
                '" data-index=' +
                i +
                ">" +
                (i + 1) +
                "</span>"
            );

        $("#comment-badge-" + imageId + "-" + i).kendoBadge({
            themeColor: "warning",
            shape: "pill",
            size: "large",
        });

        $("#comment-badge-" + imageId + "-" + i).kendoTooltip({
            content: txt,
            width: 120,
            position: "top",
            animation: {
                open: {
                    effects: "zoom",
                    duration: 150,
                },
            },
        });

        $("#dvPrintComment").html("<table></table>");
        points.map((point, index) => {
            $("#dvPrintComment").append(
                "<tr><td id='index'>" +
                (index + 1) +
                "</td><td id='data'>" +
                point.data +
                "</td></tr>"
            );
        });
    }
}

function onShow() {
    $("#editDeleteModal").show();
}

function ZoomIn(picture) {
    const currWidth = picture.clientWidth;
    if (currWidth == 700) return false;
    else {
        picture.style.width = currWidth + 100 + "px";
    }
}

function ZoomOut(picture) {
    const currWidth = picture.clientWidth;
    if (currWidth == 100) return false;
    else {
        picture.style.width = currWidth - 100 + "px";
    }
    console.log("ZoomOut");
}

function openFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

function ShowTag() {
    $("#commentTags").show();
}

const tags = [];

const images = ["1.jpg", "2.jpg", "3.jpg"];

function LoadImages() {
    images.map((image, index) => {
        const element =
            '<div class="container image-container" data-role="page"><div class="row image-row"><div class="col data-tagging-container"><img id="image_' +
            index +
            '" src="' +
            image +
            '" data-points="[]" class="image" /></div></div><div class="row"><div class="col"><span class="file-name"><i class="fa fa-file-image-o" aria-hidden="true"></i>image.name."' +
            index +
            '".jpg</span></div></div></div>';
        $("#scrollView").append(element);

    });
}