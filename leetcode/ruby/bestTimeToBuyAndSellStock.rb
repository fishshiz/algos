# Say you have an array for which the ith element is the price of a given stock on day i.

# Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    i = 1
    output = 0
    while i < prices.length
        if prices[i] > prices[i - 1]
            output += (prices[i] - prices[i - 1])
        end
        i += 1
    end
    output
end