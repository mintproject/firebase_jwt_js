
import request from "request";

const cookieJar = request.jar();

function _sendRequest(rq: any, options: any, storeCredentials: boolean) {
    options.jar = cookieJar;
    options.uri = rq.url;
    request(options, function(err:any, resp:any, body:any) {
        if(err) {
            rq.onError(err);
        }
        else {
            rq.onLoad({
                target: {
                    responseText: body
                }
            });
        }
    });
}


export function getResource(rq: any) {
    let options = {
        method: "GET"
    };
    _sendRequest(rq, options, false);

}
