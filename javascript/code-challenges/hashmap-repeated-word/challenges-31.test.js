'use strict';

const repeatedWord = (string) => {
    let words = string.toLowerCase().split(/[\s|,|.]/);
    for (let i = 0; i < words.length; i++) {
        if (words.includes(words[i]) && words.indexOf(words[i]) !== words.lastIndexOf(words[i])) {
            return words[i];
        }
    }
    return 'no repeated words';
};

describe('Repeated Word test', () => {

    it('should return the first repeated word', () => {
        let string = 'Once upon a time, there was a brave princess who...';
        expect(repeatedWord(string)).toBe('a');
    });

    it('should match words with different casing', () => {
        let string = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
        expect(repeatedWord(string)).toBe('it');
    });

    it('should account for symboles like periods and commas', () => {
        let string = 'this is a word, and word again';
        expect(repeatedWord(string)).toBe('word');
    });

    it('should inform you if there are no repeated words', () => {
        let string = 'looks like nothing repeated here';
        expect(repeatedWord(string)).toBe('no repeated words');
    });

});
