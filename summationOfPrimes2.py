import math
import time
start_time = time.time()

# limit > 10
def summationOfPrimes(limit):
    crosslimit = int(math.sqrt(limit))
    sieve = [False] * limit

    # các giá trị chẵn => không phải số nguyên tố
    for n in range(4, limit, 2):
        sieve[n] = True

    # các giá trị lẻ
    for n in range(3, crosslimit, 2):
        # kiểm tra => nếu là False thì mới set giá trị
        if not sieve[n]:
            for m in range(n * n, limit, 2*n):
                sieve[m] = True
    sum = 0
    for n in range(2, limit):

        if not sieve[n]:
            sum += n
    return sum


print(summationOfPrimes(20000000))

print("--- %s seconds ---" % (time.time() - start_time))
