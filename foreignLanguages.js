function foreignLanguages(language) {
    let result = 0;

    switch (language) {
        case 'USA': result = 'English';
            break;
        case 'England': result = 'English';
            break;
        case 'Spain': result = 'Spanish';
            break;
        case 'Argentina': result = 'Spanish';
            break;
        case 'Mexico': result = 'Spanish';
            break;
        default: result = 'unknown';
            break;
    }
    console.log(result);
}

foreignLanguages('USA');
foreignLanguages('Germany');