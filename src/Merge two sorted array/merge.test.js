const merge = require('./merge');

describe('Merge two sorted array in 1 sorted array', () => {
    test('[],[] merge these two',() => {
        expect(merge([],[])).toEqual([]);
    });
    test("[],'array' merge these two",() => {
        expect(merge([],'array')).toEqual([]);
    });
    test("[1,4,7,9],[2,3,15,17] merge these two",() => {
        expect(merge([1,4,7,9],[2,3,15,17])).toEqual([1,2,3,4,7,9,15,17]);
    });
    test("[1,4,7,9],[2,3,5,7] merge these two",() => {
        expect(merge([1,4,7,9],[2,3,5,7])).toEqual([1,2,3,4,5,7,7,9]);
    });
    test("[2,15,29],[1,13,25,34] merge these two",() => {
        expect(merge([2,15,29],[1,13,25,34])).toEqual([1,2,13,15,25,29,34]);
    });
});