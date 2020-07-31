let response;
exports.lambdaHandler = async (event, context) => {
    try {
        response = {
            node: "hello world from node"
        }  
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
