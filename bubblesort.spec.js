describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort( [] )).toEqual( [] );
  });
  it('takes + numbers and sorts an array in order', function() {
    expect( bubbleSort([4, 9, 6, 11, 2])).toEqual([2, 4, 6, 9, 11]);
  });
  it('takes negative numbers and sorts an array in order', function() {
    expect( bubbleSort([-5, -10, -1, 3, 5, 4])).toEqual([-10, -5 , -1, 3, 4, 5]);
  });
  it('if first two numbers are already sorted', function(){
    expect( bubbleSort([1, 2, 11, 4, 17])).toEqual([1, 2, 4, 11, 17]);
  });
});