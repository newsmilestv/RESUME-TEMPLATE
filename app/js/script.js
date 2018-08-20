//FUNCTION WIDTH
(function () {
  let click = document.getElementById('see-more'),
      div = document.getElementById('dropdown');

  click.addEventListener ('click', function () {
    div.style.height = (div.style.height == '1776px') ? '0' : '1776px';
    click.innerHTML = (click.innerHTML == 'skip') ? 'see more' : 'skip';
  });
})();
