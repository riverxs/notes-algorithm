import random

# 路径成本计算函数模块
def distsum(path, dist):
    sum_dist = 0
    for i in range(0, len(path) - 1):
        #查找相邻距离
        di = dist[int(path[i]) - 1][int(path[i + 1]) - 1]
        sum_dist += di
    # 起点到终点距离
    di = dist[int(path[len(path) - 1]) -1][path[0] - 1]
    sum_dist  += di
    return sum_dist

# 构造全部路径，递归实现
def perm(city) :
    if len(city) <= 1:   # 递归基准情形
        return [city]
    r = []
    for i in range(len(city)):
        s = city[:i] + city[i + 1 : ] # 对每个city构造不包括当前city的所有可能list
        p = perm(s)
        for x in p :
            r.append(city[i:i + 1] + x)  #将可能的list与该city合并，得到完整的序列
    return r

# 构造city
city = [1,2,3,4,5]
    
#距离表
dist = ((0,1,3,4,5),
        (1,0,1,2,3),
        (3,1,0,1,2),
        (4,2,1,0,1),
        (5,3,2,1,0))

# 采用递归实现的最优路径查找算法
def main():
    allPath = perm(city)

    optimal = 1000000      # 初始化最优路径
    index = -1
    
    for i in range(0,len(allPath)):
        pathOptimal = distsum(allPath[i], dist)
        if pathOptimal < optimal:
            optimal = pathOptimal   # 更新最优路径
            index = i

    print('the length of the optimal path is :', optimal)
    print('the optiaml path is:', allPath[index])

main()
         
# 随机生成一条路径
def randomPath(city):
    allCity = city[:]
    path = []
    loop = True
    while loop:
        if len(allCity) == 0:
            loop = False
        else:
            temp = random.choice(allCity)
            path.append(temp)
            allCity.remove(temp)
    return path


# 随机算法求最优路径            
def main2():  
    num = 100
    optimal = 1000000
    opPath =[]
    for i in range(0,1000):
        opPath = randomPath(city)
        pathOptimal = distsum(opPath, dist)
        if pathOptimal < optimal:
            optimal = pathOptimal  # 更新更优路径
    print('the length of the optimal path is :' optimal)
    print('the optiaml path is: ',opPath)        
   
main2() 
