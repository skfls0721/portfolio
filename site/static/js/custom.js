// 모바일 메뉴를 닫은 뒤 섹션으로 이동해, 메뉴 높이만큼 앵커 위치가 밀리지 않게 한다.
var navigationPanel = document.querySelector(".navbar-collapse");
var navigationToggler = document.querySelector(".navbar-toggler");

if (navigationPanel && navigationToggler) {
  navigationPanel.addEventListener("shown.bs.collapse", function () {
    navigationToggler.setAttribute("aria-label", "메뉴 닫기");
  });
  navigationPanel.addEventListener("hidden.bs.collapse", function () {
    navigationToggler.setAttribute("aria-label", "메뉴 열기");
  });
}

document.addEventListener("click", function (event) {
  var link = event.target.closest(".navbar-collapse .nav-link");
  var panel = document.querySelector(".navbar-collapse.show");

  if (!link || !panel) return;

  var destination;
  try {
    destination = new URL(link.href, window.location.href);
  } catch (_) {
    return;
  }

  // 홈의 섹션 앵커만 처리하고, 다른 페이지 링크는 기본 동작을 유지한다.
  if (destination.origin !== window.location.origin ||
      destination.pathname !== window.location.pathname ||
      !destination.hash) return;

  var target = document.getElementById(decodeURIComponent(destination.hash.slice(1)));
  if (!target) return;

  event.preventDefault();

  var navigateToSection = function () {
    if (window.location.hash !== destination.hash) {
      window.history.pushState(null, "", destination.hash);
    }

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  // Bootstrap의 접힘 애니메이션이 끝난 뒤 이동해야 섹션 위치가 바뀌지 않는다.
  panel.addEventListener("hidden.bs.collapse", navigateToSection, { once: true });

  if (window.bootstrap && window.bootstrap.Collapse) {
    window.bootstrap.Collapse.getOrCreateInstance(panel, { toggle: false }).hide();
  } else {
    panel.removeEventListener("hidden.bs.collapse", navigateToSection);
    panel.classList.remove("show");
    navigateToSection();
  }
});
