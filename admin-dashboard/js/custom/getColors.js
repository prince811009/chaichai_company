var hexToRgb = function hexToRgb(hexValue) {
    var hex;
    hexValue.indexOf('#') === 0 ? hex = hexValue.substring(1) : hex = hexValue; // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    }));
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
  };
  
  var rgbaColor = function rgbaColor() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#fff';
    var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
    return "rgba(".concat(hexToRgb(color), ", ").concat(alpha, ")");
  };
  /* --------------------------------- Colors --------------------------------- */
  
  
  var getColor = function getColor(name) {
    var dom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return getComputedStyle(dom).getPropertyValue("--bs-".concat(name)).trim();
  };
  
  var getColors = function getColors(dom) {
    return {
      primary: getColor('primary', dom),
      secondary: getColor('secondary', dom),
      success: getColor('success', dom),
      info: getColor('info', dom),
      warning: getColor('warning', dom),
      danger: getColor('danger', dom),
      light: getColor('light', dom),
      dark: getColor('dark', dom)
    };
  };
  var getGrays = function getGrays(dom) {
    return {
      white: getColor('white', dom),
      100: getColor('gray-100', dom),
      200: getColor('gray-200', dom),
      300: getColor('gray-300', dom),
      400: getColor('gray-400', dom),
      500: getColor('gray-500', dom),
      600: getColor('gray-600', dom),
      700: getColor('gray-700', dom),
      800: getColor('gray-800', dom),
      900: getColor('gray-900', dom),
      black: getColor('black', dom),
      border: getColor('border-color-translucent', dom),
    };
  };
  var utils = {
    hexToRgb: hexToRgb,
  rgbaColor: rgbaColor,
  getColor: getColor,
  getColors: getColors,
  getGrays: getGrays,
  }
 window.utils = utils