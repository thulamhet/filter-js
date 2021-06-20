
let input = `paste here`
input = input.replace(/(^[ \t]*\n)/gm, "")
for(let i = 0; i < input.length; i++) {
    let value;
    if(input.slice(i, i + 3) === 'Câu') {
        let j = i;
        for (j = i; j < input.length; j++) {
            if(input.slice(j, j + 4) === '</p>') {
                console.log(input.slice(i, i + 6) );
                console.log(input.slice(i + 15, j ));
                for (let k = j; k < input.length; k++) {
                    if(input.slice(k, k + 5) === 'value') {
                        value = input[k + 7];
                        for (let m = k; m < input.length; m++) {
                            let answer;
                            switch(value) {
                                case '1': 
                                    answer = 'A';
                                    break;
                                case '2': 
                                    answer = 'B';
                                    break;
                                case '3': 
                                    answer = 'C';
                                    break;
                                default: 
                                    answer = 'D'
                                    break;
                            }
                            if(input.slice(m, m + 2) === answer + '.') {
                                for (let n = m; n < input.length; n++) {
                                    if(input.slice(n, n + 3) === '</l') {
                                        console.log(input.slice(m, n))
                                        break;
                                    }
                                }
                                break;
                            }
                        }
                        break;
                    }
                }
                break;
            };
        }
    }
}
