from tensorflow.keras.models import load_model
import numpy as np
import pandas as pd
import sys
import json

params = {}
params['model'] = './cwru.h5'
params['test'] = './feature_test.csv'
params['opath'] = './result.csv'
params['type'] = 0
argvs = sys.argv

# 读取命令行参数
try:
    for i in range(len(argvs)):
        if i < 1:
            continue
        if argvs[i].split('=')[1] == 'None':
            params[argvs[i].split('=')[0]] = None
        else:
            Type = type(params[argvs[i].split('=')[0]])
            params[argvs[i].split('=')[0]] = Type(argvs[i].split('=')[1])
    # 加载模型和数据文件
    model = load_model(params['model'])
    data_df = pd.read_csv(params['test'])
    # 读入待判断的数据
    data = data_df.values
    pred = model.predict(data)[:,params['type']].reshape((len(pred)))
    # 构建结果文件
    result_df = pd.DataFrame({'label':pred})
    result_df.to_csv(params['opath'], index=False)
except Exception as e:
    print(e)