var numberOfWays = function(corridor) {
    let numberOfSeats = 0;
    let indeciesOfSeats = [];
    let dividers = [];
    const mod = 10 **9 + 7;
    for (let i=0; i < corridor.length; i++) {
        if (corridor[i] === 'S') {
            numberOfSeats++;
            indeciesOfSeats.push(i);

            if (indeciesOfSeats.length === 4) {
                const dividerBeginning = indeciesOfSeats[1];
                const dividerEnding = indeciesOfSeats[2];
                dividers.push( dividerEnding-dividerBeginning );
                indeciesOfSeats.shift();
                indeciesOfSeats.shift();
            }
        }
    }
    
    if (numberOfSeats % 2 || numberOfSeats < 2) {
        return 0;
    }
    if (dividers.length < 1) {
        return 1;
    }
    return dividers.reduce((a,c) => ( a * c % mod));
    };

