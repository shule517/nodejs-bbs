let request = require('request');
let fs = require('fs')

class Bbs {
    constructor(bbs, dir, key) {
        this.bbs = bbs;
        this.dir = dir;
        this.key = key;
    }

    writeRes(name, mail, text) {
        let options = {
            uri: 'http://jbbs.shitaraba.net/bbs/write.cgi/' + this.dir + '/' + this.bbs + '/' + this.key + '/',
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                Host: 'jbbs.shitaraba.net',
                Referer: 'http://jbbs.shitaraba.net/' + this.dir + '/' + this.bbs + '/'
            },
            form: {
                BBS: this.bbs, //'45037',
                DIR: this.dir, // 'game',
                KEY: this.key, // '1310263750',
                MAIL: mail,
                MESSAGE: text,
                NAME: name,
                submit: '%C5%EA%B9%C6%A4%B9%A4%EB',
                TIME: new Date().getTime()
            },
        };

        request.post(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                console.log('OK:' + body);
            } else {
                console.log('NG:' + response);
            }
        });
    }
}

let bbs = new Bbs('45037', 'game', '1310263750');
bbs.writeRes('namae', 'sage', 'oiu-');
