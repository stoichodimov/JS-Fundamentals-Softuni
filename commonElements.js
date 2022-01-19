function commonElements(firstArray, secondArray) {

    for (let i = 0; i < firstArray.length; i++) {
        let currentFirstElement = firstArray[i];

        for (let j = 0; j < secondArray.length; j++) {
            let currentSecondElement = secondArray[j];

            if (currentFirstElement === currentSecondElement) {
                console.log(currentFirstElement);
            }
        }
    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);