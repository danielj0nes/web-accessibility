function menuItemHandler(event) {
    let dropDownMenu = event.target.parentNode.parentNode;
    let allItems = dropDownMenu.getElementsByClassName('dropdown-item');
    let menuLink = dropDownMenu.parentNode.getElementsByClassName('nav-link')[0];
    // Hide the sub-menu after last element has lost focus
    switch(event.key) {
        case ' ':
            event.preventDefault();
            window.location.replace(event.target.href);
            break;
        case 'Escape':
            dropDownMenu.classList.remove('show');
            menuLink.setAttribute('aria-expanded', 'false');
            menuLink.focus();
            break;
    }
    if (event.target == allItems[allItems.length - 1]) {
        dropDownMenu.classList.remove('show');
        menuLink.setAttribute('aria-expanded', 'false');
    }
}
/**
 * Check if spacebar key is pressed when a submenu is focussed to open it
 * @param {object} event - The DOM event
 */
function spaceExpand(event) {
    let currentDropDownMenu =
        event.target.parentNode.querySelector('.dropdown-menu');
    let isOpen = currentDropDownMenu.classList.contains('show');
    switch(event.key) {
        case ' ':
            event.preventDefault();
            // Clear all open submenus
            let dropDownMenus =
                document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
            for (let j = 0; j < dropDownMenus.length; j++) {
                dropDownMenus[j].classList.remove('show');
            }
            
            if (!isOpen) {
                event.target.setAttribute('aria-expanded', 'true');
                currentDropDownMenu.classList.add('show');
                isOpen = true;
            } else {
                event.target.setAttribute('aria-expanded', 'false');
                currentDropDownMenu.classList.remove('show');
                isOpen = false;
            }
            break;
    }
}

/**
 * Close opened submenus using the escape key, restore focus afterwards
 * @param {object} event - The DOM event
 */
function closeMenu(event) {
    event.stopPropagation();
    event.preventDefault();
    let currentDropDownMenu =
        event.target.parentNode.querySelector('.dropdown-menu');
    let isOpen = currentDropDownMenu.classList.contains('show');
    if (isOpen) {
        if (event.key === 'Escape') {
            event.target.setAttribute('aria-expanded', 'false');
            currentDropDownMenu.classList.remove('show');
            event.target.focus();
        }
    }
}

/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();
    // Gets the a tag element of the focussed menu item
    let currentDropDownButton = event.target;
    let currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    let isOpen = currentDropDownMenu.classList.contains('show');
    let dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (let j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
        dropDownMenus[j].parentNode.getElementsByClassName('nav-link')[0].setAttribute('aria-expanded', 'false');
    }
    // When submenu expanded or closed, update the ARIA attribute
    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
        currentDropDownButton.setAttribute('aria-expanded', 'true');
    } else {
        currentDropDownButton.setAttribute('aria-expanded', 'false');
    }
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();
    let content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let dropDownMenus = 
        document.querySelectorAll('.dropdown-menu');
        
        for (let i = 0; i < dropDownMenus.length; i++) {
            dropDownMenus[i].addEventListener('keydown', menuItemHandler);
        }

    let dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

        for (let i = 0; i < dropDownToggles.length; i++) {
            dropDownToggles[i].addEventListener('click', openMenu);
            dropDownToggles[i].addEventListener('keyup', closeMenu);
            dropDownToggles[i].addEventListener('keydown', spaceExpand);
        }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
}, false);
