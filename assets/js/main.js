/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);




// const navLinks = document.querySelectorAll(".nav-link");

// navLinks.forEach(link => {
//     link.addEventListener("click", function() {

//         navLinks.forEach(item => {
//             item.classList.remove("active");
//         });

//         this.classList.add("active");
//     });
// });




const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});



/*Hidden Resume */

const viewBtn = document.getElementById("viewResumeBtn");
const resumeContainer = document.getElementById("resumeContainer");

viewBtn.addEventListener("click", function(){

    if(resumeContainer.style.display === "block"){

        resumeContainer.style.display = "none";
        viewBtn.innerHTML =
        '<i class="fas fa-eye"></i> View Resume';

    }else{

        resumeContainer.style.display = "block";
        viewBtn.innerHTML =
        '<i class="fas fa-eye-slash"></i> Hide Resume';

    }

});
