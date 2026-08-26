class Solution {
encode(strs: string[]): string {
    if (strs.length === 0) return "-1";

    return strs.join("@#@#$#@!@#^%^&%&%$%$^$%&");
  }

  decode(str: string): string[] {
    if (str === "-1") return [];

    return str.split("@#@#$#@!@#^%^&%&%$%$^$%&");
  }
}
