var GreatCircle = {
    validateRadius: function(unit) {
        var r = { 'KM': 6371.009, 'M': 6371009, 'MI': 3958.761, 'NM': 3440.070, 'YD': 6967420, 'FT': 20902260 };
        if ( unit in r ) 
            return r[unit];
        else 
            return unit;
    },
    distance: function(lat1, lon1, lat2, lon2, unit) {
        if ( unit === undefined ) 
            unit = 'KM';

        var r = this.validateRadius(unit); 
        lat1 *= Math.PI / 180;
        lon1 *= Math.PI / 180;
        lat2 *= Math.PI / 180;
        lon2 *= Math.PI / 180;
        var lonDelta = lon2 - lon1;
        var a = Math.pow(Math.cos(lat2) * Math.sin(lonDelta) , 2) + Math.pow(Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lonDelta) , 2);
        var b = Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lonDelta);
        var angle = Math.atan2(Math.sqrt(a) , b);
        
        return angle * r;
    }
}

if (typeof module != 'undefined' && module.exports) {
    module.exports = GreatCircle;
} else {
    window['GreatCircle'] = GreatCircle;
}