// ./api/api-v1/paths/executions.ts
import { auth, firebase_admin } from '../../../../config/firebase';


export default function (userService: any) {
    let operations = {
        POST
    };

    function POST(req: any, res: any, next: any) {
        auth.signInWithEmailAndPassword(req.body.username, req.body.password)
            .then(function () {
                auth.currentUser.getIdToken(true).then(function (idToken) {
                    firebase_admin.auth().verifyIdToken(idToken)
                        .then(function(decodedToken) {
                            res.send({access_token: idToken})
                            res.end()
                        }).catch(function(error) {
                        // Handle error
                    });
                }).catch(function (error) {
                    res.status(401)
                    res.end()
                });
            }).catch(function (error) {
                res.status(401)
                res.end()
        });
    }
    return operations;
}
