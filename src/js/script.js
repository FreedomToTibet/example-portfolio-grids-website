document.addEventListener('DOMContentLoaded', () => {
  const btnHamburger = document.querySelector('.hamburger'),
    menuHamburger = document.querySelector('.menu'),
    btnClose = document.querySelector('.menu__close'),
    menuOverlay = document.querySelector('.menu__overlay');

	const skillsValue = document.querySelectorAll('.skills__ratings-counter'),
				skillsLine = document.querySelectorAll('.skills__ratings-line span');

	const menuLinks = document.querySelector('.menu__list');

	// Menu Hamburger

  btnHamburger.addEventListener('click', () => {
    menuHamburger.classList.add('active');
  });

  btnClose.addEventListener('click', () => {
    menuHamburger.classList.remove('active');
  });

  menuOverlay.addEventListener('click', () => {
    menuHamburger.classList.remove('active');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') menuHamburger.classList.remove('active');
  });

	menuLinks.addEventListener('click', (e) => {
		e.preventDefault();
	
		if (e.target.classList.contains('menu__point')) {
			const id = e.target.getAttribute('href');
			document.querySelector(id).scrollIntoView({behavior: 'smooth'});
			menuHamburger.classList.remove('active');
		}
	});

	// Skills line values

	skillsValue.forEach((item, index) => {
		skillsLine[index].style.width = item.innerHTML;
	});

	// Mailer

	const contactForm = document.querySelector('.contacts__form');

	contactForm.addEventListener("submit", (event) => {
		event.preventDefault();

		var request = new XMLHttpRequest();
		var url = "/mailer/smart.php";
		request.open("POST", url, true);

		request.setRequestHeader("Content-Type", "application/json");
		request.onreadystatechange = function () {
			if (request.readyState === 4 && request.status === 200) {
					const jsonData = JSON.parse(request.response);
					console.log(jsonData);
			}
		};
                
		var name =  document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var message = document.querySelector("#text").value;
                
    var data = JSON.stringify({"name": name, "email": email, "message": message});
     
    request.send(data);

		document.querySelector("#name").value = '';
    document.querySelector("#email").value = '';
    document.querySelector("#text").value = '';
    document.querySelector("#policy").checked = false;

	});
});
