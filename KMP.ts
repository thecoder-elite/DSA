function createLPS(pattern: string) {
    let N = pattern.length;
    let lps: number[] = new Array(N).fill(0);
    let i = 0, j = 1;
    while (j < N) {
        if (pattern[j] === pattern[i]) {
            lps[j] = i + 1;
            i++;
            j++;
        }
        else {
            if (i !== 0) {
                i = lps[i - 1];
            }
            else {
                j++;
            }
        }
    }
    return lps;
}

function searchPattern(sentence: string, pattern: string) {
    let lps = createLPS(pattern);
    let i = 0, j = 0, N = sentence.length;
    while (j < N) {
        if (sentence[j] === pattern[i]) {
            j++;
            i++
        }
        else {
            if (i !== 0) {
                i = lps[i - 1];
            } else {
                j++;
            }
        }
        if (i === pattern.length) {
            return `Pattern Found at index ${j - pattern.length}`;
        }
    }
    return `Pattern not found`;
}

console.log(searchPattern('AAAAABAAABA', 'BBB'));