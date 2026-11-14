class Solution:
    def maxArea(self, heights: List[int]) -> int:
        left = 0
        right = len(heights) -1
        maxArea = abs(right -left) * min(heights[left], heights[right])

        while left < right:
            area = abs(right -left) * min(heights[left], heights[right])
            if area > maxArea:
                maxArea = area

            m = min(heights[left], heights[right])
            if m == heights[left]:
                left+=1
            elif m == heights[right]:
                right-=1
            
        return maxArea        