var UserModel = {
    init: function(payload) {
        return {
            "id": payload.user_id,
            "name": payload.name,
            "lat": payload.latitude,
            "lon": payload.longitude
        }
    }
}

if (typeof module != 'undefined' && module.exports) {
    module.exports = UserModel;
} else {
    window['UserModel'] = UserModel;
}