/**
 * Permet de mettre la prémière lettre d'un texte en majuscule
 */
exports.ucFirst = (text) => {
    return text[0].toUpperCase() + text.substring(1)
}