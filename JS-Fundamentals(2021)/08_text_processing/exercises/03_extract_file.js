function extract(path){
    let pathArr = path.split("\\");
    let file = pathArr.pop();
    let extensionIndex = file.lastIndexOf(".");
    let extension = file.substring(extensionIndex + 1);
    let fileName = file.substring(0, extensionIndex);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
    
    
}

extract('C:\\Internal\\training-internal\\template.bak.pptx');
extract('C:\\Projects\\Data-Structures\\LinkedList.cs');