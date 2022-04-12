/* STRONA WYKONANA PRZEZ JAKUBA MASŁOWSKIEGO ORAZ KRZYSZTOFA SERATOWICZA
STRONA WYKONANA PRZEZ JAKUBA MASŁOWSKIEGO ORAZ KRZYSZTOFA SERATOWICZA
STRONA WYKONANA PRZEZ JAKUBA MASŁOWSKIEGO ORAZ KRZYSZTOFA SERATOWICZA */

const navButton = document.getElementsByClassName("nav-button");
const dropdownButton = document.getElementsByClassName('dropdown-button');
const dropdownList = document.getElementById("list");
const aboutButton = document.querySelector("#about-button");
const productsButton = document.querySelector("#products-button");

// ajax
function loadContent(url) {
    const xhr = new XMLHttpRequest();
    const container = document.querySelector(".welcome-page")

    xhr.onload = function() {
        if (this.status === 200) {
            container.innerHTML = xhr.responseText;
        }

        else {
            console.log("ERROR!");
        }
    }

    xhr.open('get', url);
    xhr.send();
}

// ajax to category
function loadContentCategory(url) {
    const xhr = new XMLHttpRequest();
    const container = document.querySelector(".products-flex")

    xhr.onload = function() {
        if (this.status === 200) {
            container.innerHTML = xhr.responseText;
        }

        else {
            console.log("ERROR!");
        }
    }

    xhr.open('get', url);
    xhr.send();
}

// index nav
navButton[0].addEventListener('click' , function(){
    loadContent("/html/home/index-edited.html");
    removeClassPage();
    navButton[0].classList.add("actual-page");
    const getProducts = () => {
        const productsButtonEdited = document.querySelector("#products-button")

        productsButtonEdited.addEventListener('click', () => {
            loadContent("/html/products/products.html")
            removeClassPage();
            navButton[1].classList.add("actual-page");

            const getButton = () => {
                const dropdownButton = document.querySelector('.dropdown-button');
                const dropdownList = document.querySelector("#list");
                dropdownButton.addEventListener('click',  () => {
                    dropdownList.classList.toggle("active");
                })

                const getProductDesc = () => {
                    const product = document.getElementsByClassName("product")

                    for (var i = 0 ; i < product.length; i++) {
                        product[i].addEventListener('click' , function(){
                            loadContent("/html/products/product-item/product-item-apple.html")
                        } , false ) ;
                    }
                }
                setTimeout(getProductDesc, 50)
            }

            const getCategory = () => {
                const categoryButton = document.getElementsByClassName("category-button")

                function delActive() {
                    categoryButton[0].classList.remove("active-category");
                    categoryButton[1].classList.remove("active-category");
                    categoryButton[2].classList.remove("active-category");
                }

                categoryButton[0].addEventListener('click', () => {
                    loadContentCategory("/html/products/categories/products-first-category.html")
                    delActive();
                    categoryButton[0].classList.add("active-category");

                    const getProductDesc = () => {
                        const product = document.getElementsByClassName("product")
        
                        for (var i = 0 ; i < product.length; i++) {
                            product[i].addEventListener('click' , function(){
                                loadContent("/html/products/product-item/product-item-apple.html")
                            } , false ) ;
                        }
                    }
                    setTimeout(getProductDesc, 50)
                })

                categoryButton[1].addEventListener('click', () => {
                    loadContentCategory("/html/products/categories/products-second-category.html")
                    delActive();
                    categoryButton[1].classList.add("active-category");

                    const getProductDesc = () => {
                        const product = document.getElementsByClassName("product")

                        for (var i = 0 ; i < product.length; i++) {
                            product[i].addEventListener('click' , function(){
                                loadContent("/html/products/product-item/product-item-tv.html")
                            } , false ) ;
                        }
                    }
                    setTimeout(getProductDesc, 50)
                })

                categoryButton[2].addEventListener('click', () => {
                    loadContentCategory("/html/products/categories/products-third-category.html")
                    delActive();
                    categoryButton[2].classList.add("active-category");

                    const getProductDesc = () => {
                        const product = document.getElementsByClassName("product")

                        for (var i = 0 ; i < product.length; i++) {
                            product[i].addEventListener('click' , function(){
                                loadContent("/html/products/product-item/product-item-phone.html")
                            } , false ) ;
                        }
                    }
                    setTimeout(getProductDesc, 50)
                })
            }
            setTimeout(getButton, 50)
            setTimeout(getCategory, 50)
        })
    }

    const getAbout = () => {
        const aboutButtonEdited = document.querySelector("#about-button")

        aboutButtonEdited.addEventListener('click', () => {
            loadContent("/html/about/about.html")
            removeClassPage();
            navButton[2].classList.add("actual-page");
        })
    }
    setTimeout (getProducts, 50);
    setTimeout (getAbout, 50);
});

// products nav
navButton[1].addEventListener('click', () => {
    loadContent("/html/products/products.html")
    removeClassPage();
    navButton[1].classList.add("actual-page");
    const getButton = () => {
        const dropdownButton = document.querySelector('.dropdown-button');
        const dropdownList = document.querySelector("#list");
        dropdownButton.addEventListener('click',  () => {
            dropdownList.classList.toggle("active");
        })

        const thisProduct = document.getElementsByClassName("product");
        for (var i = 0 ; i < thisProduct.length; i++) {
            thisProduct[i].addEventListener('click' , function(){
                loadContent("/html/products/product-item/product-item-apple.html")
            },false);
        }
    }

    const getCategory = () => {
        const categoryButton = document.getElementsByClassName("category-button")

        function delActive() {
            categoryButton[0].classList.remove("active-category");
            categoryButton[1].classList.remove("active-category");
            categoryButton[2].classList.remove("active-category");
        }

        categoryButton[0].addEventListener('click', () => {
            loadContentCategory("/html/products/categories/products-first-category.html")
            delActive();
            categoryButton[0].classList.add("active-category");

            const getProductDesc = () => {
                const product = document.getElementsByClassName("product")

                for (var i = 0 ; i < product.length; i++) {
                    product[i].addEventListener('click' , function(){
                        loadContent("/html/products/product-item/product-item-apple.html")
                    } , false ) ;
                }
            }
            setTimeout(getProductDesc, 50)
        })

        categoryButton[1].addEventListener('click', () => {
            loadContentCategory("/html/products/categories/products-second-category.html")
            delActive();
            categoryButton[1].classList.add("active-category");

            const getProductDesc = () => {
                const product = document.getElementsByClassName("product")

                for (var i = 0 ; i < product.length; i++) {
                    product[i].addEventListener('click' , function(){
                        loadContent("/html/products/product-item/product-item-tv.html")
                    } , false ) ;
                }
            }
            setTimeout(getProductDesc, 50)
        })

        categoryButton[2].addEventListener('click', () => {
            loadContentCategory("/html/products/categories/products-third-category.html")
            delActive();
            categoryButton[2].classList.add("active-category");

            const getProductDesc = () => {
                const product = document.getElementsByClassName("product")

                for (var i = 0 ; i < product.length; i++) {
                    product[i].addEventListener('click' , function(){
                        loadContent("/html/products/product-item/product-item-phone.html")
                    } , false ) ;
                }
            }
            setTimeout(getProductDesc, 50)
        })
    }
    setTimeout(getButton, 50)
    setTimeout(getCategory, 50)
})

// about nav
navButton[2].addEventListener('click' , function(){
    removeClassPage();
    navButton[2].classList.add("actual-page");
    loadContent("/html/about/about.html");
});

// contact nav
navButton[3].addEventListener('click' , function(){
    removeClassPage();
    navButton[3].classList.add("actual-page");
    loadContent("/html/contact/contact.html");
});


// productsbutton na stronie glównej (index.html)
productsButton.addEventListener("click", () => {
    loadContent("/html/products/products.html")
    removeClassPage();
    navButton[1].classList.add("actual-page");
    const getButton = () => {
        const dropdownButton = document.querySelector('.dropdown-button');
        const dropdownList = document.querySelector("#list");
        dropdownButton.addEventListener('click',  () => {
            dropdownList.classList.toggle("active");
        })

        const thisProduct = document.getElementsByClassName("product");
        for (var i = 0 ; i < thisProduct.length; i++) {
            thisProduct[i].addEventListener('click' , function(){
                loadContent("/html/products/product-item/product-item-apple.html")
            },false);
        }
    }

    const getCategory = () => {
        const categoryButton = document.getElementsByClassName("category-button")

        function delActive() {
            categoryButton[0].classList.remove("active-category");
            categoryButton[1].classList.remove("active-category");
            categoryButton[2].classList.remove("active-category");
        }

        categoryButton[0].addEventListener('click', () => {
            loadContentCategory("/html/products/categories/products-first-category.html")
            delActive();
            categoryButton[0].classList.add("active-category");

            const getProductDesc = () => {
                const product = document.getElementsByClassName("product")

                for (var i = 0 ; i < product.length; i++) {
                    product[i].addEventListener('click' , function(){
                        loadContent("/html/products/product-item/product-item-apple.html");
                    } , false ) ;
                }
            }
            setTimeout(getProductDesc, 50)
        })

        categoryButton[1].addEventListener('click', () => {
            loadContentCategory("/html/products/categories/products-second-category.html")
            delActive();
            categoryButton[1].classList.add("active-category");

            const getProductDesc = () => {
                const product = document.getElementsByClassName("product")

                for (var i = 0 ; i < product.length; i++) {
                    product[i].addEventListener('click' , function(){
                        loadContent("/html/products/product-item/product-item-tv.html");
                    } , false ) ;
                }
            }
            setTimeout(getProductDesc, 50)
        })

        categoryButton[2].addEventListener('click', () => {
            loadContentCategory("/html/products/categories/products-third-category.html")
            delActive();
            categoryButton[2].classList.add("active-category");

            const getProductDesc = () => {
                const product = document.getElementsByClassName("product")

                for (var i = 0 ; i < product.length; i++) {
                    product[i].addEventListener('click' , function(){
                        loadContent("/html/products/product-item/product-item-phone.html");
                    } , false ) ;
                }
            }
            setTimeout(getProductDesc, 50)
        })
    }
    setTimeout(getButton, 50)
    setTimeout(getCategory, 50)
})

// aboutbutton na stronie głównej (index.html)
aboutButton.addEventListener("click", () => {
    loadContent("/html/about/about.html")
    removeClassPage();
    navButton[2].classList.add("actual-page");
})

// usuwanie klasy "actual-page" z wszystkich buttonow w nawigacji
function removeClassPage() {
    navButton[0].classList.remove("actual-page");
    navButton[1].classList.remove("actual-page");
    navButton[2].classList.remove("actual-page");
    navButton[3].classList.remove("actual-page");
}











// w tym miejscu byl kod jQuery ale dowiedziałem się, ze uzywanie go jest niepoprawne dlatego nie oddalismy w terminie

// $(document).ready(function() { /// technika ajax wykonana w jQuery
//     $('#home-button').click(function(){
//         $(this).changeActualPage(this);
//         $.get('/html/home/index-edited.html',
//         function (data, textStatus, jqXHR) {
//             $(".welcome-page").html(data);
//       });
//     });

//     $('#products-button').click(function(){
//         $(this).changeActualPage(this);
//         $.get('/html/products/products.html',
//         function (data, textStatus, jqXHR) {
//             $(".welcome-page").html(data);
//       });
//     });

//     $('#about-button').click(function(){
//         $(this).changeActualPage(this);
//         $.get('/html/about/about.html',
//         function (data, textStatus, jqXHR) {
//             $(".welcome-page").html(data);
//       });
//     });

//     $('#contact-button').click(function(){
//         $(this).changeActualPage(this);
//         $.get('/html/contact/contact.html',
//         function (data, textStatus, jqXHR) {
//             $(".welcome-page").html(data);
//       });
//     });
//  });

// // rozwijanie dropdown listy na klik
// $(document).on('click', '.dropdown-button', function(){
//     $('#list').toggleClass('active');
// });

// $(document).on('click', '#first-category', function(){
//     $.get('/html/products/categories/products-first-category.html',
//         function (data, textStatus, jqXHR) {
//         $(".products-flex").html(data);
//     });
// });

// $(document).on('click', '#second-category', function(){
//     $.get('/html/products/categories/products-second-category.html',
//         function (data, textStatus, jqXHR) {
//         $(".products-flex").html(data);
//     });
// });

// $(document).on('click', '#third-category', function(){
//     $.get('/html/products/categories/products-third-category.html',
//         function (data, textStatus, jqXHR) {
//         $(".products-flex").html(data);
//     });
// });

// $(document).ready(function(){
//     $.fn.changeActualPage = function(button) {
//         $('#home-button, #products-button, #about-button, #contact-button').removeClass("actual-page");
//         $(button).addClass("actual-page");
//     }
// })