let library= {
    getElement: function(id) {
        let element= document.getElementById(id);
        return element;
    },
    createElement: function(tagName) {       
        let element = document.createElement(tagName);
        return element;
    },
    appendElement: function(parent, child){
        parent.appendChild(child);
        return this;
    },
    deleteElement: function(element) {
        element.parentNode.removeChild(element);
        return this;

    },///!!!
    updateElement: function(element, newId){
        element.id = newId;
        return this;
    },
    addClass: function (element, newClass) {
        element.classList.add(newClass);
        return this;
    },
    removeAllClasses: function (element) {
        element.className = '';
        return this;
    },
    addData: function (element, propertyName, propertyValue) {
        element.setAttribute(`data-${propertyName}`, propertyValue);
        return this;
    },
    changeName:  function (element, name) {
        element.setAttribute("name", name);
        return this;
    },
    setAttributeToElement: function (element, name, value) {
        element.setAttribute(name, value);
        return this;
    },
    changeText: function (element, newTextContent) {
        let textNode = document.createTextNode(newTextContent);
        element.appendChild(textNode);

        return newTextContent;
    },
    changeInnerHtml: function (element, newHtml) {
        element.innerHTML = newHtml;
        return newHtml;
    },
    addStyle:  function (element, newStyle) {
        let style = element.getAttribute("style") || "";

        if(!newStyle) {
            return this;
        }
        style = style === "" ? "" : style + " ";
        let keys = Object.keys(newStyle);
        for (let key of keys) {
            style += `${key}: ${newStyle[key]};`;
        }
        
        element.setAttribute("style", style);
        return this;
    },
    removeStyle: function (element) {
        element.setAttribute("style", "");
        return this;
    },
    getParent: function (element) {
        return element.parentNode;
    },
    getChild: function (element) {
        return element.childNodes;
    },
    getSibling: function (element){
        return element.getSibling;
    },
    addEventListener: function (element, eventListener, callback){
        element.addEventListener(eventListener, callback);
        return this;
    }
};