let storage = localStorage;
let E = 0
let I = 0
let N = 0
let S = 0
let T = 0
let F = 0
let P = 0
let J = 0

const calc = (answer, nextPage) => {
    if(nextPage>0) location.href = `test${nextPage}.html`;
    
    E = Number(storage.getItem('E'));
    I = Number(storage.getItem('I'));
    N = Number(storage.getItem('N'));
    S = Number(storage.getItem('S'));
    T = Number(storage.getItem('T'));
    F = Number(storage.getItem('F'));
    P = Number(storage.getItem('P'));
    J = Number(storage.getItem('J'));

    switch(answer){
        case 'E': E += 1; break;
        case 'I': I += 1; break;
        case 'N': N += 1; break;
        case 'S': S += 1; break;
        case 'T': T += 1; break;
        case 'F': F += 1; break;
        case 'P': P += 1; break;
        case 'J': J += 1; break;
    }
    storage.setItem('E',E);
    storage.setItem('I',I);
    storage.setItem('N',N);
    storage.setItem('S',S);
    storage.setItem('T',T);
    storage.setItem('F',F);
    storage.setItem('P',P);
    storage.setItem('J',J);
}


const goTo = (answer) => {
    calc(answer,0);

    E = Number(storage.getItem('E'));
    I = Number(storage.getItem('I'));
    N = Number(storage.getItem('N'));
    S = Number(storage.getItem('S'));
    T = Number(storage.getItem('T'));
    F = Number(storage.getItem('F'));
    P = Number(storage.getItem('P'));
    J = Number(storage.getItem('J'));

    if (S>=1 && J>=1) location.href = '../clubResult/exerciseClub.html';  
    else if(F==2) location.href = '../clubResult/volunteerClub.html';  
    else if(N>=1 && J>=1) location.href = '../clubResult/computerClub.html';  
    else if(E>=1 && P>=1) location.href = '../clubResult/danceClub.html';  
    else if(S>=1 && T>=1) location.href = '../clubResult/issueClub.html';  
    else if(E>=1 && F>=1) location.href = '../clubResult/ambassador.html';  
    else if(I>=1) location.href = '../clubResult/exerciseClub.html';  
    else if(E>=1) location.href = '../clubResult/volunteerClub.html';  
    else if(T>=1) location.href = '../clubResult/computerClub.html';  
    else if(F>=1) location.href = '../clubResult/danceClub.html';  
    else if(J>=1) location.href = '../clubResult/issueClub.html';  
    else if(N>=1) location.href = '../clubResult/ambassador.html';  

    // alert(`E:${E} I:${I} N:${N} S:${S} F:${F} T:${T} P:${P} J:${J} `);
    storage.clear();
}

