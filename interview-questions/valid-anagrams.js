function areAnagrams(s1, s2) {
    if (s1.length !== s2.length) return false;

    const freq1 = {};
    const freq2 = {};

    for (let char of s1) {
        if (char in freq1) {
            freq1[char] += 1;
        } else {
            freq1[char] = 1;
        }
    }

    for (let char of s2) {
        if (char in freq2) {
            freq2[char] += 1;
        } else {
            freq2[char] = 1;
        }
    }

    for (key in freq1) {
        if (!(key in freq2) || freq1[key] !== freq2[key]) return false;
    }

    return true;
}