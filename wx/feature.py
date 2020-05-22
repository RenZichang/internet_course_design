import pandas as pd
import numpy as np
import os
from scipy import signal
import sys

#指定算法参数和备选参数值
params = {}
params['window'] = 100
params['path'] = './test.csv'
params['opath'] ='./feature_test.csv'
argvs = sys.argv

try:
    #用sys.argv读取命令行中传递过来的参数
    for i in range(len(argvs)):
        if i < 1:
            continue
        if argvs[i].split('=')[1] == 'None':
            params[argvs[i].split('=')[0]] = None
        else:
            Type = type(params[argvs[i].split('=')[0]])
            params[argvs[i].split('=')[0]] = Type(argvs[i].split('=')[1])
    # 读取数据文件
    df = pd.read_csv(params['path'])
    # 一些基本的参数
    df = df.iloc[:,0:2]
    feature_num = 3
    # 基本变量
    df_size = (len(df), len(df.iloc[0,:]))
    value_matrix = df.values
    ans = np.zeros(shape=(df_size[0]//params['window'],df_size[1]*feature_num))
    for j in range(len(ans)):
        ans[j,:df_size[1]] = np.mean(value_matrix[j*params['window']:(j+1)*params['window'],:], axis=0)
        ans[j,df_size[1]:2*df_size[1]] = np.var(value_matrix[j*params['window']:(j+1)*params['window'],:], axis=0)
        ans[j,2*df_size[1]:3*df_size[1]] = np.sum(signal.welch(value_matrix[j*params['window']:(j+1)*params['window'],:], axis=0)[1], axis=0)
    # 将特征提取完毕的数据保存为.csv文件
    ans_csv = pd.DataFrame(ans, columns=['FE_time_mean', 'FE_time_var', 'DE_time_mean', 'DE_time_var', 'FE_time_P', 'DE_time_P'])
    ans_csv.to_csv(params['opath'], index=False)
except Exception as e:
    print(e)