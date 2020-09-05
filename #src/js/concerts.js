window.onload = function () {
	document.body.classList.add('loaded');
}

//сортировка концертов

let hides = "all";
$('.concert__btn-list button').click(function () {
	let include = $(this).attr("id");
	$("." + hides).slideUp();
	setTimeout(function () {
		$("." + include).slideDown()
	}, 500)
	hides = include;
});

/* CLICK BUTTON PORTFOLIO */
$(".concert__btn-list button").on("click", function () {
	$(".concert__btn-list").find(".active").removeClass("active");
	$(this).addClass("active");
});