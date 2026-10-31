// 모바일 메뉴에서 항목을 누르면 메뉴를 닫는다
document.addEventListener("click", function (e) {
  var link = e.target.closest(".navbar-collapse .nav-link, .navbar-collapse .navbar-brand");
  if (!link) return;
  var panel = document.querySelector(".navbar-collapse.show");
  var toggler = document.querySelector(".navbar-toggler");
  if (panel && toggler) toggler.click();
});
