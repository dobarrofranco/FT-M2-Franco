var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") { 
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  
  // TU CÓDIGO AQUÍ
  // Aquí se está verificando startEl cumple con la funcion de coincidencia mathFunc
  if (matchFunc(startEl)) resultSet.push(startEl);

  for (const child of startEl.children) {
    let newElements = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...newElements];
  }
  return resultSet;

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí //"if (#) / if (.) / o lo contrario"
  if (selector[0] === '#') return 'id';
  if (selector[0] === '.') return 'class';
  if (selector.includes('.')) return 'tag.class';
  if (selector.includes('>')) return 'childSelector';
  if (selector.includes(' ')) return 'descendantSelector';
  return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") {
    matchFunction = (elemento) => `#${elemento.id}` === selector;
  
  } else if (selectorType === "class") {
    matchFunction = (elemento) => {
      for (const clase of elemento.classList) {
        if (`.${clase}` === selector) {
          return true;
        }
      };
      return false;
    }
  
  
  } else if (selectorType === "tag.class") {
    
    let separar = selector.split(".");
    let tagName = separar[0];
    let className = separar[1];

    matchFunction = (elemento) => {
      // return elemento.tagName === tagName.toUpperCase() && elemento.classList.contains(className);
      return matchFunctionMaker(tagName)(elemento) && matchFunctionMaker(`.${className}`)(elemento);
    }
  
  } else if (selectorType === "tag") {
    matchFunction = (elemento) => elemento.tagName === selector.toUpperCase();
  } 

  else if (selectorType === 'childSelector') {
    
    let separar = selector.split(" > ");
    let className = separar[0];
    let tagName = separar[1];

    matchFunction = (elemento) => {
      return matchFunctionMaker(className)(elemento) && matchFunctionMaker(tagName)(elemento);
    }
  }

  else if (selectorType === 'descendantSelector') {
    let separar = selector.split(" ");
    let className = separar[0];
    let tagName = separar[1];

    matchFunction = (elemento) => {
      return matchFunctionMaker(className)(elemento) && matchFunctionMaker(tagName)(elemento);
    }
  }
  
  return matchFunction;
};

var $ = function (selector) { // recibe un selector (id, class, tag)
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};


// los Child Selector (>), son hijos de un elemento en específico como por ejemplo el div puede tener de hijo un p pero no necesariamente se refiere a todos los p dentro del div ya que puede haber un p dentro del div pero dentro de otro elemento como una section y en ese caso ese "p" nos los va a tomar.

// en cambio los Descendant Selector ( ) se refiere por ejemplo a todos los p dentro de un div.