(()=>{var e={427:e=>{e.exports=()=>{const e={},t={missedShots:[],hits:[],shipsSunk:0};return{board:(()=>{const e=[];for(let t=65;t<=74;t++)for(let r=1;r<=10;r++){let n=[String.fromCharCode(t),r];e.push(n)}return e})(),placeShip:(t,r)=>{if(t.getLength()!==r.length)return"incorrect placement";const n=t.getName();return e[n]=[],e[n][0]=t,e[n][1]=[...r],e},playerShips:e,receiveAttack:r=>{for(const n in e){let o=e[n][1];for(let s=0;s<o.length;s++)if(r.toString()===o[s].toString())return e[n][0].hit(),t.hits.push(r),e[n][0].isSunk()&&t.shipsSunk++,!0}return t.missedShots.push(r),!1},missedShots:()=>t.missedShots,hits:()=>t.hits,allShipsSunk:()=>{const r=Object.keys(e).length;return t.shipsSunk===r},shipsLeft:()=>5-t.shipsSunk}}},21:e=>{e.exports=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}},507:(e,t,r)=>{const n=r(21);e.exports=e=>{let t=!0;const r=[],o=(e,t,r)=>{let n=!1;for(let r=0;r<t.length;r++)if(e.toString()===t[r].toString())return n;for(let t=0;t<r.length;t++)e.toString()===r[t].toString()&&(n=!0);return n},s=e=>{const t=e.length;return e[n(0,t-1)]};return{isTurn:()=>t,changeTurn:()=>{t=!t},makeAttack:(e,n,s)=>t?o(e,r,n)?(r.push(e),s(e)):"invalid coordinates":"not your turn",makeRandomAttack:e=>{if(t){let t=s(e);for(;!o(t,r,e);)t=s(e);return r.push(t),`attack made at ${t}`}return"not your turn"},name:e}}},643:e=>{e.exports=(e,t)=>{let r=0,n=!1;return{getLength:()=>t,getHits:()=>r,getName:()=>e,hit:()=>{r++},isSunk:()=>(n||t!==r||(n=!0),n)}}},281:e=>{e.exports={renderGameBoard:e=>{const t=document.createElement("div");t.classList.add("player-board");for(let r=0;r<e.length;r++){let n=document.createElement("div");n.textContent=`${e[r].toString()}`,t.appendChild(n)}const r=(e,t,r)=>{e.forEach((e=>{for(let n=0;n<t.length;n++){let o=t[n].textContent.split(",");o.splice(1,1,Number(o[1])),e.toString()===o.toString()&&(t[n].className=r)}}))};return{board:t,renderPlacements:(e,t)=>{for(ship in e){const n=e[ship][1];r(n,t,"placement")}},renderShots:(e,t,n)=>{r(e,n,"hit"),r(t,n,"missed")}}},renderScoreBoard:()=>({createScoreBoard:()=>{const e=document.createElement("p"),t=document.createElement("p"),r=document.createElement("div");return e.classList.add("player1"),t.classList.add("player2"),r.classList.add("scoreboard"),r.append(e,t),r},updateScore:(e,t)=>{const r=t;e.textContent=`ships left: ${r}`}})}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}(()=>{const e=r(643),t=r(427),n=r(507),o=r(281),s=n(),a=t(),c=document.createElement("main"),i=o.renderGameBoard(a.board),l=o.renderScoreBoard(),p=l.createScoreBoard();c.append(p,i.board),document.body.appendChild(c),a.placeShip(e("patrol",2),[["B",3],["B",4]]),a.placeShip(e("submarine",3),[["E",8],["F",8],["G",8]]),a.placeShip(e("destroyer",3),[["C",6],["C",7],["C",8]]),a.placeShip(e("battleship",4),[["C",2],["D",2],["E",2],["F",2]]),a.placeShip(e("carrier",5),[["I",5],["I",6],["I",7],["I",8],["I",9]]);const d=document.querySelectorAll(".player-board div"),h=document.querySelector(".player1"),u=document.querySelector(".player2");i.renderPlacements(a.playerShips,d),l.updateScore(h,a.shipsLeft()),n().changeTurn();const S=t(),m=o.renderGameBoard(S.board);m.board.className="cpu-board",c.appendChild(m.board),S.placeShip(e("patrol",2),[["F",9],["G",9]]),S.placeShip(e("submarine",3),[["A",5],["A",6],["A",7]]),S.placeShip(e("destroyer",3),[["D",5],["E",5],["F",5]]),S.placeShip(e("battleship",4),[["H",1],["H",2],["H",3],["H",4]]),S.placeShip(e("carrier",5),[["J",6],["J",7],["J",8],["J",9],["J",10]]);const g=document.querySelectorAll(".cpu-board div");m.renderPlacements(S.playerShips,g),l.updateScore(u,S.shipsLeft()),g.forEach((e=>{e.addEventListener("click",(e=>{let t=e.currentTarget.textContent.split(",");t.splice(1,1,Number(t[1])),s.makeAttack(t,S.board,S.receiveAttack),m.renderShots(S.hits(),S.missedShots(),g),l.updateScore(u,S.shipsLeft()),console.log(S.missedShots()),console.log(S.hits())}))}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUksQ0FBQyxDQUFDLElBQUssR0FBSSxDQUFDLElBQUssR0FBSSxDQUFDLElBQUssS0FDekVvRixFQUFjckYsVUFBVUMsRUFBSyxZQUFhLEdBQUksQ0FBQyxDQUFDLElBQUssR0FBSSxDQUFDLElBQUssR0FBSSxDQUFDLElBQUssS0FDekVvRixFQUFjckYsVUFBVUMsRUFBSyxhQUFjLEdBQUksQ0FBQyxDQUFDLElBQUssR0FBSSxDQUFDLElBQUssR0FBSSxDQUFDLElBQUssR0FBSSxDQUFDLElBQUssS0FDcEZvRixFQUFjckYsVUFBVUMsRUFBSyxVQUFXLEdBQUksQ0FBQyxDQUFDLElBQUssR0FBSSxDQUFDLElBQUssR0FBSSxDQUFDLElBQUssR0FBSSxDQUFDLElBQUssR0FBSSxDQUFDLElBQUssTUFFM0YsTUFBTXNGLEVBQVkvQyxTQUFTMkMsaUJBQWlCLGtCQUM1Q0csRUFBZ0I1QixpQkFBaUIyQixFQUFjbEcsWUFBYW9HLEdBRzVEMUIsRUFBaUJNLFlBQVlILEVBQWNxQixFQUFjckUsYUFTekR1RSxFQUFVcEMsU0FBUXFDLElBQ2RBLEVBQUlDLGlCQUFpQixTQUFVQyxJQUUzQixJQUNJL0YsRUFEWStGLEVBQUVDLGNBQWM5QyxZQUNUUyxNQUFNLEtBQzdCM0QsRUFBTzRELE9BQU8sRUFBRyxFQUFHQyxPQUFPN0QsRUFBTyxLQUVsQ2tGLEVBQVE1QyxXQUFXdEMsRUFBUTBGLEVBQWM3RixNQUFPNkYsRUFBYzlFLGVBRzlEK0UsRUFBZ0IzQixZQUFZMEIsRUFBYy9GLE9BQVErRixFQUFjaEcsY0FBZWtHLEdBRy9FMUIsRUFBaUJNLFlBQVlILEVBQWNxQixFQUFjckUsYUFDekQ0RSxRQUFRQyxJQUFJUixFQUFjaEcsZUFDMUJ1RyxRQUFRQyxJQUFJUixFQUFjL0YsT0FBTyxHQUNuQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVMb29wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBnYW1lYm9hcmQgZmFjdG9yeVxyXG5cclxuY29uc3QgZ2FtZUJvYXJkID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHBsYXllclNoaXBzID0ge307XHJcblxyXG4gICAgY29uc3QgYm9hcmRTdGF0dXMgPSB7XHJcbiAgICAgICAgbWlzc2VkU2hvdHM6IFtdLFxyXG4gICAgICAgIGhpdHM6IFtdLFxyXG4gICAgICAgIHNoaXBzU3VuazogMCxcclxuICAgIH07XHJcblxyXG4gICAgLy8gY3JlYXRlIGdyaWRcclxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBib2FyZCA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gNjU7IGkgPD0gNzQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRzID0gW1N0cmluZy5mcm9tQ2hhckNvZGUoaSksIGpdO1xyXG4gICAgICAgICAgICAgICAgYm9hcmQucHVzaChjb29yZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgYWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rXHJcbiAgICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZTaGlwcyA9IE9iamVjdC5rZXlzKHBsYXllclNoaXBzKS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGJvYXJkU3RhdHVzLnNoaXBzU3VuayA9PT0gbnVtYmVyT2ZTaGlwcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgbWlzc2VkIHNob3RzXHJcbiAgICBjb25zdCBtaXNzZWRTaG90cyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYm9hcmRTdGF0dXMubWlzc2VkU2hvdHM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IGhpdHNcclxuICAgIGNvbnN0IGhpdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkU3RhdHVzLmhpdHM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IHNoaXBzIHN1bmtcclxuICAgIGNvbnN0IHNoaXBzTGVmdCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gNSAtIGJvYXJkU3RhdHVzLnNoaXBzU3VuaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBwbGFjZXNoaXAgbWV0aG9kXHJcbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgcGxhY2VtZW50KSA9PiB7XHJcbiAgICAgICAgLy8gY2hlY2sgdGhhdCBzaGlwIGxlbmd0aCA9PSBjb29yZHMgbGVuZ3RoXHJcbiAgICAgICAgaWYgKHNoaXAuZ2V0TGVuZ3RoKCkgIT09IHBsYWNlbWVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdpbmNvcnJlY3QgcGxhY2VtZW50JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHRoYXQgY29vcmRzIGFyZSB2YWxpZChhZGphY2VudCBhbmQgbm90IG9jY3VwaWVkKVxyXG5cclxuICAgICAgICAvLyBhZGQgc2hpcCB0byBwbGF5ZXIgc2hpcHNcclxuICAgICAgICBjb25zdCBuYW1lID0gc2hpcC5nZXROYW1lKCk7XHJcbiAgICAgICAgcGxheWVyU2hpcHNbbmFtZV0gPSBbXTtcclxuICAgICAgICBwbGF5ZXJTaGlwc1tuYW1lXVswXSA9IHNoaXA7XHJcbiAgICAgICAgcGxheWVyU2hpcHNbbmFtZV1bMV0gPSBbLi4ucGxhY2VtZW50XTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBsYXllclNoaXBzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlY2VpdmUgYXR0YWNrIG1ldGhvZFxyXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZHMpID0+IHtcclxuICAgICAgICAvLyBjaGVjayBpZiBjb29yZHMgYXJlIHZhbGlkICAgP1xyXG4gICAgICAgIC8vIGNoZWNrIGJvYXJkIGFuZCBtaXNzZWQgc2hvdHNcclxuICAgICAgICAvLyBzZWFyY2ggcGxheWVyIHBsYWNlbWVudHMgZm9yIGNvb3Jkc1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBpbiBwbGF5ZXJTaGlwcykge1xyXG4gICAgICAgICAgICBsZXQgcGxhY2VtZW50c0FyciA9IHBsYXllclNoaXBzW3NoaXBdWzFdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYWNlbWVudHNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChmb3VuZCkgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgIGlmIChjb29yZHMudG9TdHJpbmcoKSA9PT0gcGxhY2VtZW50c0FycltpXS50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGhpdCB0byBzaGlwXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcHNbc2hpcF1bMF0uaGl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRvIHJlY29yZGVkIHNob3RzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkU3RhdHVzLmhpdHMucHVzaChjb29yZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHNoaXAgaXMgc3Vua1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJTaGlwc1tzaGlwXVswXS5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZFN0YXR1cy5zaGlwc1N1bmsrKztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsgKlxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKCFmb3VuZCkgYWRkIHRvIG1pc3NlZCBzaG90cyBhbmQgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgYm9hcmRTdGF0dXMubWlzc2VkU2hvdHMucHVzaChjb29yZHMpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHsgYm9hcmQsIHBsYWNlU2hpcCwgcGxheWVyU2hpcHMsIHJlY2VpdmVBdHRhY2ssIG1pc3NlZFNob3RzLCBoaXRzLCBhbGxTaGlwc1N1bmssIHNoaXBzTGVmdCB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVCb2FyZDsiLCIvLyBnZXQgcmFuZG9tIG51bSBpbmNsdXNpdmUgbWluIGFuZCBtYXhcclxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XHJcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcclxuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjb21wYXJlQXJyYXlzKGFycjEsIGFycjIpIHtcclxuLy8gICAgIGlmIChhcnIxLnRvU3RyaW5nKCkgPT09IGFycjIudG9TdHJpbmcoKSkge1xyXG4vLyAgICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIGZhbHNlXHJcbi8vIH1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ2V0UmFuZG9tSW50SW5jbHVzaXZlO1xyXG4iLCJjb25zdCBnZXRSYW5kb21JbnRJbmNsdXNpdmUgPSByZXF1aXJlKFwiLi4vc3JjL2hlbHBlclwiKVxyXG5cclxuLy8gY3JlYXRlIGEgcGxheWVyXHJcbmNvbnN0IHBsYXllciA9IChuYW1lKSA9PiB7XHJcblxyXG4gICAgbGV0IG15VHVybiA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgYXR0YWNrc01hZGUgPSBbXTtcclxuXHJcbiAgICBjb25zdCBpc1R1cm4gPSAoKSA9PiB7IHJldHVybiBteVR1cm4gfTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VUdXJuID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChteVR1cm4pIHtcclxuICAgICAgICAgICAgbXlUdXJuID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG15VHVybiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjaGVjayBpZiBhIG1vdmUgaXMgdmFsaWRcclxuICAgIGNvbnN0IGlzdmFsaWRNb3ZlID0gKGNvb3JkcywgYXR0YWNrc01hZGUsIGJvYXJkKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCB2YWxpZCA9IGZhbHNlXHJcbiAgICAgICAgLy8gY2hlY2sgY29vcmRzIGFuZCBhcnJheSBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dGFja3NNYWRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbXBhcmUgYm9hcmRbaV0gd2l0aCBjb29yZHNcclxuICAgICAgICAgICAgaWYgKGNvb3Jkcy50b1N0cmluZygpID09PSBhdHRhY2tzTWFkZVtpXS50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGNvb3JkcyBpbiBib2FyZFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29tcGFyZSBib2FyZFtpXSB3aXRoIGNvb3Jkc1xyXG4gICAgICAgICAgICBpZiAoY29vcmRzLnRvU3RyaW5nKCkgPT09IGJvYXJkW2ldLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZW50ZXIgY29vcmRpbmF0ZXMgdG8gYXR0YWNrIG9uIGVuZW15IGJvYXJkXHJcbiAgICBjb25zdCBtYWtlQXR0YWNrID0gKGNvb3JkcywgZW5lbXlCb2FyZCwgcmVjZWl2ZUF0dGFjaykgPT4ge1xyXG4gICAgICAgIC8vIGNoZWNrIGNvcnJlY3QgdHVyblxyXG4gICAgICAgIGlmIChteVR1cm4pIHtcclxuICAgICAgICAgICAgLy8gc2VlIGlmIGNvb3JkcyBhcmUgdmFsaWRcclxuICAgICAgICAgICAgaWYgKGlzdmFsaWRNb3ZlKGNvb3JkcywgYXR0YWNrc01hZGUsIGVuZW15Qm9hcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRhY2tzTWFkZS5wdXNoKGNvb3Jkcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpdmVBdHRhY2soY29vcmRzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ludmFsaWQgY29vcmRpbmF0ZXMnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICdub3QgeW91ciB0dXJuJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgcmFuZG9tIGNvb3JkcyBnaXZlbiBhIGJvYXJkXHJcbiAgICBjb25zdCBnZXRSYW5kb21Db29yZHMgPSAoZW5lbXlCb2FyZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvYXJkTGVuZ3RoID0gZW5lbXlCb2FyZC5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tTnVtID0gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKDAsIGJvYXJkTGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tQ29vcmRzID0gZW5lbXlCb2FyZFtyYW5kb21OdW1dO1xyXG5cclxuICAgICAgICByZXR1cm4gcmFuZG9tQ29vcmRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1ha2UgYSB2YWxpZCByYW5kb20gYXR0YWNrXHJcbiAgICBjb25zdCBtYWtlUmFuZG9tQXR0YWNrID0gKGVuZW15Qm9hcmQpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKG15VHVybikge1xyXG4gICAgICAgICAgICAvLyBnZXQgcmFuZG9tIGNvb3Jkc1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tQ29vcmRzID0gZ2V0UmFuZG9tQ29vcmRzKGVuZW15Qm9hcmQpO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKCFpc3ZhbGlkTW92ZShyYW5kb21Db29yZHMsIGF0dGFja3NNYWRlLCBlbmVteUJvYXJkKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZ2V0IG5ldyBjb29yZHMgd2hpbGUgaW52YWxpZFxyXG4gICAgICAgICAgICAgICAgcmFuZG9tQ29vcmRzID0gZ2V0UmFuZG9tQ29vcmRzKGVuZW15Qm9hcmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBtYWtlIGF0dGFja1xyXG4gICAgICAgICAgICAvLyBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tQ29vcmRzKTtcclxuICAgICAgICAgICAgYXR0YWNrc01hZGUucHVzaChyYW5kb21Db29yZHMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGBhdHRhY2sgbWFkZSBhdCAke3JhbmRvbUNvb3Jkc31gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICdub3QgeW91ciB0dXJuJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBpc1R1cm4sIGNoYW5nZVR1cm4sIG1ha2VBdHRhY2ssIG1ha2VSYW5kb21BdHRhY2ssIG5hbWUgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXI7IiwiLy8gc2hpcCBmYWN0b3J5IGZ1bmN0aW9uXHJcbmNvbnN0IHNoaXAgPSAobmFtZSwgbGVuZ3RoKSA9PiB7XHJcblxyXG4gICAgbGV0IGhpdHMgPSAwO1xyXG4gICAgbGV0IGJlZW5TdW5rID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdHM7XHJcbiAgICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XHJcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcclxuXHJcbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaGl0cysrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIWJlZW5TdW5rICYmIGxlbmd0aCA9PT0gaGl0cykge1xyXG4gICAgICAgICAgICBiZWVuU3VuayA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJlZW5TdW5rO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGdldExlbmd0aCwgZ2V0SGl0cywgZ2V0TmFtZSwgaGl0LCBpc1N1bmsgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzaGlwOyIsIi8vIGRvbSBtb2R1bGVcclxuLy8gMS4gZGlzcGxheSBib3RoIHBsYXllcnMgYm9hcmRzIHJlbmRlciB0aGVtIHVzaW5nIGluZm8gZnJvbSBnYW1lYm9hcmQgY2xhc3MvZmFjdG9yeVxyXG4vLyAyLiBsZXQgdXNlciBjbGljayBvbiBjb29yZCBpbiBlbmVteSBib2FyZFxyXG5cclxuY29uc3QgcmVuZGVyR2FtZUJvYXJkID0gKGdhbWVCb2FyZCkgPT4ge1xyXG5cclxuICAgIC8vIHJlbmRlciBib2FyZFxyXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllci1ib2FyZFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVCb2FyZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIC8vIGNyZWF0ZSBibG9ja1xyXG4gICAgICAgIGxldCBjb29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29vcmQudGV4dENvbnRlbnQgPSBgJHtnYW1lQm9hcmRbal0udG9TdHJpbmcoKX1gO1xyXG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNvb3JkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmdW5jdGlvbiB0byBzdHlsZSBjb29yZHMgZGVwZW5kaW5nIG9uIHN0YXR1c1xyXG4gICAgY29uc3Qgc3R5bGVDb29yZHMgPSAodHlwZUFyciwgY29vcmRzQXJyLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIC8vIGxvb3Agb3ZlciB0eXBlIGFycmF5XHJcbiAgICAgICAgdHlwZUFyci5mb3JFYWNoKHR5cGUgPT4ge1xyXG4gICAgICAgICAgICAvLyBsb29wIG92ZXIgY29vcmRzQXJyXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheUNvb3JkcyA9IGNvb3Jkc0FycltpXS50ZXh0Q29udGVudC5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29vcmRzLnNwbGljZSgxLCAxLCBOdW1iZXIoZGlzcGxheUNvb3Jkc1sxXSkpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdHJ1ZSBhZGQgc3R5bGVcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlLnRvU3RyaW5nKCkgPT09IGRpc3BsYXlDb29yZHMudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkc0FycltpXS5jbGFzc05hbWUgPSBzdHlsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyByZW5kZXIgcGxhY2VtZW50IG9mIHNoaXBzIFxyXG4gICAgY29uc3QgcmVuZGVyUGxhY2VtZW50cyA9IChwbGF5ZXJTaGlwcywgY29vcmRzQXJyKSA9PiB7XHJcbiAgICAgICAgLy8gY2hhbmdlIGJhY2tncm91bmRDb2xvciBvZiBjb29yZHNcclxuICAgICAgICBmb3IgKHNoaXAgaW4gcGxheWVyU2hpcHMpIHtcclxuICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50c0FyciA9IHBsYXllclNoaXBzW3NoaXBdWzFdO1xyXG5cclxuICAgICAgICAgICAgc3R5bGVDb29yZHMocGxhY2VtZW50c0FyciwgY29vcmRzQXJyLCBcInBsYWNlbWVudFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIHVpIGFmdGVyIGVuZW15IGhhcyBtYWRlIGF0dGFja1xyXG4gICAgY29uc3QgcmVuZGVyU2hvdHMgPSAoaGl0cywgbWlzc2VzLCBjb29yZHNBcnIpID0+IHtcclxuXHJcbiAgICAgICAgc3R5bGVDb29yZHMoaGl0cywgY29vcmRzQXJyLCBcImhpdFwiKTtcclxuICAgICAgICBzdHlsZUNvb3JkcyhtaXNzZXMsIGNvb3Jkc0FyciwgXCJtaXNzZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVuZGVyIGF0dGFja3NcclxuXHJcbiAgICByZXR1cm4geyBib2FyZCwgcmVuZGVyUGxhY2VtZW50cywgcmVuZGVyU2hvdHMgfTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyU2NvcmVCb2FyZCA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBtZXRob2QgdG8gY3JlYXRlIHNjb3JlYm9hcmRcclxuICAgIGNvbnN0IGNyZWF0ZVNjb3JlQm9hcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyMVNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29uc3QgcGxheWVyMlNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29uc3Qgc2NvcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgICBwbGF5ZXIxU2NvcmUuY2xhc3NMaXN0LmFkZChcInBsYXllcjFcIik7XHJcbiAgICAgICAgcGxheWVyMlNjb3JlLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXIyXCIpO1xyXG4gICAgICAgIHNjb3JlRGl2LmNsYXNzTGlzdC5hZGQoXCJzY29yZWJvYXJkXCIpO1xyXG5cclxuICAgICAgICBzY29yZURpdi5hcHBlbmQocGxheWVyMVNjb3JlLCBwbGF5ZXIyU2NvcmUpO1xyXG5cclxuICAgICAgICByZXR1cm4gc2NvcmVEaXY7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG1ldGhvZCB0byB1cGRhdGUgc2NvcmVcclxuICAgIGNvbnN0IHVwZGF0ZVNjb3JlID0gKHBsYXllciwgcGxheWVyU2hpcFN0YXR1cykgPT4ge1xyXG4gICAgICAgIC8vIGhvdyBtYW55IHNoaXBzIGRvZXMgcGxheWVyIGhhdmUgbGVmdD8qXHJcblxyXG4gICAgICAgIC8vIGhvdyBlbmVteSBzaGlwcyBhcmUgbGVmdD9cclxuICAgICAgICBjb25zdCBwbGF5ZXJTaGlwcyA9IHBsYXllclNoaXBTdGF0dXM7XHJcbiAgICAgICAgLy8gdXBkYXRlIHRleHQgY29udGVudCBvZiBwXHJcbiAgICAgICAgcGxheWVyLnRleHRDb250ZW50ID0gYHNoaXBzIGxlZnQ6ICR7cGxheWVyU2hpcHN9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBjcmVhdGVTY29yZUJvYXJkLCB1cGRhdGVTY29yZSB9O1xyXG59XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXJHYW1lQm9hcmQsIHJlbmRlclNjb3JlQm9hcmQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3Qgc2hpcCA9IHJlcXVpcmUoXCIuL3NoaXBcIik7XHJcbmNvbnN0IGdhbWVCb2FyZCA9IHJlcXVpcmUoXCIuL2dhbWVCb2FyZFwiKTtcclxuY29uc3QgcGxheWVyID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xyXG5jb25zdCB1aSA9IHJlcXVpcmUoXCIuL3VpXCIpO1xyXG5cclxuXHJcbi8vIG1haW4gZ2FtZWxvb3BcclxuLy8gMS4gc2V0dXAgcGxheWVycyBhbmQgZ2FtZWJvYXJkcyB3aXRoIHByZWRldGVybWluZWQgY29vcmRzXHJcbi8vIDIuIHN0ZXBzIHRocm91Z2ggZ2FtZSB0dXJuIGJ5IHR1cm4gdXNpbmcgb25seSBtZXRob2RzIGZyb20gb3RoZXIgb2JqZWN0c1xyXG5cclxuLy8gY3JlYXRlIHBsYXllciBcclxuY29uc3QgcGxheWVyMSA9IHBsYXllcigpO1xyXG5cclxuLy8gY3JlYXRlIGdhbWVib2FyZFxyXG5jb25zdCBwbGF5ZXIxX2dhbWVCb2FyZCA9IGdhbWVCb2FyZCgpO1xyXG5cclxuLy8gcmVuZGVyIGdhbWVib2FyZFxyXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG5jb25zdCBkaXNwbGF5Qm9hcmQgPSB1aS5yZW5kZXJHYW1lQm9hcmQocGxheWVyMV9nYW1lQm9hcmQuYm9hcmQpO1xyXG5cclxuLy8gc2NvcmVib2FyZFxyXG5jb25zdCByZW5kZXJTY29yZUJvYXJkID0gdWkucmVuZGVyU2NvcmVCb2FyZCgpO1xyXG5jb25zdCBzY29yZUJvYXJkID0gcmVuZGVyU2NvcmVCb2FyZC5jcmVhdGVTY29yZUJvYXJkKCk7XHJcblxyXG4vLyBnZXQgcCBlbGVtZW50cyBmb3IgYm90aCBwbGF5ZXJzXHJcblxyXG4vLyB0byB1cGRhdGUgc2NvcmVib2FyZDogcmVuZGVyU2NvcmVCb2FyZC51cGRhdGVTY29yZShwbGF5ZXJzY29yZUVsZW1lbnQsIHBsYXllckJvYXJkLnNoaXBzTGVmdCgpKTtcclxuXHJcbm1haW5Db250ZW50LmFwcGVuZChzY29yZUJvYXJkLCBkaXNwbGF5Qm9hcmQuYm9hcmQpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcclxuXHJcbi8vIHBsYWNlc2hpcFxyXG5cclxucGxheWVyMV9nYW1lQm9hcmQucGxhY2VTaGlwKHNoaXAoXCJwYXRyb2xcIiwgMiksIFtbXCJCXCIsIDNdLCBbXCJCXCIsIDRdXSk7XHJcbnBsYXllcjFfZ2FtZUJvYXJkLnBsYWNlU2hpcChzaGlwKFwic3VibWFyaW5lXCIsIDMpLCBbW1wiRVwiLCA4XSwgW1wiRlwiLCA4XSwgW1wiR1wiLCA4XV0pXHJcbnBsYXllcjFfZ2FtZUJvYXJkLnBsYWNlU2hpcChzaGlwKFwiZGVzdHJveWVyXCIsIDMpLCBbW1wiQ1wiLCA2XSwgW1wiQ1wiLCA3XSwgW1wiQ1wiLCA4XV0pO1xyXG5wbGF5ZXIxX2dhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcChcImJhdHRsZXNoaXBcIiwgNCksIFtbXCJDXCIsIDJdLCBbXCJEXCIsIDJdLCBbXCJFXCIsIDJdLCBbXCJGXCIsIDJdXSk7XHJcbnBsYXllcjFfZ2FtZUJvYXJkLnBsYWNlU2hpcChzaGlwKFwiY2FycmllclwiLCA1KSwgW1tcIklcIiwgNV0sIFtcIklcIiwgNl0sIFtcIklcIiwgN10sIFtcIklcIiwgOF0sIFtcIklcIiwgOV1dKTtcclxuXHJcbmNvbnN0IGNvb3Jkc0FyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLWJvYXJkIGRpdlwiKTtcclxuXHJcbmNvbnN0IHBsYXllcjFTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMVwiKTtcclxuY29uc3QgcGxheWVyMlNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyXCIpO1xyXG5kaXNwbGF5Qm9hcmQucmVuZGVyUGxhY2VtZW50cyhwbGF5ZXIxX2dhbWVCb2FyZC5wbGF5ZXJTaGlwcywgY29vcmRzQXJyKTtcclxuXHJcblxyXG4vLyB1cGRhdGUgcGxheWVyMSBzY29yZWJvYXJkXHJcbnJlbmRlclNjb3JlQm9hcmQudXBkYXRlU2NvcmUocGxheWVyMVNjb3JlLCBwbGF5ZXIxX2dhbWVCb2FyZC5zaGlwc0xlZnQoKSk7XHJcblxyXG5cclxuLy8gY3JlYXRlIGNwdSBwbGF5ZXJcclxuY29uc3QgcGxheWVyQ3B1ID0gcGxheWVyKCk7XHJcblxyXG4vLyBjaGFuZ2UgY3B1IHBsYXllciB0dXJuXHJcbnBsYXllckNwdS5jaGFuZ2VUdXJuKCk7XHJcblxyXG4vLyBjcHUgYm9hcmRcclxuY29uc3QgY3B1X2dhbWVCb2FyZCA9IGdhbWVCb2FyZCgpO1xyXG5cclxuY29uc3QgZGlzcGxheUNwdUJvYXJkID0gdWkucmVuZGVyR2FtZUJvYXJkKGNwdV9nYW1lQm9hcmQuYm9hcmQpO1xyXG5kaXNwbGF5Q3B1Qm9hcmQuYm9hcmQuY2xhc3NOYW1lID0gXCJjcHUtYm9hcmRcIjtcclxubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcGxheUNwdUJvYXJkLmJvYXJkKTtcclxuXHJcbmNwdV9nYW1lQm9hcmQucGxhY2VTaGlwKHNoaXAoXCJwYXRyb2xcIiwgMiksIFtbXCJGXCIsIDldLCBbXCJHXCIsIDldXSk7XHJcbmNwdV9nYW1lQm9hcmQucGxhY2VTaGlwKHNoaXAoXCJzdWJtYXJpbmVcIiwgMyksIFtbXCJBXCIsIDVdLCBbXCJBXCIsIDZdLCBbXCJBXCIsIDddXSlcclxuY3B1X2dhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcChcImRlc3Ryb3llclwiLCAzKSwgW1tcIkRcIiwgNV0sIFtcIkVcIiwgNV0sIFtcIkZcIiwgNV1dKTtcclxuY3B1X2dhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcChcImJhdHRsZXNoaXBcIiwgNCksIFtbXCJIXCIsIDFdLCBbXCJIXCIsIDJdLCBbXCJIXCIsIDNdLCBbXCJIXCIsIDRdXSk7XHJcbmNwdV9nYW1lQm9hcmQucGxhY2VTaGlwKHNoaXAoXCJjYXJyaWVyXCIsIDUpLCBbW1wiSlwiLCA2XSwgW1wiSlwiLCA3XSwgW1wiSlwiLCA4XSwgW1wiSlwiLCA5XSwgW1wiSlwiLCAxMF1dKTtcclxuXHJcbmNvbnN0IGNwdUNvb3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3B1LWJvYXJkIGRpdlwiKTtcclxuZGlzcGxheUNwdUJvYXJkLnJlbmRlclBsYWNlbWVudHMoY3B1X2dhbWVCb2FyZC5wbGF5ZXJTaGlwcywgY3B1Q29vcmRzKTtcclxuXHJcbi8vIHVwZGF0ZSBjcHUgc2NvcmVib2FyZFxyXG5yZW5kZXJTY29yZUJvYXJkLnVwZGF0ZVNjb3JlKHBsYXllcjJTY29yZSwgY3B1X2dhbWVCb2FyZC5zaGlwc0xlZnQoKSk7XHJcblxyXG4vLyBtYW5hZ2UgdHVyblxyXG5cclxuXHJcbi8vIHBsYXllciB3aXRoIGN1cnJlbnQgdHVybiBtYWtlcyBhdHRhY2tcclxuXHJcblxyXG4vLyBhZGQgZXZlbnRsaXN0ZW5lciBpZiBwbGF5ZXIgMSB0dXJuIChjbGljayBhdHRhY2spXHJcbmNwdUNvb3Jkcy5mb3JFYWNoKGRpdiA9PiB7XHJcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIC8vIGdldCBhdHRhY2sgY29vcmRzXHJcbiAgICAgICAgbGV0IGdldENvb3JkcyA9IGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudDtcclxuICAgICAgICBsZXQgY29vcmRzID0gZ2V0Q29vcmRzLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgY29vcmRzLnNwbGljZSgxLCAxLCBOdW1iZXIoY29vcmRzWzFdKSk7XHJcbiAgICAgICAgLy8gcnVuIG1ha2UgYXR0YWNrIGZ1bmN0aW9uXHJcbiAgICAgICAgcGxheWVyMS5tYWtlQXR0YWNrKGNvb3JkcywgY3B1X2dhbWVCb2FyZC5ib2FyZCwgY3B1X2dhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIGJvYXJkIHVpXHJcbiAgICAgICAgZGlzcGxheUNwdUJvYXJkLnJlbmRlclNob3RzKGNwdV9nYW1lQm9hcmQuaGl0cygpLCBjcHVfZ2FtZUJvYXJkLm1pc3NlZFNob3RzKCksIGNwdUNvb3Jkcyk7XHJcblxyXG4gICAgICAgIC8vdXBkYXRlIHNjb3JlIFxyXG4gICAgICAgIHJlbmRlclNjb3JlQm9hcmQudXBkYXRlU2NvcmUocGxheWVyMlNjb3JlLCBjcHVfZ2FtZUJvYXJkLnNoaXBzTGVmdCgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjcHVfZ2FtZUJvYXJkLm1pc3NlZFNob3RzKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNwdV9nYW1lQm9hcmQuaGl0cygpKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIHBsYXllcjEubWFrZVJhbmRvbUF0dGFjayhjcHVfZ2FtZUJvYXJkLmJvYXJkKTtcclxuXHJcblxyXG4vLyByZWNlaXZlIGF0dGFjayBvbiBlbmVteSBib2FyZFxyXG5cclxuXHJcbi8vIHJlcG9ydCBtaXNzLCBoaXQsIHNoaXBzdW5rXHJcblxyXG5cclxuLy8gdXBkYXRlIHVpXHJcblxyXG5cclxuLy8gY2hlY2sgaWYgZ2FtZW92ZXJcclxuXHJcblxyXG4vLyBjaGFuZ2UgdHVyblxyXG5cclxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJwbGF5ZXJTaGlwcyIsImJvYXJkU3RhdHVzIiwibWlzc2VkU2hvdHMiLCJoaXRzIiwic2hpcHNTdW5rIiwiYm9hcmQiLCJpIiwiaiIsImNvb3JkcyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInB1c2giLCJjcmVhdGVCb2FyZCIsInBsYWNlU2hpcCIsInNoaXAiLCJwbGFjZW1lbnQiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJuYW1lIiwiZ2V0TmFtZSIsInJlY2VpdmVBdHRhY2siLCJwbGFjZW1lbnRzQXJyIiwidG9TdHJpbmciLCJoaXQiLCJpc1N1bmsiLCJhbGxTaGlwc1N1bmsiLCJudW1iZXJPZlNoaXBzIiwiT2JqZWN0Iiwia2V5cyIsInNoaXBzTGVmdCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRSYW5kb21JbnRJbmNsdXNpdmUiLCJteVR1cm4iLCJhdHRhY2tzTWFkZSIsImlzdmFsaWRNb3ZlIiwidmFsaWQiLCJnZXRSYW5kb21Db29yZHMiLCJlbmVteUJvYXJkIiwiYm9hcmRMZW5ndGgiLCJpc1R1cm4iLCJjaGFuZ2VUdXJuIiwibWFrZUF0dGFjayIsIm1ha2VSYW5kb21BdHRhY2siLCJyYW5kb21Db29yZHMiLCJiZWVuU3VuayIsImdldEhpdHMiLCJyZW5kZXJHYW1lQm9hcmQiLCJnYW1lQm9hcmQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb29yZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJzdHlsZUNvb3JkcyIsInR5cGVBcnIiLCJjb29yZHNBcnIiLCJzdHlsZSIsImZvckVhY2giLCJ0eXBlIiwiZGlzcGxheUNvb3JkcyIsInNwbGl0Iiwic3BsaWNlIiwiTnVtYmVyIiwiY2xhc3NOYW1lIiwicmVuZGVyUGxhY2VtZW50cyIsInJlbmRlclNob3RzIiwibWlzc2VzIiwicmVuZGVyU2NvcmVCb2FyZCIsImNyZWF0ZVNjb3JlQm9hcmQiLCJwbGF5ZXIxU2NvcmUiLCJwbGF5ZXIyU2NvcmUiLCJzY29yZURpdiIsImFwcGVuZCIsInVwZGF0ZVNjb3JlIiwicGxheWVyIiwicGxheWVyU2hpcFN0YXR1cyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJ1aSIsInBsYXllcjEiLCJwbGF5ZXIxX2dhbWVCb2FyZCIsIm1haW5Db250ZW50IiwiZGlzcGxheUJvYXJkIiwic2NvcmVCb2FyZCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVlcnlTZWxlY3RvciIsImNwdV9nYW1lQm9hcmQiLCJkaXNwbGF5Q3B1Qm9hcmQiLCJjcHVDb29yZHMiLCJkaXYiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==