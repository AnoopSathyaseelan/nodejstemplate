
//all the business logic implemented here
exports.test = async (req, res) => {
    res.status(200).send({
        Return_Status: 1000,
        Return_message: "all good"
    })
}