const Sum = require('./twoSum');

describe('twoSum funtion',() => {
    test('2 for loop with umsorted array',() => {
        expect(Sum.twoSum1([3,4,8,5,7,3],6)).toEqual([0,5]);
    });
    test('2 for loop with sorted array',() => {
        expect(Sum.twoSum1([-2,2,5,7],0)).toEqual([0,1]);
    });

    test('index-of with umsorted array',() => {
        expect(Sum.twoSum2([3,4,8,5,7,3],6)).toEqual([0,5]);
    });
    test('index-of with sorted array',() => {
        expect(Sum.twoSum2([-2,2,5,7],0)).toEqual([0,1]);
    });

    test('object with umsorted array',() => {
        expect(Sum.twoSum3([3,4,8,5,7,3],6)).toEqual([0,5]);
    });
    test('object with sorted array',() => {
        expect(Sum.twoSum3([-2,2,5,7],0)).toEqual([0,1]);
    });

    test('map data-strcture with umsorted array',() => {
        expect(Sum.twoSum4([3,4,8,5,7,3],6)).toEqual([0,5]);
    });
    test('map data-structure with sorted array',() => {
        expect(Sum.twoSum4([-2,2,5,7],0)).toEqual([0,1]);
    });
    
});