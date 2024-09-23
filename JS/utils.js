
export function InsertTime(text) {
    let n = Number(prompt(`Insert the ${text}`));
    if (isNaN(n) || n < 0) {
        alert("Please insert a valid number");
        InsertTime(text);
    }else {
        return n;
    }
}
