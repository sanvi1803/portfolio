const navMenu = document.querySelector('.nav__menu');
        const navToggle = document.querySelector('.nav__toggle');
        const navClose = document.querySelector('.nav__close');

        // Add event listener for the toggle button
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
        });

        // Add event listener for the close button
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });