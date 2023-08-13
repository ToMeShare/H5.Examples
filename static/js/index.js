var count = 0
/** 按钮点击事件 */
function clickAdd() {
    count++;
    updateCountDom();
}
/** 更新DOM */
function updateCountDom() {
    document.querySelector("#count").textContent = count;
}
