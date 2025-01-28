function splitStringUsingRegex(inputString:string): string[]{
    const characters: string[] = [];
    const regex = /[\s\S]/gu;

    let match;
    while((match = regex.exec(inputString)) !== null) {
        characters.push(match[0])
    }
    if(characters) return characters
    return ['']
}
export default splitStringUsingRegex;

// USAGE
// { SPLIT STRING.map((char) => (
//     <motion.b key={char} transition={{duration: .2}} variants={charVariants}>
//         {char}
//     </motion.b>
// ))}