/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = '';
    
    for(let i = 0; i < input.length; i++) {
      if((input.charCodeAt(i) < 58 && input.charCodeAt(i) > 47) || input.charCodeAt(i) == 47) {
        result += input[i];
      }
    }
    
    return Number(result);
    
  };
  
  this.getUnit = function(input) {
    var result = '';
    
    for(let i = 0; i < input.length; i++) {
     if((input.charCodeAt(i) < 91 && input.charCodeAt(i) > 64) || (input.charCodeAt(i) < 123 && input.charCodeAt(i) > 96)) {
        result += input[i];
      }  
    }
     
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit.toLowerCase()) {
    
      case 'gal':
        result = 'L';
      break;
      case 'L':
        result = 'gal';
      break;
      case 'lbs':
        result = 'kg';
      break;
      case 'kg':
        result = 'lbs';
      break;
      case 'mi':
        result = 'km';
      break;
      case 'km':
        result = 'mi';
      break;
      default:
        result = '';
      break;
        
    }
    
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit.toLowerCase()) {
    
      case 'gal':
        result = initNum * galToL;
      break;
      case 'L':
        result = initNum / galToL;
      break;
      case 'lbs':
        result = initNum * lbsToKg;
      break;
      case 'kg':
        result = initNum / lbsToKg;
      break;
      case 'mi':
        result = initNum * miToKm;
      break;
      case 'km':
        result = initNum / miToKm;
      break;
      default:
        result = NaN;
      break;
        
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    const list = {
      gal:'gallons',
      L: 'liters',
      lbs: 'pounds',
      kg: 'kilograms',
      km: 'kilometers',
      mi: 'miles'
    };
    
    result = `${initNum} ${list[initUnit]} converts to ${returnNum} ${list[returnUnit]}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
