
strTotal = ''


def inputString():
    str1 = input()
    str2 = input()
    strTotal += str1 + '-' + str2 + ';'


def stringMatch(str1, str2):
    if str1 not in str2:
        return ' '
    length1 = len(str1)
    result = ''
    for i in range(len(str2)):
        temp = str2[i:i+length1]
        if temp == str1:
            result += str(i) + ' '
    return result  # .strip()


print(stringMatch(str1, str2))

# print(stringMatch('p', 'Popup'))
# print(stringMatch('peek a boo', 'you speek a bootiful language'))
# print(stringMatch('anas', 'bananananaspaj'))
