"use strict"

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './modules/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

const swiper = new Swiper('.content_swiper', {

    spaceBetween: 80,

    speed: 1000,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 2500,

        disableOnInteraction: false,
    },
});

const swiper_2 = new Swiper('.swipers', {

    spaceBetween: 40,

    speed: 800,

    slidesPerView: 3,

    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },

    // autoplay: {
    //     delay: 2500,

    //     disableOnInteraction: false,
    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        785: {
            slidesPerView: 2,
        },
        1150: {
            slidesPerView: 3,
        },
    },
});

const swiper_3 = new Swiper('.product_swiper', {

    spaceBetween: 50,

    speed: 800,

    slidesPerView: 3,

    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },

    // autoplay: {
    //     delay: 2500,

    //     disableOnInteraction: false,
    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        730: {
            slidesPerView: 2,
            spaceBetween: 70,
        },
        950: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 130,
        },
    },
});


// Menu Links

const menuLinks = document.querySelectorAll('.menu_item');

// if (menuLinks) {

menuLinks.forEach(menuEvent);

function menuEvent(item) {
    const menuPages = document.querySelectorAll('.menuPages');

    // if (menuPages) {
    item.addEventListener('click', function () {
        let itemId = item.getAttribute('data-menu');
        let currentPage = document.querySelector(itemId);

        if (!item.classList.contains('_active')) {
            for (let i = 0; i < menuLinks.length; i++) {
                menuLinks[i].classList.remove('_active');
                menuPages[i].classList.remove('_active');
            }

            item.classList.add('_active');
            currentPage.classList.add('_active');
            document.body.classList.add('lock');

        } else if (item.classList.contains('_active')) {
            item.classList.remove('_active');
            currentPage.classList.remove('_active');
            document.body.classList.remove('lock');
        }
    })
    // }
}
// }

const icon = document.querySelector('.menu_icon');

// limit text

var myText = document.querySelector('#my-text');
var result = document.querySelector('#result');

var limit = 150;

result.textContent = 0 + "/" + limit;

myText.addEventListener("input", function () {
    var textLength = myText.value.length;

    if (textLength > limit) {
        myText.style.borderColor = "#ff2851";
        result.textContent = "* Characters out of limit " + textLength + "/" + limit;
        result.classList.add('limit');
    } else if (textLength <= limit) {
        myText.style.borderColor = "#b2b2b2";
        result.textContent = textLength + "/" + limit;
        result.classList.remove('limit');
    }
});

// Add Review Button

const addReviewBtn = document.querySelector('.review_button');
const addReviewPage = document.querySelector('.add_review');

addReviewBtn.addEventListener('click', function (e) {
    document.body.classList.add('lock');
    addReviewBtn.classList.add('_acitve');
    addReviewPage.classList.add('_active');
});

// Close Add Review

const addReviewCross = document.querySelector('.review_cross_container');

addReviewCross.addEventListener('click', function () {
    document.body.classList.remove('lock');
    addReviewBtn.classList.remove('_acitve');
    addReviewPage.classList.remove('_active');
});

// submit form

var submitBtn = document.querySelector('.review_submit');
var myUsername = document.querySelector('#my-username');
var usernameWarning = document.querySelector('.username_warning');

var usernameLimit = 30;

submitBtn.addEventListener('click', function (e) {
    var textLength = myText.value.length;
    var usernameLength = myUsername.value.length;
    var thanks = document.querySelector('.thanks');

    if (textLength >= 3 && usernameLength >= 3 && textLength <= limit && usernameLength <= usernameLimit) {
        thanks.classList.add('show');
        setTimeout(function () {
            thanks.classList.remove('show');
        }, 3500);
        setTimeout(function () {
            addReviewBtn.classList.remove('_acitve');
            addReviewPage.classList.remove('_active');
        }, 3000);
        setTimeout(function () {
            myUsername.value = '';
            myText.value = '';
            result.textContent = 0 + "/" + limit;
        }, 3500);

        console.log('Accepted');
    }

    if (textLength < 3) {
        myText.style.borderColor = "#ff2851";
        result.textContent = "* You must write at least 3 characters " + textLength + "/" + limit;
        result.classList.add('limit');
        console.log('Rejected');
    }

    if (usernameLength < 3) {
        myUsername.style.borderColor = "#ff2851";
        usernameWarning.textContent = "* You must write at least 3 characters";
        console.log('Rejected');
    } else if (usernameLength >= 3 && usernameLength <= usernameLimit) {
        usernameWarning.textContent = null;
        myUsername.style.borderColor = "#b2b2b2";
    }

    if (usernameLength > usernameLimit) {
        myUsername.style.borderColor = "#ff2851";
        usernameWarning.textContent = "* Write less than 30 characters";
    } else if (usernameLength <= usernameLimit && usernameLength >= 3) {
        usernameWarning.textContent = null;
        myUsername.style.borderColor = "#b2b2b2";
    }

    e.preventDefault();
});

// Swiper Buttons

const swiper_button_1 = document.querySelectorAll('.swiper-button-prev');
const swiper_button_2 = document.querySelectorAll('.swiper-button-next');

if (swiper_button_1) {
    function animation(item) {
        item.addEventListener('click', function () {
            item.classList.add('animate');
            setTimeout(function () {
                item.classList.remove('animate');
            }, 500);
        });
    }

    swiper_button_1.forEach(item => animation(item));
}

if (swiper_button_2) {
    function animation(item) {
        item.addEventListener('click', function () {
            item.classList.add('animate');
            setTimeout(function () {
                item.classList.remove('animate');
            }, 600);
        });
    }

    swiper_button_2.forEach(item => animation(item));
}

// Spoiler

const items = document.querySelectorAll('.spoiler_button');

function toggleAccordion() {
    const item = this;
    const itemToggle = this.getAttribute('data-accord');
    const itemText = this.querySelector('.spoiler_button_title');
    const content = this.parentNode.querySelector('.spoiler_text');

    this.classList.add('animate');

    // setTimeout(accordTimeout(), 500);

    setTimeout(function accordTimeout() {
        // console.log('da');
        item.classList.remove('animate');
    }, 500);


    if (itemToggle == 'true') {
        this.setAttribute('data-accord', 'false');
        content.setAttribute('data-accord', 'false');
        setTimeout(function setText() {
            itemText.textContent = 'Learn more';
        }, 500);

    }
    if (itemToggle == 'false') {
        this.setAttribute('data-accord', 'true');
        content.setAttribute('data-accord', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
        setTimeout(function setText() {
            itemText.textContent = 'Hide';
        }, 500);
    } else {
        content.style.maxHeight = null;
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// Phone Input

const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if (!isNumericInput(event) && !isModifierKey(event)) {
        event.preventDefault();
    }
};

const formatToPhone = (event) => {
    if (isModifierKey(event)) { return; }

    // I am lazy and don't like to type things more than once
    const target = event.target;
    const input = event.target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
    const zip = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) { target.value = `(${zip}) ${middle} - ${last}`; }
    else if (input.length > 3) { target.value = `(${zip}) ${middle}`; }
    else if (input.length > 0) { target.value = `(${zip}`; }
};

const inputElement = document.getElementById('phoneNumber');
inputElement.addEventListener('keydown', enforceFormat);
inputElement.addEventListener('keyup', formatToPhone);

// Select

function select() {
    let selectHeader = document.querySelectorAll('.select_header');
    if (selectHeader) {
        let selectItem = document.querySelectorAll('.select_item');
        let menuValues = document.querySelectorAll('.menu_option_value');
        let menuPieces = document.querySelectorAll('.menu_option_pieces');
        let menuWeights = document.querySelectorAll('.menu_option_weight');
        let menuOptions = document.querySelector('.menu_options');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectColor)
        });

        selectItem.forEach(item => menuOrder(item))

        function selectColor() {
            let select = this.closest('.select');
            let currentText = select.querySelector('.select_current');

            for (let i = 0; i < selectItem.length; i++) {
                if (selectItem[i].innerText == currentText.innerText) {
                    selectItem[i].classList.add('color');
                } else if (selectItem[i].innerText != currentText.innerText) {
                    selectItem[i].classList.remove('color');
                }
            }
        }

        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }

        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select_current');
            currentText.innerText = text;
            select.classList.remove('is-active');
        }

        function menuOrder(item) {
            item.addEventListener('click', function (e) {
                if (this.innerText.toLowerCase() == 'cheaper first') {
                    let menuValuesArray = Array.from(menuValues);

                    menuValuesArray.sort(function (a, b) {
                        return parseFloat(a.textContent) - parseFloat(b.textContent);
                    });

                    menuOptions.classList.add('opacity');

                    menuValuesArray.forEach(function (element, index) {
                        window.setTimeout(function () {
                            element.parentElement.parentElement.parentElement.parentElement.parentElement.style.order = index + 1;
                        }, 300);
                    });

                    window.setTimeout(function () {
                        menuOptions.classList.remove('opacity');
                    }, 500);
                } else if (this.innerText.toLowerCase() == 'expensive first') {
                    let menuValuesArray = Array.from(menuValues);

                    menuValuesArray.sort(function (a, b) {
                        return parseFloat(b.textContent) - parseFloat(a.textContent);
                    });

                    menuOptions.classList.add('opacity');

                    menuValuesArray.forEach(function (element, index) {
                        window.setTimeout(function () {
                            element.parentElement.parentElement.parentElement.parentElement.parentElement.style.order = index + 1;
                        }, 300);
                    });

                    window.setTimeout(function () {
                        menuOptions.classList.remove('opacity');
                    }, 500);
                } else if (this.innerText.toLowerCase() == 'number of pieces') {
                    let menuPiecesArray = Array.from(menuPieces);

                    menuPiecesArray.sort(function (a, b) {
                        return parseFloat(b.textContent) - parseFloat(a.textContent);
                    });

                    menuOptions.classList.add('opacity');

                    menuPiecesArray.forEach(function (element, index) {
                        window.setTimeout(function () {
                            element.parentElement.parentElement.parentElement.parentElement.style.order = index + 1;
                        }, 300);
                    });

                    window.setTimeout(function () {
                        menuOptions.classList.remove('opacity');
                    }, 500);
                } else if (this.innerText.toLowerCase() == 'weight') {
                    let menuWeightsArray = Array.from(menuWeights);

                    menuWeightsArray.sort(function (a, b) {
                        return parseFloat(b.textContent) - parseFloat(a.textContent);
                    });

                    menuOptions.classList.add('opacity');

                    menuWeightsArray.forEach(function (element, index) {
                        window.setTimeout(function () {
                            element.parentElement.parentElement.parentElement.parentElement.style.order = index + 1;
                        }, 300);
                    });

                    window.setTimeout(function () {
                        menuOptions.classList.remove('opacity');
                    }, 500);
                } else {
                    menuOptions.classList.add('opacity');

                    menuWeights.forEach(function (element, index) {
                        window.setTimeout(function () {
                            element.parentElement.parentElement.parentElement.parentElement.style.order = index + 1;
                        }, 300);
                    });

                    window.setTimeout(function () {
                        menuOptions.classList.remove('opacity');
                    }, 500);
                }
            });
        }
    }
}

select();

document.addEventListener('click', function e(e) {

    const selectParent = document.querySelectorAll('.select_header');

    function removeActive(selects) {
        let allChildren = selects.querySelectorAll('*');
        let selector = document.querySelector('.select');

        for (let i = 0; i < allChildren.length; i++) {
            if (allChildren[i] != e.target && selects != e.target) {
                selector.classList.remove('is-active');
                break;
            }
        }

    }

    selectParent.forEach(selects => removeActive(selects));
})