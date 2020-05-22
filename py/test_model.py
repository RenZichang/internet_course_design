from tensorflow.keras.models import load_model
import numpy as np
import pandas as pd

result = []
# 加载模型和数据文件
model = load_model('./cwru.h5')
data_df = pd.read_csv('./feature_test.csv')
# 挑选ID和数据
ID = data_df.loc[:,'ID'].values
data = data_df.iloc[:,:-1].values

# 获取每个标签所对应的预测结果
ID_uni = np.unique(ID).tolist()
pred_uni = np.zeros((len(ID_uni), 4))
pred = model.predict(data)
for i in range(len(pred)):
    pred_uni[ID_uni.index(ID[i])] += pred[i]

pred_uni = np.argmax(pred_uni, axis=1)

# 构建结果文件
result_df = pd.DataFrame({'filename':ID_uni, 'label':pred_uni})
result_df.to_csv('result.csv', index=False)
print(result_df.head())
