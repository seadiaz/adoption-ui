
export const getBackgroundColorFromPercentage = (percent) => {
    if (percent === 50) {
        return '#ffff00'
    } else if (percent < 50) {
        const green = Math.ceil(5.1 * percent)
        return `#ff${green.toString(16).padStart(2, '0')}00`
    } else {
        const red = Math.ceil(-5.1 * (percent - 50) + 255)
        return `#${red.toString(16).padStart(2, '0')}ff00`
    }
}

export const getColorFromPercentage = (percent) => {
    if (percent < 30) {
        return `#eeeeee`
    } else {
        return `#333333`
    }
}