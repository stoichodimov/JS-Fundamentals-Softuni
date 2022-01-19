function distanceBetweenPoints(x1, y1, x2, y2) {
    let width = Math.max(x1, x2) - Math.min(x1, x2);
    let height = Math.max(y1, y2) - Math.min(y1, y2);
    let hypotenuse = Math.sqrt((width ** 2) + (height ** 2));

    console.log(hypotenuse);
}

distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);