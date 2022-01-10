export default (req, res) => {
    const {
        query: {id},
    } = req

    res.end(`post:${id}`)
}