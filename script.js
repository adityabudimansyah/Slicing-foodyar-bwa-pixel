window.addEventListener('load', function () {
  // Animate on Scroll
  AOS.init({
    once: true,
  });
});

//sticky header
window.addEventListener('scroll', function () {
  if (this.pageYOffset > 60) {
    document.querySelector('.navbar').classList.add('sticky');
  } else {
    document.querySelector('.navbar').classList.remove('sticky');
  }
});

// close nav when clicking a nav item
$('.nav-link').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

// add remove active class on click
$(document).ready(function () {
  $('.nav-link').click(function () {
    $('.nav-item .nav-link.active').removeClass('active');
    $(this).addClass('active');
  });
});

// menu tabs
const menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', function (e) {
  if (e.target.classList.contains('menu-tab-items') && !e.target.classList.contains('active')) {
    const target = e.target.getAttribute('data-target');
    menuTabs.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    const menuSection = document.querySelector('.menu-section');
    menuSection.querySelector('.menu-tab-content.active').classList.remove('active');
    menuSection.querySelector(target).classList.add('active');
  }
});

// hide navbar on scroll down, show navbar in scroll up
{
  const nav = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add('navbar-hidden');
    } else {
      nav.classList.remove('navbar-hidden');
    }
    lastScrollY = window.scrollY;
  });
}
