# Say you have an array for which the ith element is the price of a given stock on day i.

# If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

# Note that you cannot sell a stock before you buy one.
# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    return 0 if prices.length <= 1
    max_diff = prices[1] - prices[0]
    min = prices[0]
    i = 1
    while i < prices.length
        if max_diff < prices[i] - min
            max_diff = prices[i] - min
        end
        if min > prices[i]
            min = prices[i]
        end
        i += 1
    end
    return max_diff > 0 ? max_diff : 0
end