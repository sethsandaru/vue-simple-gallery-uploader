
const AjaxService = {}
let client = '';

/**
 * Get Ajax Client Service
 */
const getAjaxClient = function () {

    // jquery?
    if (window.$ && window.$.ajax) {
        client = 'jquery'
        return window.$.ajax
    }

    // axios?
    if (window.axios) {
        client = 'axios'
        return window.axios
    }

    client = 'fetch'
    return fetch
}

/**
 * Make an Ajax Post Call
 * @param {string} url
 * @param {FormData|Object|null} postData
 * @param {Function|null} successCallback
 * @param {Function|null} errorCallback
 */
AjaxService.postUpload = function (
    url,
    postData,
    successCallback,
    errorCallback
) {
    const ajaxClient = getAjaxClient()

    switch (client) {
        case "jquery":
            ajaxClient({
                url: url,
                data: postData,
                method: "POST",
                enctype: 'multipart/form-data',
                contentType: false,
                processData: false
            })
            .done(successCallback)
            .fail(errorCallback)
            break

        case "axios":
            ajaxClient.post(url, postData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(successCallback)
            .catch(errorCallback)
            break

        case "fetch":
            ajaxClient(url, {
                method: "POST",
                body: postData,
            })
            .then(result => result.json())
            .then(successCallback)
            .catch(errorCallback)
            break
    }
}

/**
 * Make an Ajax Post Call
 * @param {string} url
 * @param {Function|null} successCallback
 * @param {Function|null} errorCallback
 */
AjaxService.delete = function (
    url,
    successCallback,
    errorCallback
) {
    const ajaxClient = getAjaxClient()

    switch (client) {
        case "jquery":
            ajaxClient({
                url: url,
                method: "DELETE"
            })
            .done(successCallback)
            .fail(errorCallback)
            break

        case "axios":
            ajaxClient.delete(url)
                .then(successCallback)
                .catch(errorCallback)
            break

        case "fetch":
            ajaxClient(url, {
                method: "DELETE",
            })
            .then(result => result.json())
            .then(successCallback)
            .catch(errorCallback)
            break
    }
}

export {
    AjaxService
}