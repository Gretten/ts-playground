const setAppNum = (num: string): void => {
    const target: HTMLElement = document.getElementById('num-out');
    target.innerHTML = num;
}

setAppNum('1')