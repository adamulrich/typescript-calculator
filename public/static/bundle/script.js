(()=>{"use strict";var __webpack_exports__={},OPERATOR_EQUALS="=",OPERATOR_PLUS="+",OPERATOR_MINUS="-",OPERATOR_MULTIPLY="*",OPERATOR_DIVIDE="/",CLEAR="clear",ALL_CLEAR="all_clear",BACKSPACE="backspace",PLUS_MINUS="plus_minus",STATE_OPERAND_1=1,STATE_OPERATOR=2,STATE_OPERAND_2=3,STATE_EQUALS=4,DISPLAY_BUFFER_MAX=25,OPERATORS={equals:"=",plus:"+",divide:"/",minus:"-",multiply:"*"},CalculatorState=function(){this.displayBuffer="0",this.currentState=STATE_OPERAND_1,this.currentOperand1_value=0,this.currentOperand2_value=0,this.currentOperator="",this.currentResult=0,this.isPositive=!0},calc=new CalculatorState,displayElement=document.getElementById("display"),displayOperand1=document.getElementById("operand_1"),displayOperand2=document.getElementById("operand_2"),displayOperator=document.getElementById("operator"),displayResult=document.getElementById("result"),displayFocusElement=document.getElementById("focus_element");function inputButtonPressed(e){switch(calc.currentState){case STATE_OPERAND_1:case STATE_OPERAND_2:break;case STATE_OPERATOR:calc.currentState=STATE_OPERAND_2;break;case STATE_EQUALS:resetState()}!function(){if((displaySign()+calc.displayBuffer).length<DISPLAY_BUFFER_MAX)for(var t=0,a=e;t<a.length;t++){var c=a[t];switch(c){case"dot":case".":calc.displayBuffer.includes(".")||(calc.displayBuffer+=".");break;case"0":0!=getDisplayValue()&&(calc.displayBuffer+="0");break;case"\\":case PLUS_MINUS:calc.isPositive=!calc.isPositive}var r=+c;r>=1&&r<=9&&("0"!=calc.displayBuffer?calc.displayBuffer+=c:calc.displayBuffer=c)}}(),updateDisplay()}function operatorButtonPressed(e){switch(calc.currentState){case STATE_OPERATOR:if(e!=OPERATOR_EQUALS){calc.currentOperator=e;break}case STATE_OPERAND_1:if(e!=OPERATOR_EQUALS&&"0"!=calc.displayBuffer){calc.currentState=STATE_OPERATOR,calc.currentOperator=e,calc.currentOperand1_value=getDisplayValue(),resetDisplayValue();break}break;case STATE_OPERAND_2:if(e==OPERATOR_EQUALS){calculateResult(),calc.currentState=STATE_EQUALS;break}calculateResult(),resetForContinue(e);break;case STATE_EQUALS:if(e==OPERATOR_EQUALS)break;resetForContinue(e)}updateDisplay()}function clearButtonPressed(e){if(e===ALL_CLEAR)resetState();else if(e===CLEAR)if("0"==calc.displayBuffer)resetState();else switch(resetDisplayValue(),calc.currentState){case STATE_OPERAND_1:case STATE_OPERATOR:case STATE_EQUALS:resetState();break;case STATE_OPERAND_2:calc.displayBuffer="0",calc.currentOperand2_value=0,calc.currentState=STATE_OPERATOR}else if(e===BACKSPACE)switch(calc.currentState){case STATE_OPERAND_1:case STATE_OPERAND_2:"0"!=calc.displayBuffer&&(calc.displayBuffer=calc.displayBuffer.substring(0,calc.displayBuffer.length-1)),0==calc.displayBuffer.length&&(calc.isPositive=!0,calc.displayBuffer="0")}updateDisplay()}function resetForContinue(e){resetState(calc.currentResult,e,STATE_OPERATOR)}function resetState(e,t,a){void 0===e&&(e=0),void 0===t&&(t=""),void 0===a&&(a=STATE_OPERAND_1),calc.currentOperand1_value=e,calc.currentOperator=t,calc.currentState=a,calc.currentOperand2_value=0,calc.currentResult=0,resetDisplayValue()}function updateDisplay(){calc.currentState,displayElement.innerText=displaySign()+calc.displayBuffer,displayOperand1.innerText=formatNumberOutput(calc.currentOperand1_value),displayOperand2.innerText=formatNumberOutput(calc.currentOperand2_value),displayResult.innerText=formatNumberOutput(calc.currentResult).substring(0,12),displayOperator.innerText=calc.currentOperator,displayFocusElement.focus()}function displaySign(){return 1==calc.isPositive?"":"-"}function formatNumberOutput(e){return 0==e?"":String(e).substring(0,12)}function getDisplayValue(){return calc.displayBuffer.includes(".")?parseFloat(displaySign()+calc.displayBuffer):parseInt(displaySign()+calc.displayBuffer)}function resetDisplayValue(){calc.displayBuffer="0",calc.isPositive=!0}function calculateResult(){calc.currentOperand2_value=getDisplayValue();var result=0;result=eval(calc.currentOperand1_value.toString()+calc.currentOperator+calc.currentOperand2_value.toString()),calc.displayBuffer=String(Math.abs(result)),calc.isPositive=result==Math.abs(result),calc.currentResult=result}var buttonList=["0","1","2","3","4","5","6","7","8","9","dot","plus_minus"];buttonList.forEach((function(e){document.getElementById(e).addEventListener("click",(function(){var t=e;"dot"==e?t=".":"plus_minus"==e&&(t="\\"),inputButtonPressed(t)}))}));var buttonList2=["minus","divide","multiply","equals","plus"];buttonList2.forEach((function(e){document.getElementById(e).addEventListener("click",(function(){operatorButtonPressed(OPERATORS[e])}))}));var buttonList3=["clear","all_clear","backspace"];function displayCopyNotice(){var e=document.getElementById("copy_notice");null==e||e.classList.toggle("elementToFadeInAndOut"),e.style.display="block"}buttonList3.forEach((function(e){document.getElementById(e).addEventListener("click",(function(){clearButtonPressed(e)}))})),document.body.addEventListener("keypress",(function(e){var t=e.key;switch(!0){case["0","1","2","3","4","5","6","7","8","9","\\","."].includes(t):inputButtonPressed(t);break;case["+","-","*","/","="].includes(t):operatorButtonPressed(t);break;case["Enter"].includes(t):operatorButtonPressed("=")}})),document.body.addEventListener("keydown",(function(e){switch(e.key){case"Escape":clearButtonPressed("clear");break;case"Backspace":case"Delete":clearButtonPressed("backspace")}e||window.event;var t=e.key.toLowerCase(),a=e.ctrlKey?e.ctrlKey:"17"===t;"v"==t&&a?navigator.clipboard.readText().then((function(e){var t=Number(e);Number.isNaN(t)||inputButtonPressed(e)})):"c"==t&&a&&(navigator.clipboard.writeText(String(calc.displayBuffer)),document.getElementById("copy_notice"),displayCopyNotice(),setTimeout(displayCopyNotice,0))}),!1),updateDisplay()})();