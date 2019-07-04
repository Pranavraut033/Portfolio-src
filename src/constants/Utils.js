export default {
    EasingFunctions: {
        // no easing, no acceleration
        linear: function (t) {
            return t
        },
        // accelerating from zero velocity
        easeInQuad: function (t) {
            return t * t
        },
        // decelerating to zero velocity
        easeOutQuad: function (t) {
            return t * (2 - t)
        },
        // acceleration until halfway, then deceleration
        easeInOutQuad: function (t) {
            return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        },
        // accelerating from zero velocity 
        easeInCubic: function (t) {
            return t * t * t
        },
        // decelerating to zero velocity 
        easeOutCubic: function (t) {
            return (--t) * t * t + 1
        },
        // acceleration until halfway, then deceleration 
        easeInOutCubic: function (t) {
            return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        },
        // accelerating from zero velocity 
        easeInQuart: function (t) {
            return t * t * t * t
        },
        // decelerating to zero velocity 
        easeOutQuart: function (t) {
            return 1 - (--t) * t * t * t
        },
        // acceleration until halfway, then deceleration
        easeInOutQuart: function (t) {
            return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
        },
        // accelerating from zero velocity
        easeInQuint: function (t) {
            return t * t * t * t * t
        },
        // decelerating to zero velocity
        easeOutQuint: function (t) {
            return 1 + (--t) * t * t * t * t
        },
        // acceleration until halfway, then deceleration 
        easeInOutQuint: function (t) {
            return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
        }
    },
    HTML_UTILS: {
        getClasses(ele) {
            return ele.className.split(" ");
        },
        addClass(ele, ...names) {
            let classList = this.getClasses(ele).concat(names);
            ele.className = [...new Set(classList)].join(" ");
        },
        removeClass(ele, ...names) {
            function arrayRemove(arr, value) {
                return arr.filter(function (ele) {
                    return ele != value;
                });
            }
            let classList = this.getClasses(ele)
            names.forEach((name) => {
                classList = arrayRemove(classList, name);
            })
            ele.className = classList.join(" ");
        }
    },
    arrayRemove(arr, value) {
        return arr.filter(function (ele) {
            return ele != value;
        });
    },
    blend_colors(color1, color2, percentage) {
        let int_to_hex = (num) => {
            var hex = Math.round(num).toString(16);
            if (hex.length == 1)
                hex = '0' + hex;
            return hex;
        }
        color1 = color1 || '#000000';
        color2 = color2 || '#ffffff';
        percentage = percentage || 0.5;

        if (color1.length == 4)
            color1 = color1[1] + color1[1] + color1[2] + color1[2] + color1[3] + color1[3];
        else
            color1 = color1.substring(1);
        if (color2.length == 4)
            color2 = color2[1] + color2[1] + color2[2] + color2[2] + color2[3] + color2[3];
        else
            color2 = color2.substring(1);

        color1 = [parseInt(color1[0] + color1[1], 16), parseInt(color1[2] + color1[3], 16), parseInt(color1[4] + color1[5], 16)];
        color2 = [parseInt(color2[0] + color2[1], 16), parseInt(color2[2] + color2[3], 16), parseInt(color2[4] + color2[5], 16)];

        var color3 = [
            (1 - percentage) * color1[0] + percentage * color2[0],
            (1 - percentage) * color1[1] + percentage * color2[1],
            (1 - percentage) * color1[2] + percentage * color2[2]
        ];

        color3 = '#' + int_to_hex(color3[0]) + int_to_hex(color3[1]) + int_to_hex(color3[2]);
        return color3;
    },
    sort_by(field, reverse, primer) {
        var key = primer ?
            function (x) {
                return primer(x[field]);
            } :
            function (x) {
                return x[field];
            };

        reverse = !reverse ? 1 : -1;

        return function (a, b) {
            return (
                (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a))
            );
        };
    }
}