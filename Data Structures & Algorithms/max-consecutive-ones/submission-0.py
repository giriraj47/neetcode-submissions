class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        c = 0
        streak = 0
        for num in nums:
            if(num == 1):
                c+=1
                if c > streak:
                    streak = c
            if(num != 1):
                c = 0    
        return streak
