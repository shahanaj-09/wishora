/* =====================================================
   WISHORA — MAIN JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       MOBILE MENU
    ================================================= */

    const mobileMenu = document.querySelector(".mobile-menu");
    const navigation = document.querySelector(".navigation");

    if (mobileMenu && navigation) {

        mobileMenu.addEventListener("click", () => {

            navigation.classList.toggle("mobile-open");

            mobileMenu.innerHTML =
                navigation.classList.contains("mobile-open")
                    ? '<i class="fa-solid fa-xmark"></i>'
                    : '<i class="fa-solid fa-bars"></i>';

        });

    }


    /* =================================================
       HEADER SCROLL EFFECT
    ================================================= */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const navLinks = document.querySelectorAll(".navigation a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item =>
                item.classList.remove("active")
            );

            link.classList.add("active");

        });

    });


    /* =================================================
       WISHLIST
    ================================================= */

    let wishlistCount = 0;

    const wishlistButtons =
        document.querySelectorAll(".wishlist");

    const wishlistCounter =
        document.querySelector(".wishlist .counter");

    wishlistButtons.forEach(button => {

        button.addEventListener("click", () => {

            const icon = button.querySelector("i");

            const active =
                button.classList.toggle("liked");

            if (active) {

                wishlistCount++;

                if (icon) {
                    icon.classList.remove("fa-regular");
                    icon.classList.add("fa-solid");
                }

            } else {

                wishlistCount--;

                if (icon) {
                    icon.classList.remove("fa-solid");
                    icon.classList.add("fa-regular");
                }

            }

            if (wishlistCounter) {
                wishlistCounter.textContent =
                    wishlistCount;
            }

        });

    });


    /* =================================================
       ADD TO BAG
    ================================================= */

    let cartCount = 0;

    const cartCounter =
        document.querySelector(".cart-counter");

    const addButtons =
        document.querySelectorAll(".add-to-bag");

    addButtons.forEach(button => {

        button.addEventListener("click", () => {

            cartCount++;

            if (cartCounter) {
                cartCounter.textContent = cartCount;
            }

            const originalText =
                button.innerHTML;

            button.innerHTML =
                '<i class="fa-solid fa-check"></i> Added';

            button.classList.add("added");

            setTimeout(() => {

                button.innerHTML =
                    originalText;

                button.classList.remove("added");

            }, 1500);

        });

    });


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements =
        document.querySelectorAll(
            ".occasion-card, .product-card, .why-card, .story-content, .story-visual"
        );

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach(element => {

        element.classList.add("reveal-element");

        revealObserver.observe(element);

    });


    /* =================================================
       GIFT FINDER
    ================================================= */

    const giftFinderButtons =
        document.querySelectorAll(
            ".gift-finder-btn, .gold-button"
        );

    giftFinderButtons.forEach(button => {

        button.addEventListener("click", () => {

            window.location.href =
                "pages/gift-finder.html";

        });

    });


    /* =================================================
       OCCASION CARDS
    ================================================= */

    const occasionCards =
        document.querySelectorAll(".occasion-card");

    occasionCards.forEach(card => {

        card.addEventListener("click", () => {

            const occasion =
                card.dataset.occasion;

            if (occasion) {

                window.location.href =
                    `pages/products.html?occasion=${encodeURIComponent(occasion)}`;

            }

        });

    });


    /* =================================================
       NEWSLETTER
    ================================================= */

    const newsletterForm =
        document.querySelector(".newsletter-form");

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const input =
                    newsletterForm.querySelector("input");

                const button =
                    newsletterForm.querySelector("button");

                if (!input || !input.value.trim()) {

                    input.focus();

                    return;

                }

                const oldText =
                    button.innerHTML;

                button.innerHTML =
                    '<i class="fa-solid fa-check"></i> Subscribed';

                input.value = "";

                setTimeout(() => {

                    button.innerHTML =
                        oldText;

                }, 2500);

            }
        );

    }


    /* =================================================
       SMOOTH INTERNAL LINKS
    ================================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function (event) {

                const targetId =
                    this.getAttribute("href");

                if (targetId === "#") return;

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });


    /* =================================================
       CURRENT YEAR
    ================================================= */

    const year =
        document.querySelector(".current-year");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    console.log(
        "✨ Wishora is ready!"
    );

});