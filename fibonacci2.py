def F_bottom_up(n, memo):
	if n == 1 or n == 2:
		return 1
	memo[1] = 1
	memo[2] = 1
    
    # tính từ dưới tính lên
	for i in range(3, n + 1):
		memo[i] = memo[i - 1] + memo[i - 2]
	return memo[n]


def F(n):
	memo = [None] * (n + 1)
	return F_bottom_up(n, memo)

print(F(995))