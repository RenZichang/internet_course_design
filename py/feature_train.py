import pandas as pd
import numpy as np
import os
from scipy import signal

file_name_list = os.listdir('./train')
typ = ['NORMAL', 'B', 'OR', 'IR']
num = [2, 6, 14, 6]

# 测试集数据预处理+特征提取
window = 100
ans_list = []
feature_num = 3
for i in range(len(file_name_list)):
    df = pd.read_csv('./train/'+file_name_list[i])
    # 只保留FE和DE
    df = df.iloc[:,0:2]
    df_size = (len(df), len(df.iloc[0,:]))
    value_matrix = df.values
    ans_list.append(np.zeros(shape=(df_size[0]//window,df_size[1]*feature_num+4)))
    # 特征有三种，时域的均值mean、方差值var以及频域的功率谱密度值
    for j in range(len(ans_list[i])):
        ans_list[i][j,:df_size[1]] = np.mean(value_matrix[j*window:(j+1)*window,:], axis=0)
        ans_list[i][j,df_size[1]:2*df_size[1]] = np.var(value_matrix[j*window:(j+1)*window,:], axis=0)
        ans_list[i][j,2*df_size[1]:3*df_size[1]] = np.sum(signal.welch(value_matrix[j*window:(j+1)*window,:], axis=0)[1], axis=0)
        ans_list[i][j,feature_num*df_size[1]+typ.index(file_name_list[i][:-6])] = 1

ans_all = np.concatenate([ans for ans in ans_list])
# 将特征提取完毕的数据保存为.csv文件
print(np.shape(ans_all))
ans_csv_value = np.reshape(np.array(ans_all), (-1, df_size[1]*feature_num+4))
ans_csv = pd.DataFrame(ans_csv_value, columns=['FE_time_mean', 'FE_time_var', 'DE_time_mean', 'DE_time_var', 'FE_time_P', 'DE_time_P'] + typ)
ans_csv.to_csv('./feature_train.csv', index=False)
print(ans_csv.head())

