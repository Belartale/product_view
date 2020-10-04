let svgArrow = `<svg 
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
width="1.6em" height="2.7em">
<image x="0em" y="0em" width="1.6em" height="2.7em" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAbCAMAAABC6v+QAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAASFBMVEUAAABWUVNWUlRWUlRWUlRWUlRWUlNWUlNWUlNWUlNWUVNWUlNWUlRWUlNWUlRWUVNWUlRWUlRWUlRWUlNWUVNWUlRWUlP///9k1xXHAAAAFHRSTlMAEapmEcx3ZhHMZu7umZmZdyIz3cGaRi4AAAABYktHRBcL1piPAAAAB3RJTUUH5AkUFCIe1fghYgAAAHFJREFUGNN9kEcSwDAIA0lxepyG+P9T49wQmTE3LaKMRJq2E199UhAZYMDowJRUzUaagQbPjFIdewD7kb9HicwwQ51MqTyIJewJU2uxbA7syo5s/MuOus7hQulTblkN9f2c6hH653fPJ3ptrEXu5/TyBYGsCcgH9xPXAAAAAElFTkSuQmCC" />
</svg>`;

$(document).ready(() => {
  $(".jq-slider").slick({
    mobileFirst: true,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    nextArrow: `<button type='button' class='control control--padding_indents_md control--hover_arrow control--cursor row--absolute_center_right'><div class='control__body'>${svgArrow}</div></button>`,
    prevArrow: `<button type='button' class='control control--padding_indents_md control--hover_arrow control--cursor row--absolute_center_left row--z_1'><div class='control__body img--deg_180'>${svgArrow}</div></button>`,
  });
});
