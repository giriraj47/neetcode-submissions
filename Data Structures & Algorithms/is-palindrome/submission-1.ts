class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
          const cleanString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  console.log(cleanString);

  let first_pointer = 0;
  let second_pointer = cleanString.length - 1;


  while (
    !(first_pointer === second_pointer) &&
    first_pointer < second_pointer
  ) {


    if (
      !(
        cleanString.charAt(first_pointer) === cleanString.charAt(second_pointer)
      )
    ) {
      return false;
    } else {
      first_pointer++;
      second_pointer--;
    }
  }

  return true;
    }
}
