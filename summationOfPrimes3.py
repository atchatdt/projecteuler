import math
import time
start_time = time.time()


def summationOfPrimes(limit):
    sievebound = int((limit-1)/2)
    sieve = [False] * sievebound
    crosslimit = int((math.sqrt(limit)-1)/2)

    for i in range(1, crosslimit):
        if not sieve[i]:
            for j in range(2*i*(i+1), sievebound, 2*i+1):
                sieve[j] = True
    print(sieve)
    sum = 2
    for i in range(1, sievebound):
        if not sieve[i]:
            sum += 2*i+1
    return sum

print(summationOfPrimes(10))

print("--- %s seconds ---" % (time.time() - start_time))