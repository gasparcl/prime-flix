const LOCALE = "pt-BR"

const formats = (value) => ({
    toDecimal: ({ decimalCases = 2, ...other } = {}) => {
        if (!value) return value
        return `${Number(value).toLocaleString(LOCALE, {
            minimumFractionDigits: decimalCases,
            maximumFractionDigits: decimalCases,
            ...other,
        })}`
    },
    toPercent: (float) => {
        return parseFloat(value * 100).toFixed(float) + "%"
    },
    toSimpleDate: () => {
        return new Date(value).toLocaleDateString(LOCALE)
    },
    toDate: () => {
        switch (typeof value) {
            case "string":
                return new Date(value).toLocaleDateString(LOCALE, {
                    hour: "2-digit",
                    minute: "2-digit",
                })
            default:
                return value
        }
    },
    toTimeDate: ({ ...options } = {}) => {
        switch (typeof value) {
            case "string":
                return new Date(value).toLocaleTimeString(LOCALE, {
                    ...options,
                })
            default:
                return value
        }
    },
    toISOString: () => {
        switch (typeof value) {
            case "string":
                return new Date(value).toISOString().slice(0, 10)
            default:
                return value
        }
    },
})

export const formatter = (value) => formats(value)
export default formatter
