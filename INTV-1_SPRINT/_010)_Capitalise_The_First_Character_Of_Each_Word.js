function capitaliseBasic(paragraph) {
    let Lowercase = paragraph.toLowerCase()
    let result = Lowercase[0].toUpperCase()
    for (let i = 1; i < Lowercase.length; i++) {
        if (Lowercase[i - 1] === " ") {
            result += Lowercase[i].toUpperCase();
        } else {
            result += Lowercase[i]
        }
    }
    return result

}

console.log(capitaliseBasic("the quick Brown fox jumps over The lazy dog."))