let storage = localStorage;
let score = 0

const calc = (answer, nextPage) => {
    location.href = `test${nextPage}.html`;
    score = Number(storage.getItem('score'));
    //정답일때
    if (answer) {
        score += 1;
    }
    else { //오답일 때
        score = score;
    }
    storage.setItem('score',score);
}

const goTo = (answer) => {
    score = Number(storage.getItem('score'));
    //정답일때
    if (answer) {
        score += 1;
    }
    else { //오답일 때
        score = score;
    }
    storage.setItem('score',score);
    
    switch(score){
        case 1 : location.href = `../result/freshman.html`; break;
        case 2 : location.href = `../result/freshman.html`; break;
        case 3 : location.href = `../result/returnStudent.html`; break;
        case 4 : location.href = `../result/returnStudent.html`; break;
        case 5 : location.href = `../result/oldStudent.html`; break;
        case 6 : location.href = `../result/oldStudent.html`; break;
        case 7 : location.href = `../result/fossil.html`; break;
        case 8 : location.href = `../result/fossil.html`; break;
        case 9 : location.href = `../result/fossil.html`; break;
        case 0 : location.href = `../result/professor.html`; break;
        case 10 : location.href = `../result/professor.html`; break;
    }
    storage.removeItem('score');
}

