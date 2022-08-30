let time = 9

function wakeUp(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 9 ) {
                time += 15;
                resolve(time);
            }
            else {
                time += 5;
                reject(time)
            }

        }, 1000);
    })

}
