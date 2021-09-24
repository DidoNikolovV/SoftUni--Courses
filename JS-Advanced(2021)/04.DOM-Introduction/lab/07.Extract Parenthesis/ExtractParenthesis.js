function extract(content) {
    let pattern = /\((.+?)\)/g;
    let contentText = document.getElementById(content).textContent;
    let match = pattern.exec(contentText);
    let result = [];
    while(match) {
        result.push(match[1]);

        match = pattern.exec(contentText);
    }

    return result.join('; ');
}