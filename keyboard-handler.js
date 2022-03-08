var xy = '';
var FcapsLock = '0';
var Fshift = '0';
var clicked = false;

//Toggle 
document.getElementById('display').addEventListener('click', showKeyboard, null);
document.getElementById('submit').addEventListener('click', hideKeyboard, null);

function hideKeyboard() {
  document.getElementById('buttons').style.bottom = '-100%';
  clicked = false;
}

function showKeyboard() {
  document.getElementById('buttons').style.bottom = '10px';
  clicked = true;
}

//BackSpace
function funcDel() {
  var valu = document.getElementById('display').innerHTML;
  var x = valu.length;
  var y = 1;
  var z = x - y;
  document.getElementById('display').innerHTML = valu.slice(0, z);
}
//CapsLock
function funcCL() {
  if (FcapsLock == '0') {
    FcapsLock = '1';
  } else if (FcapsLock == '1') {
    FcapsLock = '0';
  }
}

//Clear
function funcClear() {
  var valu = document.getElementById('display').innerHTML = '';
  FcapsLock = '0';
  Fshift = '0';
}
//Shift
function funcShift() {
  if (Fshift == '0') {
    Fshift = '1';
  } else if (Fshift == '1') {
    Fshift = '0';
  }
}
//Submit
function onSubmit() {
  var valu = document.getElementById('display').innerHTML.trim();
  if (valu == '') {
    alert('Not inserted : Empty innerHTML');
  } else {
    alert('Data Inserted : ' + valu);
    var valu = document.getElementById('display').innerHTML = '';
  }
}

// Enter
function funcEnter() {
  var valu = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = valu + '<br />';
}
//Tab
function funcTab() {
  var valu = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = valu + '	';
}
//Space
function funcSpace() {
  var valu = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = valu + ' ';
}
//Special keys
function funcSc7() {
  var valu = document.getElementById('display').innerHTML;
  if (Fshift == '0') {
    document.getElementById('display').innerHTML = valu + "'";
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = valu + '"';
  }
}

/** 
 * 
 * here we optimize the code for all letter
 *
 * 
 */

function keys(lower, upper) {
  var valu = document.getElementById('display').innerHTML;
  if (FcapsLock == '0') {
    if (Fshift == '0') {
      document.getElementById('display').innerHTML = valu + lower;
    } else if (Fshift == '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = valu + upper;
    }
  } else if (FcapsLock == '1') {
    if (Fshift == '0') {
      document.getElementById('display').innerHTML = valu + upper;
    } else if (Fshift == '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = valu + lower;
    }
  }
}