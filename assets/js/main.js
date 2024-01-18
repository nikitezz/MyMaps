
(function() {
// Prealoder

	window.onload = function () {
		window.setTimeout(fadeout, 500);
	}

	function fadeout() {
		document.querySelector('.preloader').style.opacity = '0';
		document.querySelector('.preloader').style.display = 'none';
	}

    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };



    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');
    
    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });


    // close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");    
    var navbarCollapse = document.querySelector(".navbar-collapse");

    document.querySelectorAll(".page-scroll").forEach(e =>
        e.addEventListener("click", () => {
            navbarToggler.classList.remove("active");
            navbarCollapse.classList.remove('show')
        })
    );
    navbarToggler.addEventListener('click', function() {
        navbarToggler.classList.toggle("active");
    }) 


	// WOW active
    new WOW().init();

    
    //counter up 
    var cu = new counterUp({
        start: 0,
        duration: 2000,
        intvalues: true,
        interval: 100,
        append: " ",
    });
    cu.start();

    // slider
	var slider = new tns({
		container: '.testimonial-active',
		slideBy: 'page',
		autoplay: false,
		mouseDrag: true,
        gutter: 0,
        items: 1,
		nav: false,
        controls: true,
        controlsText: [
            '<i class="lni lni-chevron-left prev"></i>',
            '<i class="lni lni-chevron-right next"></i>'
        ],
        responsive: {
            1200: {
                items: 3,
            },
            992: {
                items: 2,
            },
            0: {
                items: 1,
            }

        }
    });

})();