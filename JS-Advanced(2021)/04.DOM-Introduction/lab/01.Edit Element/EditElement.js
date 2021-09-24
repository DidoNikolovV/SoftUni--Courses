function editElement(content, match, replacer) {
        
        let matchElement = new RegExp(match, 'g');
        let contentText = content.textContent;
        let newContent = contentText.replace(matchElement, replacer);
        content.textContent = newContent;   
}