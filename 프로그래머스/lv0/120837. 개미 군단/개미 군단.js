function solution(hp) {

    var general = Math.floor(hp / 5);
    var soldier = Math.floor((hp -(general*5)) / 3);
    var worker = Math.floor((hp - (general*5)-(soldier*3)) / 1);
    return general + soldier + worker;
}