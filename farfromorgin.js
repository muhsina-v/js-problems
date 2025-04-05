function furth(moves) {
    let left = 0, right = 0, line = 0;

    for (let ch of moves) {
        if (ch==='L') left++;
        else if (ch==='R') right++;
        else line++; 
    }

    return Math.abs(left - right) + line;
}

console.log(furth("L_RL__R"));
