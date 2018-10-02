
const filter = (array, type) => {
    type === 'time' ?
        direction === 'ascending'
            ? array.sort((a, b) => b.created_at.localeCompare(a.created_at))
            : array.sort((a, b) => a.created_at.localCompare(b.created_at))
        : direction === 'ascending'
            ? array.sort((a, b) => b.votes - a.votes)
            : array.sort((a, b) => a.votes - b.votes)
}

export default filter;