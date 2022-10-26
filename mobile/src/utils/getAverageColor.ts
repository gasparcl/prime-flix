import {THEME} from "../theme"

export function getAverageColor(average: number = 0) {
    if (average > 5 && average < 7) return THEME.COLORS.WARNING
    else if (average >= 7) return THEME.COLORS.SUCCESS
    else return THEME.COLORS.ALERT
}
