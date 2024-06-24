const ViewUtils = {
    createElement(tag, className = '', innerHTML = '') {
        const element = document.createElement(tag);
        if (className) {
            element.className = className;
        }
        if (innerHTML) {
            element.innerHTML = innerHTML;
        }
        return element;
    },
    
    appendElement(parentSelector, element) {
        const parent = document.querySelector(parentSelector);
        if (parent) {
            parent.appendChild(element);
        } else {
            console.error(`Parent element ${parentSelector} not found`);
        }
    },

    updateElementText(selector, newText) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = newText;
        }
    }
};
