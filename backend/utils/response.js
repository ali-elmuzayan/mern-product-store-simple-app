/**
 * a parent function for the response structue
 */
const sendRes = (res, statusCode, status, message = null, data = null, results = null) => {
    const response = {status};
    if (message) response.message = message;
    if (data) response.data = data;
    if (results) response.results = results;
    res.status(statusCode).json(response);
}


/**
 * success response with status 200
 */


export const getAllDataRes = (res, data) => {
    res.status(200).json({
        status: 'success',
        results: Array.isArray(data) ? data.length : undefined,
        data:{
            data
        }
    })
}



/**
 * success response with status 200
 */
export const success = (res, data, message = 'data founded successfully ') => {
    res.status(200).json({
        status: 'success',
        message: message,
        results: Array.isArray(data) ? data.length : undefined,
        data:{
            data
        }
    })
}

/**
 * created response successfully get
 */
export const createdSuccess= (res, data, message = 'crated successfully') => {
    res.status(201).json({
        status: 'success',
        message: message,
        data: {
            data
        }
    })
}


/**
 * No Data
 */
export const noData = (res, message = 'no data') => {
    res.status(204).json({
        status: 'success',
        message: message,
    })
}

/**
 * when an unexpected error occurs (500 internal server error)
 *  - like error happen due to a try-catch (database failure, server crash)
 */
export const serverError = (res, message = 'server error') => {
    res.status(500).json({
        status: 'error',
        message: message
    })
}

/**
 * bad request response
 *  - missing required fields, wrong data types, invalid input,
 *      or business logic validation
 */
export const badRequest = (res, message = 'Invalid request', errors = null) => {
    res.status(400).json({
        status: 'error',
        message,
        errors
    })
}

/**
 * when the resource is not found or page is not found
 */
export const notFound = (res, message  = 'not found') => {
    res.status(404).json({
        status: 'error',
        message: message
    })
}




/**
 * the comprehensive response
 */
const response = (res) => ({
    // success
        getAllDataRes,
        success: (data, message) => success(res, data, message),
        createdSuccess: (data, message) => createdSuccess(res, data, message),
        noData: (message) => noData(res, message),

    // errors
        notFound: (message) => notFound(res, message),
        badRequest: (message , errors) => badRequest(res, message, errors),
        serverError: (message) => serverError(res, message),

})
export default response