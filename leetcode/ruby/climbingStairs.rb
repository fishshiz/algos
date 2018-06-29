# You are climbing a stair case. It takes n steps to reach to the top.

# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

# @param {Integer} n
# @return {Integer}
def climb_stairs(n)
    return n if n <= 2
    arr = [1, 2]
    (2...n).each do |el|
        arr << arr[el - 1] + arr[el - 2]
    end
    arr.last
end