let response;
exports.lambdaHandler = async (event, context) => {
    try {
        // const ret = await axios(url);
        response = "hello world from node"
                // location: ret.data.trim()"
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
