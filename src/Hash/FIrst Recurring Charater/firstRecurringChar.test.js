const firstRecurring = require('./firstRecurringChar');

describe('firstRecurring funtion',() => {
    test('with object ',() => {
        expect(firstRecurring.firstRecurringCharacter1([3,4,8,5,7,3])).toBe(3);
    });
    test('with object ',() => {
        expect(firstRecurring.firstRecurringCharacter1([-2,2,5,7])).toBe(undefined);
    });

    test('with map',() => {
        expect(firstRecurring.firstRecurringCharacter2([3,4,8,5,7,3])).toBe(3);
    });    
});