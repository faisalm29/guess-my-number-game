"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,s){return t&&_defineProperties(e.prototype,t),s&&_defineProperties(e,s),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classPrivateFieldInitSpec(e,t,s){_checkPrivateRedeclaration(e,t),t.set(e,s)}function _checkPrivateRedeclaration(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldGet(e,t){return _classApplyDescriptorGet(e,_classExtractFieldDescriptor(e,t,"get"))}function _classApplyDescriptorGet(e,t){return t.get?t.get.call(e):t.value}function _classPrivateFieldSet(e,t,s){return _classApplyDescriptorSet(e,_classExtractFieldDescriptor(e,t,"set"),s),s}function _classExtractFieldDescriptor(e,t,s){if(!t.has(e))throw new TypeError("attempted to "+s+" private field on non-instance");return t.get(e)}function _classApplyDescriptorSet(e,t,s){if(t.set)t.set.call(e,s);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=s}}var checkBtn=document.querySelector(".btn-check"),restartBtn=document.querySelector(".btn-restart"),difficultyBtns=document.querySelectorAll(".btn-difficulty"),settingBtn=document.querySelector(".btn-setting"),closeSettingBtn=document.querySelector(".btn-close-setting"),settingModal=document.querySelector(".modal-setting"),mysteryNumber=document.querySelector(".mystery-number"),highScoreText=document.querySelector(".highscore"),currentScoreText=document.querySelector(".current-score"),clueText=document.querySelector(".clue"),messageText=document.querySelector(".message"),body=document.querySelector("body");console.log(difficultyBtns);var _mysteryNumber=new WeakMap,_score=new WeakMap,_currentHighScore=new WeakMap,_decreaseScoreBy=new WeakMap,_mysteryNumberRange=new WeakMap,GuessMyNumberGame=function(){function e(){_classCallCheck(this,e),_classPrivateFieldInitSpec(this,_mysteryNumber,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_score,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_currentHighScore,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_decreaseScoreBy,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_mysteryNumberRange,{writable:!0,value:void 0}),_classPrivateFieldSet(this,_mysteryNumberRange,0),_classPrivateFieldSet(this,_mysteryNumber,0),_classPrivateFieldSet(this,_decreaseScoreBy,0),_classPrivateFieldSet(this,_score,0),_classPrivateFieldSet(this,_currentHighScore,0)}return _createClass(e,[{key:"setMysteryNumber",set:function(e){_classPrivateFieldSet(this,_mysteryNumber,e)}},{key:"setScore",set:function(e){_classPrivateFieldSet(this,_score,e)}},{key:"setCurrentHighScore",set:function(e){_classPrivateFieldSet(this,_currentHighScore,e)}},{key:"setDecreaseScoreBy",set:function(e){_classPrivateFieldSet(this,_decreaseScoreBy,e)}},{key:"setMysteryNumberRange",set:function(e){_classPrivateFieldSet(this,_mysteryNumberRange,e)}},{key:"start",value:function(){this.settingEasy(),this.setCurrentHighScore=0}},{key:"restart",value:function(){this.setScore=100,this.setMysteryNumber=this.randomingMysteryNumber(),this.displayMessage("Start guessing..."),currentScoreText.textContent=_classPrivateFieldGet(this,_score),mysteryNumber.textContent="?",document.getElementById("answer").value="",body.style.backgroundColor="#222",checkBtn.disabled=!1,checkBtn.style.cursor="pointer"}},{key:"randomingMysteryNumber",value:function(){return Math.trunc(Math.random()*_classPrivateFieldGet(this,_mysteryNumberRange)+1)}},{key:"displayMessage",value:function(e){messageText.textContent=e}},{key:"decreaseScore",value:function(){_classPrivateFieldSet(this,_score,_classPrivateFieldGet(this,_score)-_classPrivateFieldGet(this,_decreaseScoreBy)),currentScoreText.textContent=_classPrivateFieldGet(this,_score)}},{key:"changeClue",value:function(){clueText.textContent="<Between 1 and ".concat(_classPrivateFieldGet(this,_mysteryNumberRange),">")}},{key:"winState",value:function(){this.displayMessage("🎉 Correct Number!"),mysteryNumber.textContent=_classPrivateFieldGet(this,_mysteryNumber),body.style.backgroundColor="#60b347",checkBtn.disabled=!0,checkBtn.style.cursor="not-allowed",_classPrivateFieldGet(this,_score)>_classPrivateFieldGet(this,_currentHighScore)&&(this.setCurrentHighScore=_classPrivateFieldGet(this,_score),highScoreText.textContent=_classPrivateFieldGet(this,_currentHighScore))}},{key:"loseState",value:function(){this.displayMessage("💥 You lost the game!"),currentScoreText.textContent=0,body.style.backgroundColor="#d7504d",checkBtn.style.cursor="not-allowed",mysteryNumber.textContent=_classPrivateFieldGet(this,_mysteryNumber)}},{key:"showSetting",value:function(){settingModal.classList.remove("hidden")}},{key:"hiddenSetting",value:function(){settingModal.classList.add("hidden")}},{key:"settingEasy",value:function(){this.setMysteryNumberRange=20,this.setMysteryNumber=this.randomingMysteryNumber(),this.setDecreaseScoreBy=10,this.setScore=100,this.changeClue(),this.hiddenSetting()}},{key:"settingMedium",value:function(){this.setMysteryNumberRange=50,this.setMysteryNumber=this.randomingMysteryNumber(),this.setDecreaseScoreBy=10,this.setScore=100,this.changeClue(),this.hiddenSetting()}},{key:"settingHard",value:function(){this.setMysteryNumberRange=100,this.setMysteryNumber=this.randomingMysteryNumber(),this.setDecreaseScoreBy=20,this.setScore=100,this.changeClue(),this.hiddenSetting()}},{key:"checkMysteryNumber",value:function(){if(_classPrivateFieldGet(this,_score)>10){var e=document.getElementById("answer").value;if(e){var t=Number(e);console.log(t),t===_classPrivateFieldGet(this,_mysteryNumber)?this.winState():t>_classPrivateFieldGet(this,_mysteryNumber)&&t<_classPrivateFieldGet(this,_mysteryNumberRange)+1?(this.displayMessage("📈 Too high!"),this.decreaseScore()):t<_classPrivateFieldGet(this,_mysteryNumber)&&t>0?(this.displayMessage("📉 Too low"),this.decreaseScore()):this.displayMessage("Guess between 1 to ".concat(_classPrivateFieldGet(this,_mysteryNumberRange),"!"))}else this.displayMessage("Insert a number!"),console.log(e)}else this.loseState()}}]),e}(),guessMyNumber=new GuessMyNumberGame;guessMyNumber.start(),console.log(guessMyNumber),checkBtn.addEventListener("click",(function(){guessMyNumber.checkMysteryNumber()})),restartBtn.addEventListener("click",(function(){guessMyNumber.restart()})),settingBtn.addEventListener("click",(function(){guessMyNumber.showSetting()})),closeSettingBtn.addEventListener("click",(function(){guessMyNumber.hiddenSetting()})),difficultyBtns.forEach((function(e){e.addEventListener("click",(function(){"easy"===this.value?(guessMyNumber.settingEasy(),guessMyNumber.restart(),console.log(guessMyNumber)):"medium"===this.value?(guessMyNumber.settingMedium(),guessMyNumber.restart(),console.log(guessMyNumber)):"hard"===this.value&&(guessMyNumber.settingHard(),guessMyNumber.restart(),console.log(guessMyNumber))}))}));
//# sourceMappingURL=script.js.map